import React from 'react';
import ReactDOM from 'react-dom';

function formatDate(date) {
  const _date = new Date(date);
  return _date.toLocaleDateString('ru-RU');
}

function Avatar(props) {
  return (
    <img
      className='Avatar'
      src={props.user.avatarUrl}
      alt={props.user.name}
      width='100'
      height='100'
    />
  );
}

function UserInfo(props) {
  return (
    <div className='UserInfo'>
      <Avatar user={props.user} />
      <div className='UserInfo-Name'>{props.user.name}</div>
    </div>
  );
}

function Comment(props) {
  return (
    <div className='Comment'>
      <UserInfo user={props.comment.user} />
      <div className='Comment-text'>{props.comment.text}</div>
      <div className='Comment-date'>{formatDate(props.comment.date)}</div>
    </div>
  );
}

function App() {
  return (
    <div>
      <Comment comment={comment} />
    </div>
  );
}

const user = {
  name: 'Ninja',
  avatarUrl: 'img/ninja-avatar.png',
};

const comment = {
  user,
  text: "I'm best of the best Ninja ever!!!",
  date: '2020-05-17T10:24:31.042Z',
};

ReactDOM.render(<App />, document.getElementById('root'));
