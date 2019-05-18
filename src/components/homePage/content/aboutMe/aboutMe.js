import React from 'react';
import PropTypes from 'prop-types';

const AboutMe = (props) => {

  const aboutMeText = [
    "My name's Daniel but I'm better known by my nickname Dan Soup. I'm a full-stack developer with a background in mathematics and esports. This is my story so far."
  ]

  return <React.Fragment>
    <div className="dsBlock">
      {aboutMeText.map((line, index) => {
        return index > 0 ? <><br/><br/><p>{line}</p></> : <p>{line}</p>
      })}
    </div>
  </React.Fragment>

}

AboutMe.propTypes = {

};

export default AboutMe;