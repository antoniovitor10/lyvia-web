import { whatsappUrl } from "@/lib/site";

type Props = {
  origem: string;
  children: React.ReactNode;
  variante?: "primary" | "outline";
  className?: string;
};

export function BotaoWhatsApp({ origem, children, variante = "primary", className = "" }: Props) {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      data-origem={origem}
      className={`btn btn-${variante} ${className}`.trim()}
    >
      {children}
    </a>
  );
}
