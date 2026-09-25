import { PLACE_ID } from "@/lib/google-reviews";
import { siteUrl, whatsappNumber } from "@/lib/site";

// Dados do negócio para o Google. Sem nota/avaliações: o Google só aceita
// aqui avaliações coletadas pelo próprio site, não as do perfil dele.
const dados = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: "Clínica Lyvia Pinheiro",
  description:
    "Clínica de tricologia e estética em Vila Velha (ES). Avaliação e acompanhamento para queda capilar, afinamento e saúde do couro cabeludo.",
  url: siteUrl,
  image: `${siteUrl}/images/clinica-recepcao.webp`,
  telephone: `+${whatsappNumber}`,
  medicalSpecialty: "Dermatology",
  address: {
    "@type": "PostalAddress",
    streetAddress: "R. Inácio Higino, 673, Sala 410, Ed. Mubadalla Office",
    addressLocality: "Vila Velha",
    addressRegion: "ES",
    postalCode: "29101-087",
    addressCountry: "BR",
  },
  geo: { "@type": "GeoCoordinates", latitude: -20.3401, longitude: -40.2905 },
  sameAs: [`https://www.google.com/maps/search/?api=1&query=Google&query_place_id=${PLACE_ID}`],
};

export function DadosEstruturados() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(dados) }}
    />
  );
}
