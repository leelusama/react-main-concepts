import React from 'react';
import ReactDOM from 'react-dom';

function Welcome(props) {
  return <h2>Привет, {props.name}!</h2>;
}

function App() {
  return (
    <div>
      <Welcome name='Алиса' />
      <Welcome name='Базилио' />
      <Welcome name='Буратино' />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
