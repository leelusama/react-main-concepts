import React from 'react';
import Post from './Post';

function PostList(props) {
  const { postList } = props;
  return (
    <section>
      <h2>Posts:</h2>
      <ul>
        {postList.map((post) => {
          const { id, ...postProps } = post;
          return (
            <li key={id}>
              <Post {...postProps} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default PostList;
