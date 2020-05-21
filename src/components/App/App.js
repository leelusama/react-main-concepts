import React from 'react';
import TopDown from '../TopDown';
import newsList from '../../mock/newsList';
import SelectLanguage from '../SelectLanguage';
import WithContext from '../WithContext';
import AppContext from '../../context';
import DeepInside from '../DeepInside';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      language: 'en',
      selectLanguage: this.selectLanguage.bind(this),
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
          <AppContext.Provider value={this.state}>
            <WithContext newsList={newsList.slice(1, 4)} />
            <DeepInside />
          </AppContext.Provider>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
