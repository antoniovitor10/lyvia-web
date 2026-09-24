import Image from "next/image";
import { casos } from "@/content/home";
import { SectionHeading } from "../SectionHeading";

export function Resultados() {
  return (
    <section className="results" id="resultados">
      <div className="container">
        <SectionHeading eyebrow="Evolução" title="Resultados construídos ao longo do tratamento" />
        <p className="lead">
          Cada evolução é individual e depende das características de cada caso.
        </p>

        <div className="cases">
          {casos.map((caso) => (
            <article className="case" key={caso.slug}>
              <div className="case-pair">
                <figure className="case-photo">
                  <Image
                    src={`/images/${caso.slug}-antes.jpg`}
                    alt={`${caso.titulo}: antes do acompanhamento`}
                    width={caso.largura}
                    height={caso.altura}
                    sizes="(max-width: 900px) 45vw, 22vw"
                  />
                  <figcaption>Antes</figcaption>
                </figure>

                <figure className="case-photo">
                  <Image
                    src={`/images/${caso.slug}-depois.jpg`}
                    alt={`${caso.titulo}: depois do acompanhamento`}
                    width={caso.largura}
                    height={caso.altura}
                    sizes="(max-width: 900px) 45vw, 22vw"
                  />
                  <figcaption>Depois</figcaption>
                </figure>
              </div>

              <h3>{caso.titulo}</h3>
              <p>{caso.descricao}</p>
            </article>
          ))}
        </div>

        <p className="case-note">
          Os resultados são individuais e podem variar de acordo com cada caso.
        </p>
      </div>
    </section>
  );
}
