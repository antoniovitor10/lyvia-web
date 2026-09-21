import { steps } from "@/content/home";
import { SectionHeading } from "../SectionHeading";

export function ComoFunciona() {
  return (
    <section>
      <div className="container">
        <SectionHeading eyebrow="Jornada de cuidado" title="Como funciona" />
        <p className="lead">Um caminho claro, da avaliação ao acompanhamento da evolução.</p>

        <div className="steps">
          {steps.map((step, i) => (
            <div className="step" key={step.title}>
              <div className="step-number">{String(i + 1).padStart(2, "0")}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
