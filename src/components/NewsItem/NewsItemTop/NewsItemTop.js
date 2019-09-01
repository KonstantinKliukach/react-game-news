import React from 'react';
import PropTypes from 'prop-types';

import './NewsItemTop.scss';

import { Csgo, Dota } from 'assets/icons/';

const NewsItemTop = ({ tag, time }) => {
  const calculateTime = (time) => {
    const dateOfCreation = new Date(time);
    const dateNow = new Date();
    const difference = dateNow.getHours() - dateOfCreation.getHours();
    switch (true) {
      case difference === 3:
        return 'Три часа назад';
      case difference === 2:
        return 'два часа назад';
      case difference === 1:
        return 'Час назад';
      case difference < 1:
        return (`${dateOfCreation.getHours()}:${dateOfCreation.getMinutes()}`);
      default:
        return 'Более 3х часов назад';
    }
  };
  return (
    <div className="newsItemTop">
      <div className="tagContainer">
        <div className='icon'>
          {tag === 'CSGO' ? <Csgo /> : <Dota />}
        </div>
        <span className='tag'>{tag}</span>
      </div>
      <div className="timeContainer">
        {calculateTime(time)}
      </div>
    </div>
  );
};

NewsItemTop.propTypes = {
  tag: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
};


export default NewsItemTop;
