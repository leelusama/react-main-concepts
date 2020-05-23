import React, { Component } from 'react';
import PostList from './PostList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      postList: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        this.setState({ postList: result });
      })
      .catch((error) => {});
  }

  render() {
    const { postList } = this.state;

    return (
      <React.Fragment>
        <h1>Fake Posts</h1>
        <PostList postList={postList} />
      </React.Fragment>
    );
  }
}

export default App;
