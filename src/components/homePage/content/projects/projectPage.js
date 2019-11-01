import React from 'react';
import PropTypes from 'prop-types';
import './projectPage.css';

let projects = [];

const ProjectPage = (props) => {

  if (process.env.NODE_ENV === 'development') {
    projects = require('../../../../offline-data/projects')
  } else {
  
  }

  const project = projects.find(project => project.title === props.location.pathname.match(/\/projects\/(.+)/)[1])

  return <section className="project-page">
    <div>
      <img height="150" width="300" src={project.previewImg}></img>
      <div>
        <h1>{project.title}</h1>
        <h2>Published: {project.published}</h2>
        <h2>Link: {project.link}</h2>
      </div>
    </div>
    <p>{project.description}</p>
  </section>

}

ProjectPage.propTypes = {

};

export default ProjectPage;