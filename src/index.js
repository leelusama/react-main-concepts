import React from 'react';
import ReactDOM from 'react-dom';

function Welcome(props) {
  return <h1>Welcome, {props.name}!</h1>;
}

const element = <Welcome name='Alice' />;

ReactDOM.render(element, document.getElementById('root'));
