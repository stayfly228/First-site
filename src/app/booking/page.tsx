import { Metadata } from "next";
import { PageHeader } from "../../components/PageHeader";
import { Section } from "../../components/Section";
import { BookingForm } from "../../components/BookingForm";

export const metadata: Metadata = {
  title: "Бронирование корта — Daytona Padel Казань"
};

export default function BookingPage() {
  return (
    <>
      <PageHeader
        title="Бронирование корта"
        subtitle="Выберите удобную дату, время и корт. Сейчас это демо‑форма без реальной оплаты — позже здесь появится полноценный сценарий бронирования."
      />
      <Section tone="light">
        <BookingForm />
      </Section>
    </>
  );
}