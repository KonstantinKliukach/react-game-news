/* eslint-disable no-restricted-properties */
import React from 'react';
import PropTypes from 'prop-types';
import './NewsItemBottom.scss';

import {
  Xp,
  Comments,
  Bookmark,
  Viewed,
} from 'assets/icons/';

const NewsItemBottom = (props) => {
  const {
    xp,
    comments,
    bookmarked,
    viewed,
  } = props;
  const { pow } = Math;
  const { floor } = Math;
  const { abs } = Math;
  const { log } = Math;
  const abbrev = 'kmb';

  function round(n, precision) {
    const prec = Math.pow(10, precision);
    return Math.round(n * prec) / prec;
  }

  function format(n) {
    let base = floor(log(abs(n)) / log(1000));
    const suffix = abbrev[Math.min(2, base - 1)];
    base = abbrev.indexOf(suffix) + 1;
    return suffix ? round(n / pow(1000, base), 2) + suffix : `${n}`;
  }

  return (
    <div className="newsItemBottom">
      <div className="socialContainer">
        <div className="iconContainer">
          <Xp />
        </div>
        <span className='iconText'>{`${xp} XP`}</span>
        <div className="iconContainer">
          <Comments />
        </div>
        <span className='iconText'>{!comments ? 'Обсудить' : comments}</span>
        <div className="bookmarkContainer">
          <Bookmark />
        </div>
        <span className='iconText'>{!bookmarked ? 'В закладки' : bookmarked}</span>
      </div>
      <div className='viewedContainer'>
        <Viewed />
        <span className='viewedText'>{format(viewed)}</span>
      </div>
    </div>
  );
};

NewsItemBottom.propTypes = {
  xp: PropTypes.number.isRequired,
  comments: PropTypes.number,
  bookmarked: PropTypes.number,
  viewed: PropTypes.number,
};

export default NewsItemBottom;
