import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Daytona Padel — Падел-клуб в Казани",
  description: "Daytona Padel — современный падел-клуб в Казани: 10 кортов, комфортные раздевалки, кафе и клубная атмосфера. Онлайн-бронирование кортов.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        <Header />
        <main className="app-main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
