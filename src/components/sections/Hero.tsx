import { BotaoWhatsApp } from "../BotaoWhatsApp";

export function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">Clínica Lyvia Pinheiro</div>

            <h1>
              Tricologia
              <span>e Estética Avançada</span>
            </h1>

            <p>
              <strong>
                Cuidar do cabelo começa por compreender o que está acontecendo com ele.
              </strong>
            </p>

            <p>
              Tratamentos para queda capilar, afinamento e saúde do couro cabeludo, com
              avaliação individualizada e acompanhamento ao longo do processo.
            </p>

            <div className="hero-actions">
              <BotaoWhatsApp origem="hero">Agendar avaliação</BotaoWhatsApp>
              <a href="#tricologia" className="btn btn-outline">
                Conhecer os tratamentos
              </a>
            </div>
          </div>

          <div className="hero-photo" role="img" aria-label="Lyvia Pinheiro na clínica" />
        </div>
      </div>
    </section>
  );
}
