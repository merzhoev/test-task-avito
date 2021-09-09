import React from 'react';

import authorIcon from '../../assets/img/user.svg';
import clockIcon from '../../assets/img/clock.svg';

function NewsItem({ index, score, title, by, time }) {
  return (
    <div className="content__item">
      <div className="item-content__left d-flex align-center">
        <div className="item-content__counter">{index}</div>
        <div className="item-content__points">
          <i className="points-icon"></i>
          {score}
        </div>
        <div className="item-content__title">
          {title}
        </div>
      </div>
      <div className="item-content__right d-flex align-center justify-between">
        <div className="item-content__author">
          <img src={authorIcon} alt="Author icon" />
          {by}
        </div>
        <div className="item-content__date">
          <img src={clockIcon} alt="Clock icon" />
          {time}
        </div>
      </div>
    </div>
  )
}

export default NewsItem;
