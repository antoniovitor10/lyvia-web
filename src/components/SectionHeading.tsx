type Props = {
  eyebrow: string;
  title: React.ReactNode;
};

export function SectionHeading({ eyebrow, title }: Props) {
  return (
    <>
      <div className="eyebrow">{eyebrow}</div>
      <h2 className="section-title">{title}</h2>
    </>
  );
}
