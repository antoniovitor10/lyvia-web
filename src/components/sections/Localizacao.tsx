import { mapsUrl } from "@/lib/site";
import { SectionHeading } from "../SectionHeading";

export function Localizacao() {
  return (
    <section>
      <div className="container">
        <div className="location-grid">
          <div className="building" role="img" aria-label="Prédio da clínica" />

          <div>
            <SectionHeading eyebrow="Vila Velha • Espírito Santo" title="Estamos na Praia da Costa." />
            <p className="lead">
              R. Inácio Higino, 673, Sala 410
              <br />
              Praia da Costa, Vila Velha, ES
            </p>
            <br />
            <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              Como chegar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
