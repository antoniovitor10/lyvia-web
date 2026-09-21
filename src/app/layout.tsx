import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const title = "Clínica Lyvia Pinheiro | Tricologia e Estética Avançada";
const description =
  "Clínica Lyvia Pinheiro em Vila Velha. Tricologia, tratamento para queda capilar, afinamento, saúde do couro cabeludo, Hair Spa e Estética Avançada.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    title,
    description,
    locale: "pt_BR",
    type: "website",
    images: ["/images/hero.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={montserrat.variable}>
      <body>{children}</body>
    </html>
  );
}
