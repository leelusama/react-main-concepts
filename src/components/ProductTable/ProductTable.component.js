import React from 'react';
import ProductCategoryRow from '../ProductCategoryRow/ProductCategoryRow.component';
import ProductRow from '../ProductRow/ProductRow.component';

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
      const { name, _id } = product;
      const productRow = <ProductRow key={_id || name} product={product} />;
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

export default ProductTable;
