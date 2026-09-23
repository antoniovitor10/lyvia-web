export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://lyviapinheirotricologista.com.br";

export const whatsappNumber = "5527992635494";
export const whatsappDisplay = "(27) 99263-5494";

const whatsappMessage =
  "Olá! Vim pelo site e gostaria de agendar uma avaliação na Clínica Lyvia Pinheiro.";

export const whatsappUrl =
  process.env.NEXT_PUBLIC_WHATSAPP_URL ??
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

export const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("R. Inácio Higino, 673, Praia da Costa, Vila Velha - ES");
