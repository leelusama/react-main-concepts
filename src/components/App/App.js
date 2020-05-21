import React from 'react';
import TopDown from '../TopDown';
import newsList from '../../mock/newsList';
import SelectLanguage from '../SelectLanguage';
import WithContext from '../WithContext';
import context from '../../context';

const LanguageContext = context.getContext();

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      language: 'en',
    };

    this.selectLanguage = this.selectLanguage.bind(this);
  }

  selectLanguage(e) {
    const language = e.target.value;
    this.setState({ language });
  }

  render() {
    return (
      <React.Fragment>
        <SelectLanguage
          value={this.state.language}
          selectLanguage={this.selectLanguage}
        />
        <div style={{ display: 'flex' }}>
          <TopDown
            newsList={newsList.slice(1, 4)}
            language={this.state.language}
          />
          <LanguageContext.Provider value={this.state.language}>
            <WithContext newsList={newsList.slice(1, 4)} />
          </LanguageContext.Provider>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
