import React from 'react';
import PropTypes from 'prop-types';

import './NewsItem.scss';

const NewsItem = ({ news }) => {
  const { title, text } = news;
  return (
    <article className='newsItem'>
      <h2>{title}</h2>
      <p>{text}</p>
    </article>
  );
};

NewsItem.propTypes = {
  news: PropTypes.object.isRequired,
};

export default NewsItem;
