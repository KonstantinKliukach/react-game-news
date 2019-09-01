import React from 'react';
import PropTypes from 'prop-types';

import NewsItemTop from './NewsItemTop';
import NewsItemBottom from './NewsItemBottom';

import './NewsItem.scss';

const NewsItem = ({ news }) => {
  const {
    title,
    text,
    image,
    tag,
    created,
    xp,
    comments,
    bookmarked,
    viewed,
  } = news;

  return (
    <article className='newsItem'>
      <img src={image} alt=""/>
      <div className="newsItemBody">
        <NewsItemTop tag={tag} time={created}/>
        <h2>{title}</h2>
        <p>{text}</p>
        <NewsItemBottom xp={xp} comments={comments} bookmarked={bookmarked} viewed={viewed}/>
      </div>
    </article>
  );
};

NewsItem.propTypes = {
  news: PropTypes.object.isRequired,
};

export default NewsItem;
