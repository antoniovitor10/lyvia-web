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
                Buscando a melhor tricologista da Região de Vila Velha e Vitória?
              </strong>
            </p>

            <p>
              Aqui você encontra cuidado e tecnologia em tratamentos capilares, alopecia e
              queda de cabelo. Agende uma consulta e tenha acompanhamento personalizado.
            </p>

            <div className="hero-actions">
              <BotaoWhatsApp origem="hero">Agendar Consulta</BotaoWhatsApp>
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
