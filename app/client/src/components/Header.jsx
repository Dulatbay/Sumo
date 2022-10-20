import React from "react";
import { Link } from "react-router-dom";
import AudioPlayer from "../audioPlayer";
import { NextIcon, NotificationIcon, PauseIcon, PreviousIcon } from "../icons";
import PlayIcon from "../icons/PlayIcon";

export default function Header() {
  const audioPlayer = AudioPlayer.getInstance();
  const [isPlaying, setIsPlaying] = React.useState(audioPlayer.isPlaying());
  const [musicTitle, setMusicTitle] = React.useState(
    audioPlayer.getMusicTitle()
  );
  audioPlayer.setHeader = (isPlaying, musicTitle) => {
    setIsPlaying(isPlaying);
    setMusicTitle(musicTitle);
  };
  return (
    <header className="main-header">
      <div className="border-element main-header__wrapper">
        <div className="main-header__container">
          <div className="main-header__logo">
            <Link to="/">SUMO</Link>
          </div>
          <div className="main-header__search">
            <input type="text" placeholder="Search..." />
          </div>
          <div className="image-notification main-header__button activable-button">
            <NotificationIcon />
          </div>
          <div className="main-header__buttons">
            <div className="image-previous main-header__button activable-button">
              <PreviousIcon />
            </div>
            <div
              className="image-pause main-header__button activable-button"
              onClick={() => {
                if (audioPlayer.getMusicId() === -1) return;
                audioPlayer.pauseOrPlay();
              }}
            >
              {!isPlaying ? <PauseIcon /> : <PlayIcon />}
            </div>
            <div className="image-next main-header__button activable-button">
              <NextIcon />
            </div>
          </div>
          <div className="main-header__music-name activable-button">
            {audioPlayer.getMusicTitle()}
          </div>
        </div>
      </div>
    </header>
  );
}
