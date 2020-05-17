import React from 'react';
import ReactDOM from 'react-dom';

function logger(mode) {
  return function () {
    if (mode === 'dev') {
      console.log('Logger:', ...arguments);
    }
  };
}

const log = logger('dev');

class Clock extends React.Component {
  constructor(props) {
    log('Clock constructor');
    super(props);

    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    log('Clock componentDidMount');
    this.timerID = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    log('Clock componentWillUnmount');
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    log('Clock render');
    return (
      <div>
        <h1>Часы</h1>
        <h2>Текущее время: {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

function App() {
  log('App');
  return (
    <React.Fragment>
      <Clock />
    </React.Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
