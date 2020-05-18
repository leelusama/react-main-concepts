import React from 'react';
import SearchForm from '../SearchForm/SearchForm.component';
import ProductTable from '../ProductTable/ProductTable.component';

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inStockOnly: false,
      filterText: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let value;

    switch (e.target.name) {
      case 'inStockOnly':
        value = e.target.checked;

        break;

      case 'filterText':
        value = e.target.value;

        break;

      default:
        return;
    }

    if (value !== undefined) {
      this.setState({
        [e.target.name]: value,
      });
    }
  }

  render() {
    const { inStockOnly, filterText } = this.state;
    let computedProducts = [...this.props.products];

    if (inStockOnly) {
      computedProducts = computedProducts.filter(
        (product) => product.stocked === inStockOnly
      );
    }

    if (filterText.trim()) {
      computedProducts = computedProducts.filter((product) => {
        const name = product.name.toLowerCase();
        return name.indexOf(filterText.toLowerCase()) >= 0;
      });
    }

    return (
      <div>
        <SearchForm onChange={this.handleChange} />
        <ProductTable products={computedProducts} />
      </div>
    );
  }
}

export default FilterableProductTable;
