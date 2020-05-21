import React from 'react';
import translate from './translate';

function NewsItem(props) {
  const { title, snippet, date_utc, date, language } = props;
  return (
    <li>
      <h3>
        {translate['news-title'][language]}: {title}
      </h3>
      <p>
        {translate['news-paragraph'][language]}: <br />
        {snippet}
      </p>
      <time dateTime={date_utc}>
        {translate['news-posted'][language]}: {date}
      </time>
    </li>
  );
}

export default NewsItem;
