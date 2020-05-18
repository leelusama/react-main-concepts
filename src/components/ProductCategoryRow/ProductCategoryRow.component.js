import React from 'react';

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

export default ProductCategoryRow;
