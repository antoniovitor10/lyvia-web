export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://lyviapinheirotricologista.com.br";

export const whatsappNumber = "5527992635494";
export const whatsappDisplay = "(27) 99263-5494";

// Link Tintim recebido de Chico em 30/09/2026 para todos os contatos do site.
// A variável própria evita que uma configuração antiga de wa.me desative o tracking.
export const whatsappUrl =
  process.env.NEXT_PUBLIC_TINTIM_URL ||
  "https://tintim.link/whatsapp/f13db03f-041d-4070-9d07-e73cbf7246b4/1b1c62f7-58f7-4cbe-8005-77040907fedf";

export const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("R. Inácio Higino, 673, Praia da Costa, Vila Velha - ES");
