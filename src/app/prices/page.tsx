import { Metadata } from "next";
import { PageHeader } from "../../components/PageHeader";
import { Section } from "../../components/Section";

export const metadata: Metadata = {
  title: "Цены — Daytona Padel Казань"
};

export default function PricesPage() {
  return (
    <>
      <PageHeader
        title="Цены на аренду кортов"
        subtitle="Примерная сетка тарифов. Актуальные цены и спецпредложения администратор сможет корректировать прямо в таблице или через CRM."
      />
      <Section tone="light">
        <div style={{ overflowX: "auto" }}>
          <table className="prices-table">
            <thead>
              <tr>
                <th>День</th>
                <th>Время</th>
                <th>Цена / час</th>
                <th>Комментарий</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Будни</td>
                <td>07:00 – 16:00</td>
                <td>от 1 800 ₽</td>
                <td>Утренние тренировки, менее загруженное время.</td>
              </tr>
              <tr>
                <td>Будни</td>
                <td>16:00 – 23:00</td>
                <td>от 2 400 ₽</td>
                <td>Прайм‑тайм для игр после работы.</td>
              </tr>
              <tr>
                <td>Выходные</td>
                <td>08:00 – 23:00</td>
                <td>от 2 600 ₽</td>
                <td>Популярные таймы, возможны клубные мероприятия.</td>
              </tr>
              <tr>
                <td>Ночное время</td>
                <td>23:00 – 01:00</td>
                <td>по запросу</td>
                <td>Для команд и мини‑турниров.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="form-hint" style={{ marginTop: 12 }}>
          *Цены и временные интервалы указаны для макета сайта. Вы сможете
          заменить их на реальные значения и добавить отдельные тарифы для
          тренеров, аренды ракеток и абонементов.
        </p>
      </Section>
    </>
  );
}