import React from "react";
export default function NewsCardImages({ images }) {
  
  return (
    <div className="news-card__images">
      {images.map((e,i) => {
        return <img key={i} className="news-card__image" src={`http://127.0.0.1:8000/api${e.image}`} alt="" />;
      })}
    </div>
  );
}
