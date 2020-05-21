import React from 'react';
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';
import AppContext from '../../context';

class WithContext extends React.Component {
  static contextType = AppContext;

  render() {
    let { language } = this.context;
    return (
      <section>
        <h2>WithContext: {language}</h2>
        <Header language={language} />
        <Main language={language} newsList={this.props.newsList} />
        <Footer language={language} />
      </section>
    );
  }
}

export default WithContext;
