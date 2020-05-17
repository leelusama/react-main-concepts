import React from 'react';
import ReactDOM from 'react-dom';

function formatName(user) {
  const { firstName, lastName } = user;
  return `${firstName} ${lastName}`;
}

const user = {
  firstName: 'Марья',
  lastName: 'Моревна',
};

const element = <h1>Здравствуй, {formatName(user)}!</h1>;

ReactDOM.render(element, document.getElementById('root'));
