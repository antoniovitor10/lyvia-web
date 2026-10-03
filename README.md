This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Tracking de Lyvia

O build usa por padrão os dados enviados por Chico em 30/09/2026: Meta Pixel
`553740172574489`, Google Tag Manager `GTM-K84G82RH` e o link Tintim registrado
em `.env.example`. Todos os botões de contato, inclusive rodapé, botão flutuante
e página de privacidade, usam esse destino.

As variáveis `NEXT_PUBLIC_META_PIXEL_ID`, `NEXT_PUBLIC_GTM_ID` e
`NEXT_PUBLIC_TINTIM_URL` podem substituir esses valores no build. A variável antiga
`NEXT_PUBLIC_WHATSAPP_URL` foi substituída por `NEXT_PUBLIC_TINTIM_URL`, para evitar
que um link antigo de WhatsApp contorne o tracking. O workflow de deploy já repassa
as novas variáveis; secrets vazios usam os valores padrão do código.

Os scripts carregam após a hidratação. Um clique em contato registra a origem no
evento `contato_whatsapp` do Google e no evento `Contact` da Meta. O GTM e o Pixel
também têm fallback para navegadores sem JavaScript. Google Analytics direto
permanece opcional em `NEXT_PUBLIC_GA_ID`; se o container GTM já instala GA ou Meta,
conferir suas tags para evitar uma segunda instalação do mesmo tracking.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
