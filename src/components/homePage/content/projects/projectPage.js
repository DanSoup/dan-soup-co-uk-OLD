import React from 'react';
import PropTypes from 'prop-types';

let projects = [];

const ProjectPage = (props) => {

  if (process.env.NODE_ENV === 'development') {
    projects = require('../../../../offline-data/projects')
  } else {
  
  }

  const project = projects.find(project => project.title === props.location.pathname.match(/\/projects\/(.+)/)[1])

  return <React.Fragment>
    {project.title}
    {project.published}
    {project.link}

  </React.Fragment>

}

ProjectPage.propTypes = {

};

export default ProjectPage;