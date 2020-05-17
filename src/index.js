import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logger from './helpers/logger';

const log = logger('dev');

class NameForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.value);
    this.setState({ value: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Имя:
          <input
            value={this.state.value}
            onChange={this.handleChange}
            type='text'
            name='name'
          />
        </label>
        <input type='submit' value='Отправить' />
      </form>
    );
  }
}

function App() {
  log('App');
  return (
    <React.Fragment>
      <NameForm />
    </React.Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
