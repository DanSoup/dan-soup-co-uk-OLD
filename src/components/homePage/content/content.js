import React from 'react';
import {Route} from 'react-router-dom'
import PropTypes from 'prop-types';

import Home from './home/home.js';
import AboutMe from './aboutMe/aboutMe.js';
import Blog from './blog/blog.js';
import Projects from './projects/projects.js';
import ProjectPage from './projects/projectPage.js';

const Content = (props) => {

  return <main>
    <Route exact path="/" component={Home}/>
    <Route exact path="/home" component={Home}/>
    <Route exact path="/about-me" component={AboutMe}/>
    <Route exact path="/blog" component={Blog}/>
    <Route exact path="/projects" component={Projects}/>
    <Route path="/projects/*" component={ProjectPage}/>
  </main>

}

Content.propTypes = {

};

export default Content;