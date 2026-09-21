import { conditions } from "@/content/home";
import { SectionHeading } from "../SectionHeading";

export function Tricologia() {
  return (
    <section id="tricologia">
      <div className="container">
        <div className="pain-grid">
          <div className="pain-image" role="img" aria-label="Avaliação capilar" />

          <div>
            <SectionHeading eyebrow="Tricologia" title="Seu cabelo mudou — e você percebeu." />

            <p className="lead">
              Mais fios no banho, diminuição do volume, couro cabeludo começando a aparecer,
              entradas mais evidentes ou um cabelo que já não responde como antes.
            </p>
            <br />
            <p className="lead">
              Existem diferentes razões para um cabelo começar a cair ou afinar. Por isso, o
              primeiro passo é entender o seu caso.
            </p>
            <br />
            <a href="#contato" className="btn btn-primary">
              Quero avaliar meu cabelo
            </a>
          </div>
        </div>

        <div className="conditions">
          {conditions.map((item, i) => (
            <div className="condition" key={item.title}>
              <div className="condition-number">{String(i + 1).padStart(2, "0")}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
