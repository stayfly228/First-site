export const ContactInfo: React.FC = () => {
    return (
      <div className="contact-grid">
        <div>
          <div className="contact-card">
            <div className="contact-card__row">
              <span className="contact-card__label">Адрес</span>
              <span className="contact-card__value">
                Казань, пример: ул. Спортивная, 10
              </span>
            </div>
            <div className="contact-card__row">
              <span className="contact-card__label">Телефон</span>
              <a className="contact-card__value" href="tel:+79000000000">
                +7 (900) 000-00-00
              </a>
            </div>
            <div className="contact-card__row">
              <span className="contact-card__label">Telegram / WhatsApp</span>
              <span className="contact-card__value">@daytona_padel</span>
            </div>
            <div className="contact-card__row">
              <span className="contact-card__label">E-mail</span>
              <a className="contact-card__value" href="mailto:info@daytonapadel.ru">
                info@daytonapadel.ru
              </a>
            </div>
            <p className="form-hint">
              Точные контакты и адрес вы сможете заменить на реальные данные
              клуба.
            </p>
          </div>
        </div>
  
        <div>
          <div className="contact-card">
            <div className="contact-card__label">Как к нам добраться</div>
            <p className="contact-card__value">
              Автомобиль: удобный выезд с основных магистралей, собственная
              парковка.
            </p>
            <p className="contact-card__value">
              Общественный транспорт: ближайшая остановка &quot;Падел‑арена&quot;
              — 5 минут пешком.
            </p>
            <p className="form-hint">
              Здесь можно будет встроить карту Яндекс или 2ГИС.
            </p>
          </div>
        </div>
      </div>
    );
  };