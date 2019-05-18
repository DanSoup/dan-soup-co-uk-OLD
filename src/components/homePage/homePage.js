import React from 'react';
import PropTypes from 'prop-types';
import Header from './header/header.js';
import Content from './content/content.js';
import './homePage.css';

class HomePage extends React.Component {

  state = {

  }

  render() {
    return <React.Fragment>
      <Header/>
      <Content/>
    </React.Fragment>
  }

}

HomePage.propTypes = {

};

export default HomePage;