export const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#tricologia", label: "Tricologia" },
  { href: "#hairspa", label: "Hair Spa" },
  { href: "#estetica", label: "Estética" },
  { href: "#clinica", label: "A Clínica" },
  { href: "#contato", label: "Contato" },
];

export const conditions = [
  {
    title: "Queda capilar",
    text: "Avaliação do contexto e planejamento individualizado para cada caso.",
  },
  {
    title: "Afinamento e perda de densidade",
    text: "Cuidados voltados à preservação e melhora da qualidade capilar.",
  },
  {
    title: "Calvície feminina e masculina",
    text: "Acompanhamento de quadros de rarefação e afinamento progressivo.",
  },
  {
    title: "Alterações do couro cabeludo",
    text: "Atenção à saúde do couro cabeludo e às necessidades de cada caso.",
  },
  {
    title: "Saúde capilar",
    text: "Protocolos de cuidado para fios e couro cabeludo.",
  },
];

export const steps = [
  {
    title: "Avaliação",
    text: "Conversamos sobre seu histórico, rotina e mudanças percebidas no cabelo.",
  },
  {
    title: "Cabelo e couro cabeludo",
    text: "Observamos as características do seu caso e o que precisa de atenção.",
  },
  {
    title: "Planejamento individualizado",
    text: "A partir da avaliação, são definidas possibilidades de cuidado e acompanhamento.",
  },
  {
    title: "Acompanhamento",
    text: "A evolução é observada ao longo do processo para orientar os próximos passos.",
  },
];

// TODO: substituir por avaliações reais do Google.
export const reviews = [
  "Inserir aqui uma avaliação real do Google que conte uma pequena história sobre atendimento, confiança e acompanhamento.",
  "Inserir aqui uma avaliação real que fale sobre segurança durante o tratamento e evolução percebida.",
  "Inserir aqui uma avaliação real relacionada à experiência na clínica e ao atendimento.",
];

// Cada caso espera dois arquivos em public/images:
// `<slug>-antes.jpg` e `<slug>-depois.jpg`, no mesmo enquadramento.
export const casos = [
  {
    slug: "caso-01",
    titulo: "Rarefação na região central",
    descricao:
      "Afinamento e perda de densidade no topo, com recuperação progressiva ao longo do acompanhamento.",
    largura: 820,
    altura: 820,
  },
  {
    slug: "caso-02",
    titulo: "Alopecia androgenética",
    descricao:
      "Resultado após 11 meses de tratamento, com ganho de densidade na linha frontal e no topo.",
    largura: 424,
    altura: 340,
  },
  {
    slug: "caso-03",
    titulo: "Alopecia areata",
    descricao:
      "Falha circular no couro cabeludo com repovoamento dos fios ao longo do acompanhamento.",
    largura: 270,
    altura: 400,
  },
];
