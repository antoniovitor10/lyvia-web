import Image from "next/image";
import { SectionHeading } from "../SectionHeading";

export function Resultados() {
  return (
    <section className="results" id="resultados">
      <div className="container">
        <SectionHeading eyebrow="Evolução" title="Resultados construídos ao longo do tratamento" />
        <p className="lead">
          Cada evolução é individual e depende das características de cada caso.
        </p>

        <div className="case">
          <figure className="case-photo">
            <Image
              src="/images/caso-01-antes.jpg"
              alt="Couro cabeludo antes do acompanhamento, com rarefação na região central"
              width={901}
              height={1600}
              sizes="(max-width: 900px) 100vw, 45vw"
            />
            <figcaption>Antes</figcaption>
          </figure>

          <figure className="case-photo">
            <Image
              src="/images/caso-01-depois.jpg"
              alt="Couro cabeludo depois do acompanhamento, com mais densidade na região central"
              width={900}
              height={1600}
              sizes="(max-width: 900px) 100vw, 45vw"
            />
            <figcaption>Depois</figcaption>
          </figure>
        </div>

        <p className="case-note">
          Caso acompanhado na clínica: rarefação e afinamento na região central, com recuperação
          progressiva da densidade. Os resultados são individuais e podem variar de acordo com
          cada caso.
        </p>
      </div>
    </section>
  );
}
