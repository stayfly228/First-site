
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { FAQ } from "@/components/FAQ";
import { PadelBackgroundStrip } from "@/components/PadelBackgroundStrip";

export default function HomePage() {
  return (
    <>
      <PadelBackgroundStrip />
      <Hero />

      <Section
        id="about"
        tone="light"
        title="О клубе Daytona Padel"
        subtitle="Мы хотим, чтобы падел стал самым доступным и любимым спортом в Казани — для любителей, команд и корпоративных игроков."
      >
        <div className="grid-3">
          <article className="card">
            <h3 className="card__title">Современная инфраструктура</h3>
            <p className="card__text">
              10 игровых кортов с комфортной высотой потолков, профессиональным
              освещением и безопасным покрытием.
            </p>
          </article>
          <article className="card">
            <h3 className="card__title">Клубная атмосфера</h3>
            <p className="card__text">
              Просторная лаундж‑зона, кафе и магазин экипировки. Форматы игры
              для любого уровня и компании.
            </p>
          </article>
          <article className="card">
            <h3 className="card__title">Онлайн‑бронирование</h3>
            <p className="card__text">
              Выбирайте удобный слот прямо на сайте. В дальнейшем подключим
              оплату онлайн и личный кабинет игрока.
            </p>
          </article>
        </div>
      </Section>

      <Section
        id="courts"
        tone="muted"
        title="10 продуманных кортов"
        subtitle="Indoor и outdoor‑корты, комфортная высота и идеальное освещение — чтобы играть круглый год."
      >
        <div className="grid-3">
          <article className="card">
            <h3 className="card__title">6 indoor‑кортов</h3>
            <p className="card__text">
              Игровой сезон круглый год. Стабильная температура, отсутствие
              ветра и осадков — играйте в любую погоду.
            </p>
          </article>
          <article className="card">
            <h3 className="card__title">4 outdoor‑корта</h3>
            <p className="card__text">
              Летние вечера под открытым небом. Идеально для командных матчей и
              любительских турниров.
            </p>
          </article>
          <article className="card">
            <h3 className="card__title">Инфраструктура вокруг</h3>
            <p className="card__text">
              Раздевалки, душевые, парковка, зоны отдыха и кафе. Всё, что нужно
              для комфортной игры и восстановления.
            </p>
          </article>
        </div>
      </Section>

      <Section
        id="prices-preview"
        tone="light"
        title="Цены от 1 800 ₽ / час"
        subtitle="Гибкая ценовая сетка: будни / выходные, утренние и прайм‑тайм слоты. Специальные условия для команд и корпоративных клиентов."
      >
        <div className="grid-3">
          <article className="card">
            <h3 className="card__title">Будни, утро</h3>
            <p className="card__text">
              от 1 800 ₽ / час за корт. Отличный вариант для регулярных
              тренировок и тренировок с тренером.
            </p>
          </article>
          <article className="card">
            <h3 className="card__title">Будни, вечер</h3>
            <p className="card__text">
              от 2 400 ₽ / час. Прайм‑тайм для игр после работы и любительских
              матчей.
            </p>
          </article>
          <article className="card">
            <h3 className="card__title">Выходные и турниры</h3>
            <p className="card__text">
              от 2 600 ₽ / час. Пакеты аренды для турниров и клубных мероприятий.
            </p>
          </article>
        </div>
      </Section>

      <Section
        id="faq"
        tone="muted"
        title="Частые вопросы"
        subtitle="Если вы только знакомитесь с паделом или с нашим клубом — начните отсюда."
      >
        <FAQ />
      </Section>

      <Section
        id="contacts-preview"
        tone="light"
        title="Контакты"
        subtitle="Остались вопросы или хотите обсудить корпоративный формат? Напишите нам — подберём решение."
      >
        <p className="card__text">
          +7 (900) 000-00-00 · info@daytonapadel.ru · Казань, примерный адрес
          клуба. Подробные контакты и карту вы найдёте на странице{" "}
          <a href="/contacts">«Контакты»</a>.
        </p>
      </Section>
    </>
  );
}
