import React, { useState } from "react";
import { PauseIcon } from "../icons";
import PlayIcon from "../icons/PlayIcon";
import api from "../api";
import AudioPlayer from "../audioPlayer";
export default function MusicCard({ title, pseudonym, audio_src, id }) {
  const audioPlayer = AudioPlayer.getInstance();
  const [isPlaying, setIsPlaying] = useState(audioPlayer.isPlaying());
  const setMainHeaderMusic = () => {};

  return (
    <div className="music-card">
      <div
        className="music-card_play-pause activable-button"
        onClick={() => {
          if (audioPlayer.music_id !== id) {
            if (audioPlayer.reset) audioPlayer.reset();
            audioPlayer.setMusicId(id);
            audioPlayer.setMusicTitle(`${pseudonym} - ${title}`);
            audioPlayer.setAudioSrc(audio_src);
            audioPlayer.reset = () => {
              setIsPlaying(false);
            };
          }
          audioPlayer.pauseOrPlay();
          setIsPlaying(audioPlayer.isPlaying());
          console.log(audioPlayer.isPlaying());
        }}
      >
        {!isPlaying || audioPlayer.getMusicId() !== id ? (
          <PauseIcon />
        ) : (
          <PlayIcon />
        )}
      </div>
      <div className="music-card__music-name">
        <div className="tools">
          <div className="title">
            <span className="activable-button">{pseudonym}</span> -
            <span className="activable-button">{title}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
