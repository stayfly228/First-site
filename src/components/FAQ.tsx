type FAQItem = {
    question: string;
    answer: string;
  };
  
  const faq: FAQItem[] = [
    {
      question: "Нужен ли опыт, чтобы начать играть в падел?",
      answer:
        "Нет. Падел — интуитивная и быстрая в освоении игра. Мы поможем подобрать тренера и формат игры под ваш уровень."
    },
    {
      question: "Как забронировать корт?",
      answer:
        "Выберите дату, время и корт на странице «Бронирование» и оставьте контакты. Администратор свяжется с вами для подтверждения."
    },
    {
      question: "Можно ли арендовать ракетки и мячи?",
      answer:
        "Да, в клубе есть прокат ракеток и мячей. Также доступны сейфовые ячейки и полотенца."
    },
    {
      question: "Есть ли абонементы или корпоративные тарифы?",
      answer:
        "Да, мы готовим пакеты для постоянных игроков и компаний. Оставьте заявку через форму или свяжитесь с нами по телефону."
    }
  ];
  
  export const FAQ: React.FC = () => {
    return (
      <div className="faq-list">
        {faq.map((item) => (
          <article key={item.question} className="faq-item">
            <h3 className="faq-item__question">{item.question}</h3>
            <p className="faq-item__answer">{item.answer}</p>
          </article>
        ))}
      </div>
    );
  };