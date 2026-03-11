"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Главная" },
  { href: "/prices", label: "Цены" },
  { href: "/booking", label: "Бронирование" },
  { href: "/contacts", label: "Контакты" }
];

export const Header: React.FC = () => {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link
          href="/"
          className="site-logo"
          aria-label="Daytona Padel — на главную"
        >
          <img
            src="/logo-daytona-padel.png"
            alt="Daytona Padel"
            className="site-logo__img"
          />
          <div>
            <div className="site-logo__text-main">DAYTONA PADEL</div>
            <div className="site-logo__text-sub">Kazan club</div>
          </div>
        </Link>
        <nav className="site-nav" aria-label="Основная навигация">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  "site-nav__link" +
                  (isActive ? " site-nav__link--active" : "")
                }
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="site-header__cta">
          <span className="site-header__phone">+7 (900) 000-00-00</span>
          <Link href="/booking" className="btn btn-primary">
            Забронировать
          </Link>
        </div>
      </div>
    </header>
  );
};
