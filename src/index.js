import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logger from './helpers/logger';
import mockProducts from './mock/products';
import FilterableProductTable from './components/FilterableProductTable/FilterableProductTable.component';
const log = logger('dev');

function App() {
  log('App');
  return (
    <React.Fragment>
      <FilterableProductTable products={mockProducts} />
    </React.Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
