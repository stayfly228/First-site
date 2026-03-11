"use client";

import { useEffect, useState } from "react";

// Пути к фоновой ленте с фотографиями падела
const IMAGES = [
  "/images/padel-1.jpg",
  "/images/padel-2.jpg",
  "/images/padel-3.jpg",
  "/images/padel-4.jpg",
  "/images/padel-5.jpg"
];

// Повторений набора картинок для длинной ленты
const REPEAT = 8;
// Оценочная длина полосы в px (для бесконечного цикла)
const STRIP_LENGTH = 15000;

export const PadelBackgroundStrip: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const factor = 0.25;
  const rawOffset = scrollY * factor;
  const loopedOffset = rawOffset % STRIP_LENGTH;

  return (
    <div className="padel-strip">
      <div className="padel-strip__inner"
     style={{ transform: `translateX(${-loopedOffset}px)` }}>
  {Array.from({ length: REPEAT }).map((_, repeatIndex) =>
    IMAGES.map((src, index) => (
      <div key={`${repeatIndex}-${index}`} className="padel-strip__item">
        <img src={src} alt="" />
      </div>
    ))
  )}
</div>
    </div>
  );
};