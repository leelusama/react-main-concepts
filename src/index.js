import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logger from './helpers/logger';
import mockPosts from './mock/posts';
import FormatedDate from './components/FormatedDate/FormatedDate.component';

const log = logger('dev');

function App() {
  return <React.Fragment></React.Fragment>;
}

ReactDOM.render(<App />, document.getElementById('root'));
