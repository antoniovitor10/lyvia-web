import { SectionHeading } from "../SectionHeading";

export function Sobre() {
  return (
    <section className="about" id="sobre">
      <div className="container">
        <div className="about-grid">
          <div className="about-photo" role="img" aria-label="Lyvia Pinheiro" />

          <div>
            <SectionHeading eyebrow="Quem vai cuidar de você" title="Lyvia Pinheiro" />

            <div className="professional-title">
              Biomédica Esteta | Especialista em Tricologia
            </div>

            <p className="lead">
              Minha atuação é voltada principalmente ao cuidado de pessoas que convivem com
              queda, afinamento e alterações capilares.
            </p>
            <br />
            <p className="lead">
              Cada caso começa com uma avaliação individual, porque a história daquele cabelo
              é parte fundamental para compreender por que ele chegou até ali.
            </p>

            <div className="quote">
              “Ciência, cuidado e acompanhamento em cada etapa do processo.”
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
