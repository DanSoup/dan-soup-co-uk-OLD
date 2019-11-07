import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import './home.css';
import Projects from '../projects/projects.js';

const Home = (props) => {

  return <div className="home-page">
    <section>
      <h1>Latest Post</h1>
      <p>The latest blog post I made will be here. BLAH BLAH BLAH BLAH BLAH Lfesof fes g grg rthres ghgtsht tsh thsh thtjuj hths ths hsr htrsshtrht shtrht shtthrsh rsh tshsrth ts rh tsrhh tsr ht h trs ht rs g</p>
    </section>
    <section>
      <h1>Project Updates</h1>
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