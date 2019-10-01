import React from 'react';
import PropTypes from 'prop-types';

import NavBar from './navBar/navBar.js';

const Header = (props) => {

  return <>
    <header>
      <div className="mainTitle">
        <h1>Dan Soup</h1><h2> - Dot Co Dot UK</h2>
      </div>
    </header>
    <NavBar/>
  </>

}

Header.propTypes = {

};

export default Header;