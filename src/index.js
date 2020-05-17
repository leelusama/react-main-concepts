import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logger from './helpers/logger';

const log = logger('dev');

class MultiForm extends React.Component {
  constructor(props) {
    super(props);
    this.options = [
      {
        id: 0,
        value: 'React',
        selected: false,
      },
      {
        id: 1,
        value: 'Angular',
        selected: true,
      },
      {
        id: 2,
        value: 'Vue',
        selected: false,
      },
      {
        id: 3,
        value: 'Svelte',
        selected: true,
      },
    ];
    this.state = {
      value: '',
      selectValue: 'coconut',
      textareaValue:
        'Доброго здоровья, тут просто немного текста внутри тега textarea',
      multipleSelectValue: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeSelect = this.handleChangeSelect.bind(this);
    this.handleChangeTextarea = this.handleChangeTextarea.bind(this);
    this.handleChangeMultipleSelect = this.handleChangeMultipleSelect.bind(
      this
    );
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    this.setState({ value: '' });
  }

  handleChangeSelect(e) {
    this.setState({
      selectValue: e.target.value,
    });
  }
  handleChangeTextarea(e) {
    this.setState({
      textareaValue: e.target.value,
    });
  }

  handleChangeMultipleSelect(e) {
    const { options } = e.target;
    const selectedValues = [...options]
      .filter((option) => option.selected === true)
      .map((option) => option.value);
    this.setState({
      multipleSelectValue: selectedValues,
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>
          <label>
            Имя:
            <input
              value={this.state.value}
              onChange={this.handleChange}
              type='text'
              name='name'
            />
          </label>
        </p>
        <p>
          <textarea
            value={this.state.textareaValue}
            onChange={this.handleChangeTextarea}
            rows='5'
            cols='80'
          ></textarea>
        </p>
        <p>
          <select
            value={this.state.selectValue}
            onChange={this.handleChangeSelect}
          >
            <option value='grapefruit'>Грейпфрут</option>
            <option value='lime'>Лайм</option>
            <option value='coconut'>Кокос</option>
            <option value='mango'>Манго</option>
          </select>
          <select
            multiple={true}
            value={this.multipleSelectValue}
            onChange={this.handleChangeMultipleSelect}
          >
            {this.options.map((option) => (
              <option value={option.value} key={option.id}>
                {option.value}
              </option>
            ))}
          </select>
        </p>
        <input type='submit' value='Отправить' />
      </form>
    );
  }
}

function App() {
  log('App');
  return (
    <React.Fragment>
      <MultiForm />
    </React.Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
