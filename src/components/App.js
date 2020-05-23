import React, { Component } from 'react';
import PostList from './PostList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      postList: [],
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts'
      );
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const postListResult = await response.json();

      const userIds = [...new Set(postListResult.map((post) => post.userId))];

      const promises = [];
      userIds.forEach((userId) => {
        const promise = fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        )
          .then((response) => response.json())
          .then((result) => result);

        promises.push(promise);
      });

      const usersResult = await Promise.all(promises);

      const state = {
        postList: postListResult.map((post) => ({
          ...post,
          user: usersResult.find((user) => user.id === post.userId),
        })),
      };
      this.setState(state);
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const { postList } = this.state;

    return (
      <React.Fragment>
        <h1>Fake Posts</h1>
        {this.state.postList.length > 0 && <PostList postList={postList} />}
      </React.Fragment>
    );
  }
}

export default App;
