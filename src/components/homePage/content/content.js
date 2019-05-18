import React from 'react';
import {Route} from 'react-router-dom'
import PropTypes from 'prop-types';

import Home from './home/home.js';
import AboutMe from './aboutMe/aboutMe.js';

const Content = (props) => {

  return <main>
    <Route exact path="/" component={Home}/>
    <Route exact path="/home" component={Home}/>
    <Route exact path="/about-me" component={AboutMe}/>
  </main>

}

Content.propTypes = {

};

export default Content;