import { whatsappUrl } from "@/lib/site";
import { SectionHeading } from "../SectionHeading";

export function CtaFinal() {
  return (
    <section className="final-cta" id="contato">
      <div className="container">
        <SectionHeading
          eyebrow="Agende sua avaliação"
          title="Percebeu que seu cabelo não está mais como antes?"
        />
        <p>
          Quanto antes entendemos o que está acontecendo, mais cedo podemos definir o cuidado
          adequado para aquele momento.
        </p>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
          Quero agendar minha avaliação
        </a>
      </div>
    </section>
  );
}
