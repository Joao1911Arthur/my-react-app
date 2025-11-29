import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./carosel.css";

export default function AdvancedCarousel({ images, interval = 3000 }) {
  const [index, setIndex] = useState(0);

  // --- Autoplay ---
  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, interval);

    return () => clearInterval(timer);
  }, [index]);

  // --- Funções de Navegação ---
  const next = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel-container">

      {/* IMAGEM */}
      <motion.img
        key={index}
        src={images[index]}
        alt="slide"
        className="carousel-image"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -80 }}
        transition={{ duration: 0.5 }}
      />

      {/* SETAS */}
      <button className="arrow left" onClick={prev}>❮</button>
      <button className="arrow right" onClick={next}>❯</button>

      {/* INDICADORES */}
      <div className="dots">
        {images.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>

    </div>
  );
}
