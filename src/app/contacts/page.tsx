import { Metadata } from "next";
import { PageHeader } from "../../components/PageHeader";
import { Section } from "../../components/Section";
import { ContactInfo } from "../../components/ContactInfo";

export const metadata: Metadata = {
  title: "Контакты — Daytona Padel Казань"
};

export default function ContactsPage() {
  return (
    <>
      <PageHeader
        title="Контакты клуба"
        subtitle="Свяжитесь с нами любым удобным способом — поможем подобрать формат игры, тренировок или корпоративного мероприятия."
      />
      <Section tone="light">
        <ContactInfo />
      </Section>
    </>
  );
}