import React from 'react';

function SearchForm(props) {
  return (
    <section>
      <h2>Search form</h2>
      <form>
        <p>
          <label>
            Search product:
            <br />
            <input
              type='text'
              name='filterText'
              placeholder='Ball'
              onChange={props.onChange}
            />
          </label>
        </p>
        <p>
          <label>
            <input
              type='checkbox'
              name='inStockOnly'
              onChange={props.onChange}
            />
            Only show products in stock
          </label>
        </p>
      </form>
    </section>
  );
}

export default SearchForm;
