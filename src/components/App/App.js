import React from 'react';
import TopDown from '../TopDown';
import newsList from '../../mock/newsList';
import SelectLanguage from '../SelectLanguage';

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
        <div className='wrapper'>
          <SelectLanguage
            value={this.state.language}
            selectLanguage={this.selectLanguage}
          />
          <TopDown
            newsList={newsList.slice(1, 4)}
            language={this.state.language}
          />
          {/* <WithContext /> */}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
