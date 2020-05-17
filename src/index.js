import React from 'react';
import ReactDOM from 'react-dom';

function formatName(user) {
  const { firstName, lastName } = user;
  return `${firstName} ${lastName}`;
}

function getGreeting(user) {
  if (user) {
    return <h2>Здравствуй, {formatName(user)}.</h2>;
  }
  return <h2>Привет, незнакомец!</h2>;
}

const user = {
  firstName: 'Марья',
  lastName: 'Моревна',
};

const element = (
  <div>
    {getGreeting(user)}
    {getGreeting()}
  </div>
);

ReactDOM.render(element, document.getElementById('root'));
