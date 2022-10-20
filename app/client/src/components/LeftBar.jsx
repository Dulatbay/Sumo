import React from "react";
import { AccountIcon, HomeIcon, MusicLibraryIcon } from "../icons";
import SettingsIcon from "../icons/SettingsIcon";
import { Link } from "react-router-dom";
export default function LeftBar() {
  return (
    <div className="left-bar border-element">
      <div className="left-bar__items">
        <div className="left-bar__item activable-button">
          <Link to="/profile">
            <AccountIcon />
          </Link>
        </div>
        <div className="left-bar__item activable-button">
          <Link to="/">
            <HomeIcon />
          </Link>
        </div>
        <div className="left-bar__item activable-button">
          <Link to="/library">
            <MusicLibraryIcon />
          </Link>
        </div>
        <div className="left-bar__item activable-button">
          <Link to="/settings">
            <SettingsIcon />
          </Link>
        </div>
      </div>
    </div>
  );
}
