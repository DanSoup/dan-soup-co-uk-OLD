import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import './home.css';
import Projects from '../projects/projects.js';

const Home = (props) => {

  const [sLatestBlog, uLatestBlog] = useState({})

  useEffect(() => {

    const url = process.env.NODE_ENV === 'development' ? 'http://localhost:8080/blogs' : 'https://s3-eu-west-1.amazonaws.com/dansoup.co.uk-content/blogs'

    fetch(url)
    .then(res => res.json())
    .then(res => {
      return fetch(`${url}/${res.sort((a, b) => b - a)[0].id}`)
    })
    .then(res => res.json())
    .then(res => {
      uLatestBlog(res)
    })
    .catch(err => console.log(err))

  }, []);

  return <div className="home-page">
    <section>
      <h1>Latest Post</h1>
      <h2>{sLatestBlog.title}</h2>
      {sLatestBlog.body && sLatestBlog.body.map(ele => {
        return <p>{ele.p}</p>
      })}
      <time>{sLatestBlog.time}</time>
    </section>
    <section>
      <h1>Project Updates</h1>
      <p>Coming Soon</p>
    </section>
    <section>
      <h1>About Me</h1>
      <p>I'm Dan Soup. I'm a fullstack developer, mathematician, artist, gamer and former esports tournament organizer and streamer. I started coding in Visual Basic at university and continued to use it for various projects, mainly for collating esports data for the competitive Super Smash Bros. Melee community. I decided to take the Northcoders programming course and pursue a career as a developer.</p>
    </section>
  </div>

}

Home.propTypes = {

};

export default Home;