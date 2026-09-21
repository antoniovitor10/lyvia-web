import { SectionHeading } from "../SectionHeading";

export function Estetica() {
  return (
    <section className="esthetic" id="estetica">
      <div className="container">
        <div className="split-section">
          <div className="split-copy">
            <SectionHeading
              eyebrow="Estética Avançada"
              title="Beleza que respeita a sua naturalidade."
            />
            <p className="lead">
              Além dos cuidados capilares, a clínica oferece tratamentos estéticos
              selecionados para quem busca cuidar da aparência de forma individualizada e
              natural.
            </p>
            <br />
            <div>
              <a href="#contato" className="btn btn-outline">
                Conhecer os tratamentos
              </a>
            </div>
          </div>

          <div className="esthetic-image" role="img" aria-label="Estética avançada" />
        </div>
      </div>
    </section>
  );
}
