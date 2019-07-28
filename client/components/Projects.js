import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import Cards from './Cards'
import {Link} from 'react-router-dom'


export default function Projects () {
  return (
     <div className="background">
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
      <h6 className="header--sm--light">Grace Hopper - DEMO day presentation</h6>
      <div className="iframe-container">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/oeeHZJ-goRg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div>
        <h2 className="header--sm--light">Projects</h2>
        <Cards />
      </div>
    </div>
  )
};
