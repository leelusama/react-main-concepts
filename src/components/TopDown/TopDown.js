import React from 'react';
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';

function TopDown(props) {
  const { language } = props;
  return (
    <section>
      <h2>TopDown</h2>
      <Header language={language} />
      <Main language={language} newsList={props.newsList} />
      <Footer language={language} />
    </section>
  );
}

export default TopDown;
