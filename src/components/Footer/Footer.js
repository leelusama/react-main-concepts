import React from 'react';
import translate from './translate';

function Footer(props) {
  const { language } = props;
  return (
    <React.Fragment>
      <h2>{translate['footer'][language]}</h2>
    </React.Fragment>
  );
}

export default Footer;
