import React from 'react';
import ReactDOM from 'react-dom';

const JSXelement = <h1 className='greeting'>Привет, мир!</h1>;

const element = React.createElement(
  'h1',
  { className: 'greeting' },
  'Привет, мир!'
);

ReactDOM.render(element, document.getElementById('root'));
