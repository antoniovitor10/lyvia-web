import { navLinks } from "@/content/home";
import { BotaoWhatsApp } from "./BotaoWhatsApp";
import { LogoContent } from "./Logo";

export function Header() {
  return (
    <header>
      <div className="container">
        <nav>
          <a href="#inicio" className="logo">
            <LogoContent />
          </a>

          <div className="nav-links">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>

          <BotaoWhatsApp origem="header">Agendar avaliação</BotaoWhatsApp>
        </nav>
      </div>
    </header>
  );
}
