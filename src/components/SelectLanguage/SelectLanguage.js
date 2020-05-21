import React from 'react';

function SelectLanguage(props) {
  const { value, selectLanguage: handleChange } = props;
  return (
    <form>
      <select value={value} onChange={handleChange}>
        <option value='ru'>Русский</option>
        <option value='en'>English</option>
      </select>
    </form>
  );
}

export default SelectLanguage;
