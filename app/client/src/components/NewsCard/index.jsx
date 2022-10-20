import React from "react";
import NewsCardBottomTools from "./NewsCardBottomTools";
import NewsCardImages from "./NewsCardImages";
import NewsCardMusics from "./NewsCardMusics";
import NewsCardTextContent from "./NewsCardTextContent";
import NewsCardTopTools from "./NewsCardTopTools";

export default function NewsCard({ post }) {
  return (
    <div className="news-card news-page__item border-element">
      <NewsCardTopTools
        email={post.author.email}
        create_date={post.create_date}
        change_date={post.change_date}
        image={post.author.image}
      />
      {post.content ? <NewsCardTextContent content={post.content} /> : ""}
      {post.images.length ? <NewsCardImages images={post.images} /> : ""}
      {post.musics.length ? <NewsCardMusics musics={post.musics} /> : ""}
      <NewsCardBottomTools />
    </div>
  );
}
