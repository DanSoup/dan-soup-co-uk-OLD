import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {CaptionedImage} from '../../../universal'

import profilePicture from '../../../images/profilePicture.png';

const Home = (props) => {

  const [invis, updateInvis] = useState(true);

  useEffect(() => {
    updateInvis(false);
  });

  const intro = [
    'That\'s me! This is my website that I made for putting all my stuff on. I\'m a full stack developer, a gamer, a former Super Smash Bros. Melee tournament organizer, a sketcher, a poet, and a load of other things. Too many hobbies, not enought time, amirite?',
    'If you\'re looking at hiring me, you can read more about me in my PORTFOLIO, if not you can navigate via the navbar at the top of the page to check out my projects and read my blog. Have fun!'
  ]

  return <React.Fragment>
    <div className={`dsBlockTitle1${invis ? ' invis' : ''}`}>
      <h1>Who is this 'Dan Soup' guy?</h1>
    </div>
    <div className={`dsBlock${invis ? ' invis' : ''}`}>
      <CaptionedImage className="dsFloatRight" src={profilePicture} alt="Photo of Dan Soup" caption="It's me!" height="300px" width="300px"/>
      {intro.map((line, index) => {
        return index > 0 ? <><br/><br/><p>{line}</p></> : <p>{line}</p>;
      })}
    </div>
  </React.Fragment>

}

Home.propTypes = {

};

export default Home;