import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
    };
  }

  render() {
    return (
      <div>
        <h1>Часы</h1>
        <h2>Текущее время: {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

function App() {
  return (
    <React.Fragment>
      <Clock />
    </React.Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
