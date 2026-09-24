"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type Props = {
  slug: string;
  titulo: string;
  largura: number;
  altura: number;
};

export function BeforeAfter({ slug, titulo, largura, altura }: Props) {
  const areaRef = useRef<HTMLDivElement>(null);
  const [posicao, setPosicao] = useState(50);
  const [arrastando, setArrastando] = useState(false);
  const [jaMexeu, setJaMexeu] = useState(false);

  const mover = useCallback((clientX: number) => {
    const area = areaRef.current;
    if (!area) return;
    const { left, width } = area.getBoundingClientRect();
    const pct = ((clientX - left) / width) * 100;
    setPosicao(Math.min(100, Math.max(0, pct)));
  }, []);

  useEffect(() => {
    if (!arrastando) return;

    const aoMover = (e: PointerEvent) => mover(e.clientX);
    const aoSoltar = () => setArrastando(false);

    window.addEventListener("pointermove", aoMover);
    window.addEventListener("pointerup", aoSoltar);
    return () => {
      window.removeEventListener("pointermove", aoMover);
      window.removeEventListener("pointerup", aoSoltar);
    };
  }, [arrastando, mover]);

  // Apresenta o efeito uma vez, quando o bloco entra na tela.
  useEffect(() => {
    const area = areaRef.current;
    if (!area || jaMexeu) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (!entrada.isIntersecting) return;
        observador.disconnect();
        const quadros = [50, 62, 74, 82, 74, 60, 46, 34, 26, 34, 44, 50];
        quadros.forEach((valor, i) => {
          setTimeout(() => setPosicao(valor), 220 + i * 130);
        });
      },
      { threshold: 0.45 },
    );

    observador.observe(area);
    return () => observador.disconnect();
  }, [jaMexeu]);

  const aoPegar = (clientX: number) => {
    setJaMexeu(true);
    setArrastando(true);
    mover(clientX);
  };

  const pelaTecla = (e: React.KeyboardEvent) => {
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
    e.preventDefault();
    setJaMexeu(true);
    setPosicao((p) => Math.min(100, Math.max(0, p + (e.key === "ArrowLeft" ? -4 : 4))));
  };

  return (
    <div
      ref={areaRef}
      className={`ba${arrastando ? " ba-arrastando" : ""}`}
      onPointerDown={(e) => aoPegar(e.clientX)}
    >
      <Image
        src={`/images/${slug}-depois.jpg`}
        alt={`${titulo}: depois do acompanhamento`}
        width={largura}
        height={altura}
        sizes="(max-width: 900px) 92vw, 400px"
        className="ba-img"
      />

      <div className="ba-antes" style={{ clipPath: `inset(0 ${100 - posicao}% 0 0)` }}>
        <Image
          src={`/images/${slug}-antes.jpg`}
          alt={`${titulo}: antes do acompanhamento`}
          width={largura}
          height={altura}
          sizes="(max-width: 900px) 92vw, 400px"
          className="ba-img"
        />
      </div>

      <span className="ba-tag ba-tag-antes">Antes</span>
      <span className="ba-tag ba-tag-depois">Depois</span>

      <div
        className="ba-alca"
        style={{ left: `${posicao}%` }}
        role="slider"
        tabIndex={0}
        aria-label={`Comparar antes e depois: ${titulo}`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(posicao)}
        onKeyDown={pelaTecla}
      >
        <span className="ba-pino" aria-hidden="true" />
      </div>
    </div>
  );
}
