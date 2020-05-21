import React from 'react';
import NewsItem from './NewsItem';
import translate from './translate';

function NewsList(props) {
  const { language } = props;
  return (
    <React.Fragment>
      <section>
        <h2>{translate['news'][language]}</h2>
        <ul>
          {props.newsList.map((news) => (
            <NewsItem language={language} key={news.id} {...news} />
          ))}
        </ul>
      </section>
    </React.Fragment>
  );
}

export default NewsList;
