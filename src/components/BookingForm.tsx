"use client";

import { FormEvent, useMemo, useState } from "react";

type CountryOption = {
  id: "ru" | "kz" | "by";
  label: string;
  dialCode: string;
};

const COUNTRIES: CountryOption[] = [
  { id: "ru", label: "Россия (+7)", dialCode: "+7" },
  { id: "kz", label: "Казахстан (+7)", dialCode: "+7" },
  { id: "by", label: "Беларусь (+375)", dialCode: "+375" }
];

type BookingFormState = {
  date: string;
  time: string;
  court: string;
  duration: string;
  name: string;
  comment: string;
  countryId: CountryOption["id"];
  phoneLocal: string; // только цифры после кода
};

type ValidationErrors = Partial<Record<keyof BookingFormState, string>>;

export const BookingForm: React.FC = () => {
  const [form, setForm] = useState<BookingFormState>({
    date: "",
    time: "",
    court: "1",
    duration: "60",
    name: "",
    countryId: "ru",
    phoneLocal: "",
    comment: ""
  });

  const [errors, setErrors] = useState<ValidationErrors>({});
  const [showSummary, setShowSummary] = useState(false);

  const currentCountry = useMemo(
    () => COUNTRIES.find((c) => c.id === form.countryId) ?? COUNTRIES[0],
    [form.countryId]
  );

  const fullPhone = useMemo(
    () => `${currentCountry.dialCode}${form.phoneLocal.replace(/\D/g, "")}`,
    [currentCountry.dialCode, form.phoneLocal]
  );

  const isPhoneValid = useMemo(() => {
    const digits = fullPhone.replace(/\D/g, "");
    return digits.length >= 11;
  }, [fullPhone]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
  
    if (name === "phoneLocal") {
      // оставляем только цифры, можно ещё ограничить длину
      const digits = value.replace(/\D/g, "").slice(0, 10); // например, максимум 10 цифр
      setForm((prev) => ({ ...prev, phoneLocal: digits }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const validate = (): boolean => {
    const nextErrors: ValidationErrors = {};

    if (!form.date) nextErrors.date = "Укажите дату.";
    if (!form.time) nextErrors.time = "Укажите время.";
    if (!form.name.trim()) nextErrors.name = "Введите имя.";

    if (!form.phoneLocal.trim()) {
      nextErrors.phoneLocal = "Введите номер телефона.";
    } else if (!isPhoneValid) {
      nextErrors.phoneLocal = "Проверьте длину номера.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setShowSummary(true);
  };

  const handleCloseSummary = () => {
    setShowSummary(false);
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit} noValidate>
        <div className="form-row">
          <div className="form-field">
            <label className="form-label" htmlFor="date">
              Дата *
            </label>
            <input
              id="date"
              name="date"
              type="date"
              className="form-control"
              value={form.date}
              onChange={handleChange}
            />
            {errors.date && (
              <p className="form-hint" style={{ color: "#c0392b" }}>
                {errors.date}
              </p>
            )}
          </div>

          <div className="form-field">
            <label className="form-label" htmlFor="time">
              Время *
            </label>
            <input
              id="time"
              name="time"
              type="time"
              className="form-control"
              value={form.time}
              onChange={handleChange}
            />
            {errors.time && (
              <p className="form-hint" style={{ color: "#c0392b" }}>
                {errors.time}
              </p>
            )}
          </div>

          <div className="form-field">
            <label className="form-label" htmlFor="duration">
              Длительность, минут
            </label>
            <select
              id="duration"
              name="duration"
              className="form-control"
              value={form.duration}
              onChange={handleChange}
            >
              <option value="60">60</option>
              <option value="90">90</option>
              <option value="120">120</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-field">
            <label className="form-label" htmlFor="court">
              Корт
            </label>
            <select
              id="court"
              name="court"
              className="form-control"
              value={form.court}
              onChange={handleChange}
            >
              {Array.from({ length: 10 }, (_, i) => (
                <option key={i + 1} value={String(i + 1)}>
                  Корт {i + 1}
                </option>
              ))}
            </select>
            <p className="form-hint">
              Корт 1–6 — indoor, 7–10 — outdoor (в тёплый сезон).
            </p>
          </div>

          <div className="form-field">
            <label className="form-label" htmlFor="name">
              Имя *
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="form-control"
              placeholder="Как к вам обращаться"
              value={form.name}
              onChange={handleChange}
            />
            {errors.name && (
              <p className="form-hint" style={{ color: "#c0392b" }}>
                {errors.name}
              </p>
            )}
          </div>

          <div className="form-field">
            <label className="form-label" htmlFor="phoneLocal">
              Телефон для связи *
            </label>

            <div className="phone-field">
              <button
                type="button"
                className="phone-field__country"
                aria-label="Выбор страны"
              >
                <select
                  name="countryId"
                  value={form.countryId}
                  onChange={handleChange as any}
                  className="phone-field__select"
                >
                  {COUNTRIES.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.label}
                    </option>
                  ))}
                </select>
              </button>

              <div className="phone-field__dial">
                {currentCountry.dialCode}
              </div>

              <input
  id="phoneLocal"
  name="phoneLocal"
  type="tel"
  className="form-control phone-field__input"
  placeholder="9ХХ ХХХ ХХ ХХ"
  value={form.phoneLocal}
  onChange={handleChange}
/>
            </div>

            {errors.phoneLocal ? (
              <p className="form-hint" style={{ color: "#c0392b" }}>
                {errors.phoneLocal}
              </p>
            ) : (
              <p className="form-hint">
                Номер используется как идентификатор при регистрации и
                подтверждении брони.
              </p>
            )}
          </div>
        </div>

        <div className="form-field">
          <label className="form-label" htmlFor="comment">
            Комментарий к брони
          </label>
          <textarea
            id="comment"
            name="comment"
            className="form-control"
            rows={3}
            placeholder="Уровень игры, пожелания по оппонентам, тренеру и т.п."
            value={form.comment}
            onChange={handleChange}
          />
        </div>

        <div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={
              !form.date ||
              !form.time ||
              !form.name ||
              !form.phoneLocal ||
              !isPhoneValid
            }
          >
            Перейти к оплате
          </button>
          <p className="form-hint">
            Нажимая кнопку, вы проходите быструю регистрацию по номеру
            телефона. Оплата онлайн будет подключена позже.
          </p>
        </div>
      </form>

      {showSummary && (
        <BookingSummaryModal
          form={form}
          fullPhone={fullPhone}
          onClose={handleCloseSummary}
        />
      )}
    </>
  );
};

type BookingSummaryModalProps = {
  form: BookingFormState;
  fullPhone: string;
  onClose: () => void;
};

const BookingSummaryModal: React.FC<BookingSummaryModalProps> = ({
  form,
  fullPhone,
  onClose
}) => {
  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true">
      <div className="modal">
        <h2 className="modal__title">Проверка бронирования</h2>
        <p className="modal__row">
          <span>Дата:</span> <strong>{form.date}</strong>
        </p>
        <p className="modal__row">
          <span>Время:</span> <strong>{form.time}</strong>
        </p>
        <p className="modal__row">
          <span>Корт:</span> <strong>{form.court}</strong>
        </p>
        <p className="modal__row">
          <span>Длительность:</span> <strong>{form.duration} мин</strong>
        </p>
        <p className="modal__row">
          <span>Имя:</span> <strong>{form.name}</strong>
        </p>
        <p className="modal__row">
          <span>Телефон:</span> <strong>{fullPhone}</strong>
        </p>
        {form.comment && (
          <p className="modal__row">
            <span>Комментарий:</span> <strong>{form.comment}</strong>
          </p>
        )}

        <p className="form-hint" style={{ marginTop: 12 }}>
          На этом этапе оплата ещё не производится. Администратор свяжется с
          вами по указанному номеру для подтверждения и оплаты.
        </p>

        <div style={{ marginTop: 16, display: "flex", gap: 8 }}>
          <button type="button" className="btn btn-primary">
            Подтвердить (демо)
          </button>
          <button type="button" className="btn btn-outline" onClick={onClose}>
            Изменить данные
          </button>
        </div>
      </div>
    </div>
  );
};