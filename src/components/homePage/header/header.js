import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {

    state = {
        currentTitle: 0
    }

    titles = [
        'Developer',
        'Gamer',
        'Tournament Organizer'
    ]

    render() {

        setTimeout(() => {
            this.setState({currentTitle: (this.state.currentTitle + 1) % this.titles.length})
        }, 2000)

        const titleIndex = this.state.currentTitle;

        return <header>
            <h1>Dan Soup</h1>
            <h2>{this.titles[titleIndex]}</h2>
        </header>
    }

}

Header.propTypes = {

};

export default Header;