import Link from "next/link";

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div>© {year} Daytona Padel, Казань</div>
        <div className="site-footer__links">
          <Link href="/legal/privacy">Политика конфиденциальности</Link>
          <Link href="/legal/offer">Публичная оферта</Link>
          <Link href="/legal/cookies">Cookies</Link>
        </div>
      </div>
    </footer>
  );
};