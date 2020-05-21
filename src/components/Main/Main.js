import React from 'react';
import NewsList from '../NewsList';
import translate from './translate';

function Main(props) {
  const { language } = props;
  return (
    <React.Fragment>
      <h2>{translate['main'][language]}</h2>
      <NewsList language={language} newsList={props.newsList} />
    </React.Fragment>
  );
}

export default Main;
