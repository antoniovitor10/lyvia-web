import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Tricologia } from "@/components/sections/Tricologia";
import { Sobre } from "@/components/sections/Sobre";
import { ComoFunciona } from "@/components/sections/ComoFunciona";
import { Resultados } from "@/components/sections/Resultados";
import { HairSpa } from "@/components/sections/HairSpa";
import { Estetica } from "@/components/sections/Estetica";
import { Clinica } from "@/components/sections/Clinica";
import { Avaliacoes } from "@/components/sections/Avaliacoes";
import { Localizacao } from "@/components/sections/Localizacao";
import { CtaFinal } from "@/components/sections/CtaFinal";

export default function Home() {
  return (
    <>
      <Header />
      <main id="inicio">
        <Hero />
        <Tricologia />
        <Sobre />
        <ComoFunciona />
        <Resultados />
        <HairSpa />
        <Estetica />
        <Clinica />
        <Avaliacoes />
        <Localizacao />
        <CtaFinal />
      </main>
      <Footer />
    </>
  );
}
