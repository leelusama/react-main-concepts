import React from 'react';

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

export default ProductRow;
