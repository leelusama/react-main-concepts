import React from 'react';

function Hero(props) {
  const { heroName } = props;
  if (heroName === 'Joker') {
    throw new Error(`'${heroName}' Not a hero`);
  }
  return (
    <React.Fragment>
      <h2>{heroName}</h2>
    </React.Fragment>
  );
}

export default Hero;
