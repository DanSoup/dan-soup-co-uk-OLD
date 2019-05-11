import React from 'react';
import PropTypes from 'prop-types';

class Subtitle extends React.Component {

    state = {
        subtitleCycle: 0,
        subtitles: ['', '', '']
    }

    titles = [
        'Developer',
        'Gamer',
        'Tournament Organizer',
        'Graphic Designer',
        'Mathematician',
        'Artist',
        'Poet',
        'Bobo',
        'Mentor',
        'Hiker',
        'Smasher'
    ]

    render() {

        const positionArray = ['Right', 'Center', 'Left', 'Right', 'Center'];

        setTimeout(() => {

            const newSubtitleSycle = (this.state.subtitleCycle + 1) % 3;
            const newSubtitles = [...this.state.subtitles];

            newSubtitles[newSubtitleSycle] = this.titles[Math.floor(Math.random() * this.titles.length)]

            this.setState({
                subtitleCycle: newSubtitleSycle,
                subtitles: newSubtitles
            })
        }, 2000)

        const {subtitles} = this.state;        

        return <React.Fragment>
            <div className="subtitleContainer">
                <h2 className={`subtitle${positionArray[this.state.subtitleCycle]}`}>{subtitles[1]}</h2>
            </div>
            <div className="subtitleContainer">
                <h2 className={`subtitle${positionArray[this.state.subtitleCycle + 1]}`}>{subtitles[0]}</h2>
            </div>
            <div className="subtitleContainer">
                <h2 className={`subtitle${positionArray[this.state.subtitleCycle + 2]}`}>{subtitles[2]}</h2>
            </div>
        </React.Fragment>
    }

}

Subtitle.propTypes = {

};

export default Subtitle;