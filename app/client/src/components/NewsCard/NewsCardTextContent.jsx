import React from "react";

export default function NewsCardTextContent({ content }) {
  return (
    <div className="news-card__text-content">
      <p>{content}</p>
    </div>
  );
}
