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
              <span className="block">CRBM 10.311 ES</span>
            </div>

            <p className="lead">
              Há 8 anos atuando na Tricologia, Lyvia Pinheiro está entre as profissionais que
              ajudaram a consolidar essa área em Vila Velha, construindo uma trajetória dedicada
              principalmente ao cuidado de pessoas que convivem com queda de cabelo, calvície,
              afinamento e outras alterações capilares.
            </p>
            <br />
            <p className="lead">
              A experiência adquirida ao longo desses anos e o acompanhamento de diferentes
              casos desenvolveram um olhar cada vez mais individualizado sobre cada pessoa e
              cada etapa do processo.
            </p>
            <br />
            <p className="lead">
              Por isso, acredito que um bom acompanhamento começa antes de qualquer procedimento.
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
