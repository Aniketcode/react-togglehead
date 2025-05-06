import React, { useEffect, useRef } from "react";
import style from "./exams.module.css";

const cards = Array(50).fill({
  title: "Lorem ipsum",
  text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
});

const ExamCards = () => {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    const scrollAmount = 200;
    sliderRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      sliderRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={style.sliderWrapper}>
      <div className={style.slider} ref={sliderRef}>
        {cards?.map((card, idx) => (
          <div className={style.card} key={idx}>
            <h3>{card?.title}</h3>
            <p>{card?.text}</p>
            <div className={style.link}>
              Know More <span className={style.circleArrow}>→</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExamCards;
