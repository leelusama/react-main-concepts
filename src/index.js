import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function logger(mode) {
  return function () {
    if (mode === 'dev') {
      console.log('Logger:', ...arguments);
    }
  };
}

const log = logger('dev');

class Toggle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isToggleOn: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
    }));
  }

  render() {
    const classes = ['toggleButton'];
    this.state.isToggleOn
      ? classes.push('buttonOn')
      : classes.push('buttonOff');

    const className = classes.join(' ');

    return (
      <button className={className} type='button' onClick={this.handleClick}>
        {this.state.isToggleOn ? 'Вкл.' : 'Выкл.'}
      </button>
    );
  }
}

function App() {
  log('App');
  return (
    <React.Fragment>
      <Toggle />
    </React.Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
