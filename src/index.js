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

class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: ['banana', 'orange', 'apple'],
    };
  }

  handleClickListItem(item, e) {
    console.log(e.target.innerText, item);
  }

  render() {
    const list = this.state.list.map((item) => (
      <li onClick={this.handleClickListItem.bind(this, item)} key={item}>
        {item}
      </li>
    ));
    return (
      <div>
        <ul className='list'>{list}</ul>
      </div>
    );
  }
}

function App() {
  log('App');
  return (
    <React.Fragment>
      <Toggle />
      <List />
    </React.Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
