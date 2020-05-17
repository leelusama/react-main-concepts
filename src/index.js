import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logger from './helpers/logger';
import mockPosts from './mock/posts';
import FormatedDate from './components/FormatedDate/FormatedDate.component';

const log = logger('dev');

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: mockPosts,
    };
  }

  render() {
    log('App');

    const { posts } = this.state;

    return (
      <React.Fragment>
        <header>
          <h1>Это микроблог.</h1>
        </header>
        <main>
          <section>
            <h2>Посты</h2>
            <ul>
              {posts.map((post) => (
                <li key={post.id}>
                  <h3>{post.title}</h3>
                  <p>{post.text}</p>
                  <p>
                    Posted: <FormatedDate date={post.createdAt} />
                  </p>
                </li>
              ))}
            </ul>
          </section>
        </main>
        <footer></footer>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
