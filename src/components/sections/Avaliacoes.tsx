import { reviews } from "@/content/home";
import { SectionHeading } from "../SectionHeading";

export function Avaliacoes() {
  return (
    <section>
      <div className="container">
        <SectionHeading eyebrow="Experiência" title="O que dizem nossas pacientes" />

        <div className="reviews">
          {reviews.map((text) => (
            <div className="review" key={text}>
              <div className="stars" aria-label="5 estrelas">★★★★★</div>
              <p>“{text}”</p>
              <div className="review-author">Paciente • Google</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
