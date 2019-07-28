import React, {Component} from 'react'
import {Route, Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';


export default class Welcome extends React.Component {
  render () {
    return (
      <div>
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
      <div>
        <header className="showcase">
          <div className="container showcase--inner">
            <h1>Welcome</h1>
            <p>I'm Natasha Kelly and I am a Fullstack Software Engineer! Thank you for visiting my personal website. I am excited to share my love of technology with you. </p>
            <Link to="/about" className="main-btn">Read More</Link>
          </div>
      </header>
      </div>
    </div>
    )
  }
}
