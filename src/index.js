import React from 'react';
import ReactDOM from 'react-dom';

function formatDate(date) {
  const _date = new Date(date);
  return _date.toLocaleDateString('ru-RU');
}

function Avatar(props) {
  const { avatarUrl, name } = props.user;
  return (
    <img
      className='Avatar'
      src={avatarUrl}
      alt={name}
      width='100'
      height='100'
    />
  );
}

function UserInfo(props) {
  const { user } = props;
  return (
    <div className='UserInfo'>
      <Avatar user={user} />
      <div className='UserInfo-Name'>{user.name}</div>
    </div>
  );
}

function Comment(props) {
  const { user, text, date } = props.comment;
  return (
    <div className='Comment'>
      <UserInfo user={user} />
      <div className='Comment-text'>{text}</div>
      <div className='Comment-date'>{formatDate(date)}</div>
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
