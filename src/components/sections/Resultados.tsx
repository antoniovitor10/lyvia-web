import { BeforeAfter } from "../BeforeAfter";
import { casos } from "@/content/home";
import { SectionHeading } from "../SectionHeading";

export function Resultados() {
  return (
    <section className="results" id="resultados">
      <div className="container">
        <SectionHeading eyebrow="Evolução" title="Resultados construídos ao longo do tratamento" />
        <p className="lead">
          Cada evolução é individual e depende das características de cada caso. Arraste para
          comparar o antes e o depois.
        </p>

        <div className="cases">
          {casos.map((caso) => (
            <article className="case" key={caso.slug}>
              <BeforeAfter
                slug={caso.slug}
                titulo={caso.titulo}
                largura={caso.largura}
                altura={caso.altura}
              />
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
