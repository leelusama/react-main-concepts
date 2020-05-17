import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logger from './helpers/logger';

const log = logger('dev');

function Form() {
  return (
    <form>
      <label>
        Имя:
        <input type='text' name='name' />
      </label>
      <input type='submit' value='Отправить' />
    </form>
  );
}

function App() {
  log('App');
  return (
    <React.Fragment>
      <Form />
    </React.Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
