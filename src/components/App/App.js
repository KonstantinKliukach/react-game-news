import React, { useState, useEffect } from 'react';
import uniqid from 'uniqid';
import './App.scss';

import news from './__news';
import filters from './__filters';

import NewsItem from '../NewsItem';
import Filter from '../Filter';

const App = () => {
  const [filter, changeFilter] = useState('Все');
  const [newsToShow, setNewsToShow] = useState(news);
  useEffect(() => {
    if (filter === 'Все') {
      setNewsToShow(news);
      return;
    }
    const newsFiltered = news.filter(newsItem => newsItem.tag === filter);
    setNewsToShow(newsFiltered);
  }, [filter]);
  const onChange = (newFilter) => {
    changeFilter(newFilter);
  };
  return (
    <div className="app">
      <Filter filters={filters} onChange={onChange} selected={filter}/>
      {newsToShow.map(newsItem => (
        <NewsItem key={uniqid.time()} news={newsItem} />
      ))}
    </div>
  );
};

export default App;
