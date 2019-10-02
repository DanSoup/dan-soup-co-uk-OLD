import React from 'react';
import PropTypes from 'prop-types';
import './projects.css';

const Projects = (props) => {

  const projects = [
    {
      title: 'Psoupocode'
    }
  ];

  const ProjectPreview = () => {
    return <section>
      <h1>Psoupocode</h1>
    </section>
  };

  return <div className="projects">
    <ProjectPreview/>
  </div>

}

Projects.propTypes = {

};

export default Projects;