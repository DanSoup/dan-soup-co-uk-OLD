import React from 'react';
import PropTypes from 'prop-types';
import subtitles from './subtitles.json';

import NavBar from './navBar/navBar.js';

const Header = (props) => {

  const RandomSubtitle = () => {
    const chosenSubtitle = subtitles[Math.floor(Math.random() * subtitles.length)];
    return <h2>{` - ${chosenSubtitle}`}</h2>
  };

  return <>
    <header>
      <div className="mainTitle">
        <h1>Dan Soup</h1><RandomSubtitle/>
      </div>
    </header>
    <NavBar/>
  </>

}

Header.propTypes = {

};

export default Header;