import React from 'react';

function Post(props) {
  const { title, body, user } = props;
  return (
    <React.Fragment>
      <h3>{title}</h3>
      <p>{body}</p>
      <p>{`Posted by: ${user.name}`}</p>
    </React.Fragment>
  );
}

export default Post;
