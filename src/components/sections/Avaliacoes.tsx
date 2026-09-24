import { reviews } from "@/content/home";
import { buscarAvaliacoes, perfilUrl } from "@/lib/google-reviews";
import { SectionHeading } from "../SectionHeading";

function Estrelas({ nota }: { nota: number }) {
  const cheias = Math.round(nota);
  return (
    <div className="stars" aria-label={`${nota.toFixed(1)} de 5`}>
      {"★".repeat(cheias)}
      <span className="stars-vazias">{"★".repeat(5 - cheias)}</span>
    </div>
  );
}

export async function Avaliacoes() {
  const perfil = await buscarAvaliacoes();

  return (
    <section id="avaliacoes">
      <div className="container">
        <SectionHeading eyebrow="Experiência" title="O que dizem nossas pacientes" />

        {perfil && (
          <div className="google-resumo">
            <span className="google-nota">{perfil.nota.toFixed(1)}</span>
            <div>
              <Estrelas nota={perfil.nota} />
              <p>
                {perfil.total} avaliações no Google
              </p>
            </div>
          </div>
        )}

        <div className="reviews">
          {perfil
            ? perfil.avaliacoes.map((avaliacao) => (
                <div className="review" key={avaliacao.autor + avaliacao.quando}>
                  <Estrelas nota={avaliacao.nota} />
                  <p>{avaliacao.texto}</p>
                  <div className="review-author">
                    {avaliacao.autor} • {avaliacao.quando}
                  </div>
                </div>
              ))
            : reviews.map((texto) => (
                <div className="review" key={texto}>
                  <div className="stars" aria-label="5 estrelas">★★★★★</div>
                  <p>“{texto}”</p>
                  <div className="review-author">Paciente • Google</div>
                </div>
              ))}
        </div>

        <a href={perfilUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline google-link">
          Ver todas as avaliações no Google
        </a>
      </div>
    </section>
  );
}
