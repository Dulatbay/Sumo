import React from "react";
import { DefaultAvaIcon, MoreButtonIcon } from "../../icons";

export default function NewsCardTopTools({ email, create_date, change_date, image }) {
  return (
    <div className="news-card__top-tools">
      <div className="top-tools__right-tools activable-button">
        <DefaultAvaIcon />
        <div className="right-tools__info">
          <div className="right-tools__user-name">{email}</div>
          <div className="right-tools__date">{(create_date.split('T')[0]).split("-").reverse().join('.')}  {(create_date.split('T')[1]).split('.')[0]}</div>
        </div>
      </div>
      <div className="top-tools__left-tools activable-button">
        <MoreButtonIcon />
      </div>
    </div>
  );
}
