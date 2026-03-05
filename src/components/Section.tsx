import { ReactNode } from "react";

type SectionProps = {
  id?: string;
  title?: string;
  subtitle?: string;
  tone?: "default" | "light" | "muted";
  children: ReactNode;
};

export const Section: React.FC<SectionProps> = ({
  id,
  title,
  subtitle,
  tone = "default",
  children
}) => {
  const toneClass =
    tone === "light"
      ? " section--light"
      : tone === "muted"
      ? " section--muted"
      : "";

  return (
    <section id={id} className={`section${toneClass}`}>
      <div className="container">
        {title && <h2 className="section__title">{title}</h2>}
        {subtitle && <p className="section__subtitle">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
};
