import { whatsappDisplay, whatsappUrl } from "@/lib/site";
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
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              WhatsApp {whatsappDisplay}
            </a>
          </div>

          <div className="footer-small">Tricologia • Hair Spa • Estética Avançada</div>
          <div className="footer-small">© {new Date().getFullYear()} Clínica Lyvia Pinheiro</div>
        </div>
      </div>
    </footer>
  );
}
