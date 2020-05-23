import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import Hero from './Hero';

function App() {
  return (
    <React.Fragment>
      <ErrorBoundary>
        <Hero heroName='Batman' />
        <Hero heroName='Superman' />
        <Hero heroName='Joker' />
      </ErrorBoundary>
    </React.Fragment>
  );
}

export default App;
