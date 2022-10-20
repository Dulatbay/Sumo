import React from "react";

export default function SortBar({ clickHandler }) {
  const [activeIndex, setActiveIndex] = React.useState(0);
  return (
    <div className="sort-bar news-page__item border-element">
      <div
        className={`sort-bar__item activable-button ${
          activeIndex === 0 ? "active" : ""
        }`}
        onClick={() => {
          setActiveIndex(0);
        }}
      >
        Рекомендации
      </div>
      <div
        className={`sort-bar__item activable-button ${
          activeIndex === 1 ? "active" : ""
        }`}
        onClick={() => {
          setActiveIndex(1);
        }}
      >
        Подписки
      </div>
    </div>
  );
}
