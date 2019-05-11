import React from 'react';
import PropTypes from 'prop-types';
import Subtitle from './subtitles/subtitles.js';

class Header extends React.Component {

    state = {
        
    }

    render() {        

        return <header>
            <h1>DAN SOUP</h1>
            <Subtitle/>
            <nav>

            </nav>
        </header>

    }

}

Header.propTypes = {

};

export default Header;