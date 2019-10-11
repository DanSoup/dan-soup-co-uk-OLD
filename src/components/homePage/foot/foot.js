import React from 'react';
import PropTypes from 'prop-types';
import './foot.css';

const Foot = (props) => {

  const now = new Date(Date.now())
  const currentYear = now.getFullYear();

  // I know this looks weird for being 2019 - 2019 but it'll be 2020 in a few months so I don't see a huge need to fix it.

  return <footer>
    Copyright &copy; Dan Soup 2019 - {currentYear}. All rights reserved.
  </footer>

}

Foot.propTypes = {

};

export default Foot;