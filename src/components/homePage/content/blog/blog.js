import React from 'react';
import PropTypes from 'prop-types';
import './blog.css';

const Blog = (props) => {

  return <div className="blog-page">
    <article>
      <h1>Sometimes finishing is more important than winning.</h1>
      <time>18:47 01/10/19</time>
      <br/>
      <br/>
      <p>Starting something can be really difficult but I find finishing something even more so. Being able to take something you've created and say "Here, look at this what I have made, I have made a concious decision to share it with you in its current state".</p>
      <br/>
      <p>Take this website for example. I've been meaning to make a personal website for a long time, ever since I started training to be a developer, but I was never able to commit to it. I'd work on a design for it for several weeks only to delete the whole thing and start again. I KNOW it's not going to be perfect, even if I spend the next 10 years solidly working on it. Why the hesitation and constant restarting?</p>
      <br/>
      <p>The answer is simple, but also unsatisfyingly complex: brains are weird. We can know things but not believe them, even in the face of undeniable evidence.</p>
      <br/>
      <p>So this is it. This is the first thing that will be public on my website. It's not exactly what I want, but it never will be and it doesn't HAVE to be. I can continue to work on this and make it closer the website I want it to be and that's OK.</p>
    </article>
  </div>

}

Blog.propTypes = {

};

export default Blog;