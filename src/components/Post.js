import React from 'react';

class Post extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
    };
  }

  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users/${this.props.userId}`)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        console.log(result, 'result');
        this.setState({ user: result });
      })
      .catch((error) => {});
  }

  render() {
    const { title, body } = this.props;

    let element;
    if (this.state.user) {
      const { name } = this.state.user;
      element = (
        <React.Fragment>
          <h3>{title}</h3>
          <p>{body}</p>
          <p>{`Posted by: ${name}`}</p>
        </React.Fragment>
      );
    } else {
      element = <span>Loading...</span>;
    }
    return element;
  }
}

export default Post;
