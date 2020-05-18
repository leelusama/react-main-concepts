import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logger from './helpers/logger';
import mockProducts from './mock/products';

const log = logger('dev');

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div>
        <section>
          <h2>Search form</h2>
          <form>
            <p>
              <label>
                Search product:
                <br />
                <input type='text' placeholder='Ball' />
              </label>
            </p>
            <p>
              <label>
                <input type='checkbox' />
                Only show products in stock
              </label>
            </p>
          </form>
        </section>
        <section>
          <h2>Product List</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th colSpan='2'>Category Name</th>
              </tr>
              <tr>
                <td>Product Name</td>
                <td>Product Price</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    );
  }
}

function App() {
  return (
    <React.Fragment>
      <FilterableProductTable products={mockProducts} />
    </React.Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
