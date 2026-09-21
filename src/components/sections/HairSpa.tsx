import { SectionHeading } from "../SectionHeading";

export function HairSpa() {
  return (
    <section id="hairspa">
      <div className="container">
        <div className="split-section">
          <div className="split-image" role="img" aria-label="Espaço Hair Spa" />

          <div className="split-copy">
            <SectionHeading eyebrow="Hair Spa" title="Saúde capilar também envolve cuidado." />
            <p className="lead">
              Um espaço dedicado a protocolos de terapia capilar e cuidados com couro cabeludo
              e fios, dentro de uma experiência confortável e individualizada.
            </p>
            <br />
            <div>
              <a href="#contato" className="btn btn-primary">
                Conheça o Hair Spa
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
