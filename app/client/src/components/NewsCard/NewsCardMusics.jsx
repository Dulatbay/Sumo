import React from "react";
import MusicCard from "../MusicCard";

export default function NewsCardMusics({ musics }) {
  return (
    <div className="news-card__music">
      {musics.map(({ music }, i) => (
        <MusicCard
          key={i}
          pseudonym={music.author.pseudonym ?? music.author.email}
          title={music.title}
          audio_src={music.file}
          id={music.id}
        />
      ))}
    </div>
  );
}
