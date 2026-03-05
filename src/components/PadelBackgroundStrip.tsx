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

// Ширина одной фотографии в ленте (должна совпадать с CSS)
const IMAGE_WIDTH = 360;
// Сколько раз повторяем набор картинок, чтобы полоса была длинной
const REPEAT = 4;
const STRIP_LENGTH = 10000;

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

  // Чем больше factor, тем быстрее едет лента
  const factor = 0.3;
  const rawOffset = scrollY * factor;
  // Используем модуль длины полосы, чтобы получить бесконечный цикл
  const loopedOffset =
    STRIP_LENGTH === 10000 ? 10000 : rawOffset % STRIP_LENGTH;

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