import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logger from './helpers/logger';
import mockProducts from './mock/products';

const log = logger('dev');

function SearchForm() {
  return (
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
  );
}

function ProductCategoryRow(props) {
  const { name, children } = props;
  return (
    <React.Fragment>
      <tr>
        <th colSpan='2'>{name}</th>
      </tr>
      {children}
    </React.Fragment>
  );
}

function ProductRow(props) {
  const { product } = props;
  const { name, price, stocked } = product;
  const formattedName = stocked ? (
    name
  ) : (
    <span style={{ color: 'red' }}>{name}</span>
  );

  return (
    <tr>
      <td>{formattedName}</td>
      <td>{price}</td>
    </tr>
  );
}

function ProductTable(props) {
  const { products } = props;
  const groupedProducts = {};
  const categoryes = [];

  products.forEach((product) => {
    const { category } = product;

    if (!(category in groupedProducts)) {
      groupedProducts[category] = [];
      categoryes.push(category);
    }

    groupedProducts[category].push(product);
  });

  const rows = [];
  categoryes.forEach((category) => {
    const categoryRow = <ProductCategoryRow key={category} name={category} />;
    rows.push(categoryRow);

    groupedProducts[category].forEach((product) => {
      const { name } = product;
      const productRow = <ProductRow key={name} product={product} />;
      rows.push(productRow);
    });
  });

  return (
    <section>
      <h2>Product List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </section>
  );
}

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    const { products } = this.props;
    return (
      <div>
        <SearchForm />
        <ProductTable products={products} />
      </div>
    );
  }
}

function App() {
  log('App');
  return (
    <React.Fragment>
      <FilterableProductTable products={mockProducts} />
    </React.Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
