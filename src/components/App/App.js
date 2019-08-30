import React, { useState } from 'react';
import uniqid from 'uniqid';
import './App.scss';

import news from './__news';

import NewsItem from '../NewsItem';

const App = () => {
  // const [filter, changeFilter] = useState(0);
  return (
    <div className="app">
      {news.map(newsItem => (
        <NewsItem key={uniqid.time()} news={newsItem} />
      ))}
    </div>
  );
};

export default App;
