import Link from "next/link";

export const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="container hero__grid">
        <div>
          <div className="hero__eyebrow">
            <span>Premium padel club</span>
          </div>
          <h1 className="hero__title">
            Падел-клуб <span className="hero__accent">Daytona Padel</span> в Казани
          </h1>
          <p className="hero__subtitle">
            10 современных кортов, клубная атмосфера и удобное онлайн‑бронирование.
            Соберите партнёров и выходите на корт уже сегодня.
          </p>
          <div className="hero__meta">
            <div className="hero__meta-item">10 кортов</div>
            <div className="hero__meta-item">Ежедневно с 07:00 до 01:00</div>
            <div className="hero__meta-item">Казань, примерный адрес клуба</div>
          </div>
          <div className="hero__ctas">
            <Link href="/booking" className="btn btn-primary">
              Забронировать корт
            </Link>
            <Link href="/prices" className="btn btn-outline">
              Смотреть цены
            </Link>
          </div>
          <p className="hero__note">
            Бронирование пока в тестовом режиме — оплата онлайн будет подключена позже.
          </p>
        </div>

        <div className="hero__card" aria-label="Информация по кортам и ценам">
          <div className="hero__card-tag">10 кортов · indoor / outdoor</div>
          <div className="hero__card-title">Daytona Padel · Казань</div>
          <div className="hero__card-subtitle">
            Парковка, душевые, кафе, прокат ракеток и мячей. Всё, чтобы играть
            чаще и получать удовольствие.
          </div>
          <div className="hero__card-row">
            <div>
              <div className="hero__card-price-main">от 1 800 ₽ / час</div>
              <div className="hero__card-price-note">будни · утренние слоты</div>
            </div>
            <Link href="/booking" className="btn btn-outline">
              Быстрый слот
            </Link>
          </div>
          <div className="hero__badge">
            <span>современные корты · pro‑освещение</span>
          </div>
        </div>
      </div>
    </section>
  );
};