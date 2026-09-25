import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { whatsappDisplay, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de Privacidade | Clínica Lyvia Pinheiro",
  description:
    "Como a Clínica Lyvia Pinheiro trata os dados de quem visita o site, conforme a Lei Geral de Proteção de Dados.",
  robots: { index: false },
};

export default function Privacidade() {
  return (
    <>
      <Header />

      <main className="pagina-texto">
        <div className="container">
          <h1>Política de Privacidade</h1>

          <h2>Quais dados este site coleta</h2>
          <p>
            Este site não possui formulários e não pede cadastro. O contato acontece pelo
            WhatsApp {whatsappDisplay}. Ao clicar em um dos botões de agendamento, você é levado
            para uma conversa no WhatsApp, e as informações que enviar por lá passam a ser
            tratadas dentro daquele aplicativo.
          </p>

          <h2>Medição de audiência</h2>
          <p>
            O site pode usar ferramentas de medição do Google e da Meta para entender quantas
            pessoas visitam as páginas e quantas clicam nos botões de agendamento. Essas
            ferramentas usam cookies e registram dados de navegação de forma agregada, como
            páginas vistas, origem do acesso e tipo de dispositivo. Elas não recebem o conteúdo
            das conversas nem dados de saúde.
          </p>

          <h2>Imagens de pacientes</h2>
          <p>
            As fotos de evolução publicadas na página de resultados são usadas mediante
            autorização da paciente. Para pedir a retirada de uma imagem, fale com a clínica pelo
            WhatsApp.
          </p>

          <h2>Seus direitos</h2>
          <p>
            A Lei Geral de Proteção de Dados garante a você o direito de confirmar o tratamento,
            acessar, corrigir e pedir a exclusão dos seus dados, além de revogar consentimentos.
            Para exercer qualquer um deles, entre em contato pelo{" "}
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" data-origem="privacidade">
              WhatsApp {whatsappDisplay}
            </a>
            .
          </p>

          <h2>Cookies do navegador</h2>
          <p>
            Você pode bloquear ou apagar cookies nas configurações do seu navegador. O site
            continua funcionando normalmente sem eles.
          </p>

          <p className="voltar">
            <Link href="/">Voltar para a página inicial</Link>
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
