import React from 'react';

function SelectLanguage(props) {
  const handleChange = props.selectLanguage;
  const value = props.value;
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
