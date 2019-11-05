import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import './projects.css';

let projects = [];

const Projects = (props) => {

  const [sProjects, uProjects] = useState([]);

  const url = (process.env.NODE_ENV === 'development') ? 'http://localhost:8080' : 'https://s3-eu-west-1.amazonaws.com/dansoup.co.uk-content/projects/projects.json'

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(res => {
      uProjects(res);
    })
    .catch(err => {
      console.log(err);
    });
  }, []);

  const ProjectPreview = ({project}) => {
    return (
      <section>
        <Link to={`/projects/${project.title}`}>
          <div>
            <img height="150" width="300" src={project.previewImg}></img>
            <div className="spacer"></div>
            <h1>{project.title}</h1>
            <div className="spacer"></div>
            <h2>{project.published}</h2>
          </div>
        </Link>
      </section>
    )
  };

  return <div className="projects">
    {sProjects.map(project => {
      return <ProjectPreview project={project} key={project.title}></ProjectPreview>
    })}
  </div>

}

Projects.propTypes = {

};

export default Projects;