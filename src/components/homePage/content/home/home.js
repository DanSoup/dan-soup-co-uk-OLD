import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import './home.css';

const Home = (props) => {

  const [invis, updateInvis] = useState(true);

  useEffect(() => {
    updateInvis(false);
  });

  return <div className="home-page">
    <section>
      <h1>Latest Blog {JSON.stringify(process.env.NODE_ENV)}</h1>
    </section>
    <section>
      <h1>Project Updates</h1>
    </section>
    <section>
      <h1>Tweets</h1>
    </section>
  </div>

}

Home.propTypes = {

};

export default Home;