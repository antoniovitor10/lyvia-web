import { navLinks } from "@/content/home";
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

          <a href="#contato" className="btn btn-primary">
            Agendar avaliação
          </a>
        </nav>
      </div>
    </header>
  );
}
