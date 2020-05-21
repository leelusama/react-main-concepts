import React from 'react';
import AppContext from '../../context';
import SelectLanguage from '../SelectLanguage';

class DeepInside extends React.Component {
  static contextType = AppContext;

  render() {
    const { language, selectLanguage } = this.context;
    return (
      <React.Fragment>
        <h1> DEEPINSIDE:::: {language}</h1>
        <SelectLanguage value={language} selectLanguage={selectLanguage} />
      </React.Fragment>
    );
  }
}

export default DeepInside;
