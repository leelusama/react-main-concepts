import React from 'react';
import ReactDOM from 'react-dom';

function formatDate(date) {
  const _date = new Date(date);
  return _date.toLocaleDateString('ru-RU');
}

function Comment(props) {
  return (
    <div className='Comment'>
      <div className='UserInfo'>
        <img
          className='Avatar'
          src='img/ninja-avatar.png'
          alt='Ninja'
          width='100'
          height='100'
        />
        <div className='UserInfo-Name'>Ninja</div>
      </div>
      <div className='Comment-text'>I'm best of the best Ninja ever!!!</div>
      <div className='Comment-date'>{formatDate(new Date())}</div>
    </div>
  );
}

function App() {
  return (
    <div>
      <Comment />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
