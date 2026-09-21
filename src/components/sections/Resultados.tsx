import { results } from "@/content/home";
import { SectionHeading } from "../SectionHeading";

export function Resultados() {
  return (
    <section className="results">
      <div className="container">
        <SectionHeading eyebrow="Evolução" title="Resultados construídos ao longo do tratamento" />
        <p className="lead">
          Cada evolução é individual e depende das características de cada caso.
        </p>

        <div className="results-grid">
          {results.map((caption) => (
            <div className="result-card" key={caption}>
              <div className="result-photo">
                INSERIR AQUI
                <br />
                ANTES E DEPOIS REAL
              </div>
              <p>{caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
