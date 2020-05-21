import React from 'react';
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';
import context from '../../context';

const LanguageContext = context.getContext();

class WithContext extends React.Component {
  static contextType = LanguageContext;

  render() {
    return (
      <section>
        <h2>WithContext: {this.context}</h2>
        <Header language={this.context} />
        <Main language={this.context} newsList={this.props.newsList} />
        <Footer language={this.context} />
      </section>
    );
  }
}

export default WithContext;
