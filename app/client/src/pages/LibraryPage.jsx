import React from "react";

export default function LibraryPage() {
  const [activeIndex, setActiveIndex] = React.useState(1);

  return (
    <div className="library-page">
      <div className="library-sort-bar border-element news-page__item">
        <div
          className={`library-sort-bar__item ${
            activeIndex === 0 ? "library-sort-bar__item-active" : ""
          }`}
        >
          <span className="activable-button" onClick={() => setActiveIndex(0)}>
            Добавленные
          </span>
        </div>
        <div
          className={`library-sort-bar__item ${
            activeIndex === 1 ? "library-sort-bar__item-active" : ""
          }`}
        >
          <span className="activable-button" onClick={() => setActiveIndex(1)}>
            Моя музыка
          </span>
        </div>
        <div
          className={`library-sort-bar__item ${
            activeIndex === 2 ? "library-sort-bar__item-active" : ""
          }`}
        >
          <span className="activable-button" onClick={() => setActiveIndex(2)}>
            Загруженные
          </span>
        </div>
      </div>
    </div>
  );
}
