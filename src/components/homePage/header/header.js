import React from 'react';
import PropTypes from 'prop-types';
import Subtitle from './subtitles/subtitles.js';
import NavBar from './navBar/navBar.js'

class Header extends React.Component {

    state = {
        
    }

    render() {        
    
        return <header>
            <h1>DAN SOUP</h1>
            <Subtitle/>
            <NavBar/>

        </header>

    }

}

Header.propTypes = {

};

export default Header;