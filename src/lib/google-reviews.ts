// Avaliações do Google Meu Negócio, buscadas no build (export estático).
// Precisa de GOOGLE_PLACES_API_KEY no ambiente de build.

export const PLACE_ID = "ChIJ_6mbzuoXuAARGFVW126BLbU";
export const perfilUrl =
  "https://www.google.com/maps/search/?api=1&query=Lyvia%20Pinheiro%20Tricologia&query_place_id=" +
  PLACE_ID;

export type Avaliacao = {
  autor: string;
  foto?: string;
  nota: number;
  texto: string;
  quando: string;
};

export type PerfilGoogle = {
  nota: number;
  total: number;
  avaliacoes: Avaliacao[];
};

type RespostaGoogle = {
  rating?: number;
  userRatingCount?: number;
  reviews?: {
    authorAttribution: { displayName: string; photoUri?: string };
    rating: number;
    text?: { text: string };
    originalText?: { text: string };
    relativePublishTimeDescription: string;
  }[];
};

export async function buscarAvaliacoes(): Promise<PerfilGoogle | null> {
  const chave = process.env.GOOGLE_PLACES_API_KEY;
  if (!chave) return null;

  try {
    const resposta = await fetch(
      `https://places.googleapis.com/v1/places/${PLACE_ID}?languageCode=pt-BR`,
      {
        headers: {
          "X-Goog-Api-Key": chave,
          "X-Goog-FieldMask": "reviews,rating,userRatingCount",
        },
      },
    );

    if (!resposta.ok) return null;
    const dados = (await resposta.json()) as RespostaGoogle;

    const avaliacoes = (dados.reviews ?? [])
      .map((r) => ({
        autor: r.authorAttribution.displayName,
        foto: r.authorAttribution.photoUri,
        nota: r.rating,
        texto: (r.text?.text ?? r.originalText?.text ?? "").trim(),
        quando: r.relativePublishTimeDescription,
      }))
      .filter((r) => r.texto.length > 0 && r.nota >= 4)
      .slice(0, 3);

    if (avaliacoes.length === 0) return null;

    return {
      nota: dados.rating ?? 5,
      total: dados.userRatingCount ?? 0,
      avaliacoes,
    };
  } catch {
    return null;
  }
}
