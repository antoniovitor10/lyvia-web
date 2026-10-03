import { BotaoWhatsApp } from "../BotaoWhatsApp";
import { SectionHeading } from "../SectionHeading";

export function CtaFinal() {
  return (
    <section className="final-cta" id="contato">
      <div className="container">
        <SectionHeading
          eyebrow="Agendar Consulta"
          title="Percebeu que seu cabelo não está mais como antes?"
        />
        <p>
          Quanto antes entendemos o que está acontecendo, mais cedo podemos definir o cuidado
          adequado para aquele momento.
        </p>
        <BotaoWhatsApp origem="cta-final" variante="outline">
          Agendar Consulta
        </BotaoWhatsApp>
      </div>
    </section>
  );
}
