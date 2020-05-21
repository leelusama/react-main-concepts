import React from 'react';
import translate from './translate';

function Header(props) {
  const { language } = props;
  return (
    <React.Fragment>
      <h1>{translate['helloworld'][language]}</h1>
      <h2>{translate['header'][language]}</h2>
    </React.Fragment>
  );
}

export default Header;
