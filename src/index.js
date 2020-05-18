import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logger from './helpers/logger';
import mockProducts from './mock/products';
import productsJson from './mock/products.json';
import FilterableProductTable from './components/FilterableProductTable/FilterableProductTable.component';
const log = logger('dev');

class App extends React.Component {
  constructor(props) {
    log('constructor App');
    super(props);

    this.state = {
      selectedProductList: 'small',
      chiceGroupName: 'productsChoice',
      choices: [
        {
          id: 1,
          value: 'small',
          label: 'Небольшой',
        },
        {
          id: 2,
          value: 'big',
          label: 'Большой',
        },
      ],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const value = e.target[this.state.chiceGroupName].value;
    this.setState({
      selectedProductList: value,
    });
  }

  render() {
    log('App render');

    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>Выбор списка продуктов</legend>

            {this.state.choices.map((choice) => (
              <label key={choice.value}>
                {choice.label}

                <input
                  type='radio'
                  name={this.state.chiceGroupName}
                  value={choice.value}
                  defaultChecked={
                    choice.value === this.state.selectedProductList
                  }
                />
              </label>
            ))}
          </fieldset>

          <button type='submit'>Выбрать</button>
        </form>

        <FilterableProductTable
          products={
            this.state.selectedProductList === 'small'
              ? mockProducts
              : productsJson.products
          }
        />
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
