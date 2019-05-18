import React from 'react';
import PropTypes from 'prop-types';
import './captionedImage.css';

const CaptionedImage = ({src, caption, alt, height, width}) => {

  // return <figure class="compCaptionedImage">
  return <figure class="compCaptionedImage">
    <img src={src} alt={alt} height={height} width={width}/>
    <figcaption>{caption}</figcaption>
  </figure>

}

CaptionedImage.propTypes = {
  src: PropTypes.string,
  catpion: PropTypes.string,
  alt: PropTypes.string
};

export default CaptionedImage;