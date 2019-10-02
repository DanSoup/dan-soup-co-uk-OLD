import React from 'react';
import PropTypes from 'prop-types';

import NavBar from './navBar/navBar.js';

const Header = (props) => {

  const subTitles = [
    'Dot Co Dot UK',
    'Bullet Bill\'s Best Friend',
    'The Pinball Developer',
    'Definitely Not Illegal',
    'Run to the Helicopter'
  ];

  const RandomSubtitle = () => {

    const chosenSubtitle = subTitles[Math.floor(Math.random() * subTitles.length)];

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