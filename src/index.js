import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logger from './helpers/logger';

const log = logger('dev');

class MultiSelect extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: [
        {
          value: 'banana',
          text: 'Банан',
        },
        {
          value: 'pear',
          text: 'Груша',
        },
        {
          value: 'orange',
          text: 'Апельсин',
        },
        {
          value: 'apple',
          text: 'Яблоко',
        },
      ],
      selectedValues: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const selectedOptions = [...e.target.selectedOptions];
    const selectedValues = selectedOptions.map((option) => option.value);
    log(selectedValues);
    this.setState({
      selectedValues,
    });
  }

  render() {
    const { options, selectedValues } = this.state;

    return (
      <fieldset>
        <legend>Легенда о multiselect</legend>

        <select
          multiple={true}
          value={selectedValues}
          onChange={this.handleChange}
          name='fruites'
          id='fruites'
        >
          {options.map(({ value, text }) => (
            <option key={value} value={value}>
              {text}
            </option>
          ))}
        </select>

        <p>{selectedValues.join(' | ')}</p>
      </fieldset>
    );
  }
}

function App() {
  log('App');
  return (
    <React.Fragment>
      <MultiSelect />
    </React.Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
