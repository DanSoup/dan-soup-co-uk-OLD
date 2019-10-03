import React from 'react';
import PropTypes from 'prop-types';
import './projects.css';

let projects;

if (process.env.NODE_ENV === 'development') {
  projects = require('../../../offline-data/projects')
} else {

}

const Projects = (props) => {

  const ProjectPreview = () => {
    return <section>
      <img height="150" width="300" src="https://upload.wikimedia.org/wikipedia/commons/6/66/An_up-close_picture_of_a_curious_male_domestic_shorthair_tabby_cat.jpg"></img>
      <div>
        <h1>Psoupocode</h1>
        <h2>Published 10/2019</h2>
        <p>A website where I publish coding tutorials. The aim is to be friendly to people completely new to the subject and to not assume prior knowledge without providing a tutorial for it.</p>
      </div>
    </section>
  };

  return <div className="projects">
    {projects.map(project => {
      return <section>
        <img height="150" width="300" src="https://upload.wikimedia.org/wikipedia/commons/6/66/An_up-close_picture_of_a_curious_male_domestic_shorthair_tabby_cat.jpg"></img>
        <div>
          <h1>{project.title}</h1>
          <h2>Published 10/2019</h2>
          <p>A website where I publish coding tutorials. The aim is to be friendly to people completely new to the subject and to not assume prior knowledge without providing a tutorial for it.</p>
        </div>
      </section>
    })}
  </div>

}

Projects.propTypes = {

};

export default Projects;