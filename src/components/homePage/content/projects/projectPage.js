import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import './projectPage.css';

let projects = [];

const ProjectPage = (props) => {

  const [sProjects, uProjects] = useState([]);

  useEffect(() => {

    const url = (process.env.NODE_ENV === 'development') ? 'http://localhost:8080' : 'https://s3-eu-west-1.amazonaws.com/dansoup.co.uk-content/projects/projects.json'

    fetch(url)
    .then(res => res.json())
    .then(res => {
      uProjects(res);
    })
    .catch(err => {
      console.log(err);
    });
  }, []);

  const project = sProjects.find(project => project.title === props.location.pathname.match(/\/projects\/(.+)/)[1]) || {}

  return <section className="project-page">
    <div>
      <img height="150" width="300" src={project.previewImg}></img>
      <div>
        <h1>{project.title}</h1>
        <h2>Published: {project.published}</h2>
        <h2>Link: <a target="_blank" href={project.url}>{project.link}</a></h2>
      </div>
    </div>
    <p>{project.description}</p>
  </section>

}

ProjectPage.propTypes = {

};

export default ProjectPage;