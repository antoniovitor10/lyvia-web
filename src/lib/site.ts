export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://lyviapinheirotricologista.com.br";

// TODO: substituir pelo número real da clínica (formato 55DDDNUMERO).
export const whatsappUrl =
  process.env.NEXT_PUBLIC_WHATSAPP_URL ?? "https://wa.me/55XXXXXXXXXXX";

export const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("R. Inácio Higino, 673, Praia da Costa, Vila Velha - ES");
