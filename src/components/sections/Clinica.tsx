import { SectionHeading } from "../SectionHeading";

export function Clinica() {
  return (
    <section id="clinica">
      <div className="container">
        <SectionHeading
          eyebrow="A clínica"
          title="Um espaço pensado para cuidar de você com conforto e privacidade."
        />

        <div className="clinic-gallery">
          <div className="clinic-main" role="img" aria-label="Recepção da clínica" />
          <div className="clinic-side">
            <div className="clinic-office" role="img" aria-label="Consultório" />
            <div className="clinic-hairspa" role="img" aria-label="Sala de Hair Spa" />
          </div>
        </div>
      </div>
    </section>
  );
}
