import React, { useState, useEffect } from "react";
import style from "./hero.module.css";
import { slides } from "../../data/hero-data";

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[index];

  return (
    <section className={style.heroContainer}>
      <div className={style.heroText}>
        <h2>{slide.title}</h2>
        <p>{slide.description}</p>
        <button className={style.heroButton}>
          {slide.button} <span>▶</span>
        </button>
      </div>
      <div className={style.heroImage}>
        <img src={slide.image} alt="Hero" />
      </div>
    </section>
  );
};

export default Hero;
