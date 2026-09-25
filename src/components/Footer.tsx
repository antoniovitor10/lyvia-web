import { whatsappDisplay, whatsappUrl } from "@/lib/site";
import Link from "next/link";
import { LogoContent } from "./Logo";

export function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-inner">
          <div className="logo">
            <LogoContent />
          </div>
          <div className="footer-small">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" data-origem="rodape">
              WhatsApp {whatsappDisplay}
            </a>
          </div>

          <div className="footer-small">
            R. Inácio Higino, 673, Sala 410, Praia da Costa, Vila Velha, ES
          </div>

          <div className="footer-small">
            <Link href="/privacidade">Política de Privacidade</Link>
          </div>
          <div className="footer-small">© {new Date().getFullYear()} Clínica Lyvia Pinheiro</div>
        </div>
      </div>
    </footer>
  );
}
