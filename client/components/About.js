import React from 'react';
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';


export default function About () {
  return (
    <div className="">
      <div className="menu-wrap">
        <input type="checkbox" className="toggler"/>
        <div className="hamburger">
          <div></div>
        </div>
        <div className="menu">
          <div>
            <div>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><a href="https://drive.google.com/file/d/1TCf0fhgMqcUvYMtb9bJOacFVa4x4w-LU/view?usp=sharing">Resume</a></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    <section className="section section-light">
      <h2> About Me</h2>
      <p>My background is in Textiles and after graduation I moved to California where I had the
        opportunity to work for Facebook. While there I played a key role in the campus expansions
        across North and Latin America. I grew curious about technology and building websites. It was
        at this time, I decided to attend workshops and meetups to build on my knowledge and gage if
        this was something I could do full time. Shortly after, I moved back to NYC and started working
        for a non-profit and was responsible for maintaining their public facing website in addition to
        helping develop their e-commerce site. This experience is what prompted me to apply to Grace
        Hopper. Grace Hopper has now given me the skills and confidence to reach my professional
        goals. I am so excited to work on real world problems and learn more about how data can help
        make more informed decisions.
      </p>
    </section>

    <div className="p-img2">
      <div className="p-text">
        <span className="border trans about-btn">
          <Link to="/projects" className="about-link">VIEW MY WORK</Link>
        </span>
      </div>
    </div>

    <section className="section section-dark">
      <h2> Current Projects</h2>
      <p> I am currently gaining experience with React Native, Firebase, TypeScript and AWS.
      </p>
    </section>

    <div className="p-img3">
      <div className="p-text">
        <span className="border trans about-btn">
          <Link to='/contact' className="about-link">CONTACT ME</Link>
        </span>
      </div>
    </div>

    <section className="section section-light">
      <h2>Let's Connect!</h2>
        <div className='social-nav social-nav--welcome'>
          <div className='social-nav__row--footer'>
           <li><a href="https://www.facebook.com/natasha.kelly.16"><img src="/assets/images/official-facebook-logo.png" className="social-nav__photo" /></a></li>
           <li><a href="https://twitter.com/gURLmeetsCode"><img src="/assets/images/new-twitter-logo.png" className="social-nav__photo" /></a></li>
           <li><a href="https://www.linkedin.com/in/natashakelly1/"><img src="/assets/images/linkedin-logo.png" className="social-nav__photo" /></a></li>
           <li><a href="https://github.com/gURLmeetsCode"><img src="/assets/images/github-logo.png" className="social-nav__photo" /></a></li>
           <li><a href="https://medium.com/@gURLmeetsCode"><img src="/assets/images/medium-logo-688.png" className="social-nav__photo" /></a></li>
         </div>
       </div>
    </section>
  </div>
  )
};
