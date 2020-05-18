import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logger from './helpers/logger';

const log = logger('dev');

function MyHeader({ text, children }) {
  log('MyHeader');
  return <h2>{children || text}</h2>;
}

function MyPhrase({ text, children }) {
  return <p>{children || text}</p>;
}

function MyBody({ children, _h2, _h2Text, printMe }) {
  return (
    <React.Fragment>
      {children}
      <_h2 text={_h2Text} />
      <br />
      {printMe}
    </React.Fragment>
  );
}

function App() {
  log('App');
  const printMe = (
    <MyPhrase>
      Элемент из компонента MyPhrase переданный через пропсы в MyBody
    </MyPhrase>
  );
  return (
    <React.Fragment>
      <MyBody
        _h2={MyHeader}
        _h2Text={"I'm MyHeader component from props"}
        printMe={printMe}
      >
        <h1>My Body</h1>
        <MyHeader text='Я компонент MyHeader ребенок компонента MyBody.' />
        <MyHeader text='Меня не будет видно'>
          Я текст переданный между тегами компонента MyHeader.
        </MyHeader>
      </MyBody>
    </React.Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
