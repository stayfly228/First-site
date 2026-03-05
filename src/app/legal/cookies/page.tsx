import { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Использование cookies — Daytona Padel Казань",
};

export default function CookiesPage() {
  return (
    <>
      <PageHeader
        title="Использование файлов cookies"
        subtitle="Как сайт Daytona Padel использует технологию cookies."
      />
      <Section tone="light">
        <div className="legal-text">
          <h2>1. Что такое cookies</h2>
          <p>
            Cookies — это небольшие текстовые файлы, которые сохраняются в браузере
            при посещении сайта. Они помогают запоминать настройки и улучшать работу сервиса.
          </p>
          <h2>2. Какие cookies мы используем</h2>
          <p>— технические cookies, необходимые для работы сайта и формы бронирования;</p>
          <p>— аналитические cookies для понимания взаимодействия пользователей с сайтом.</p>
          <h2>3. Как управлять cookies</h2>
          <p>
            Вы можете отключить cookies в настройках браузера или удалить уже
            сохранённые файлы.
          </p>
        </div>
      </Section>
    </>
  );
}