import React from 'react';
import HookExample from './HookExample';
import Status from './Status';
import Counter from './Counter';

function App() {
  return (
    <React.Fragment>
      <h1>React</h1>
      <HookExample />
      <Status />
      <Counter initialCount={50} />
    </React.Fragment>
  );
}

export default App;
