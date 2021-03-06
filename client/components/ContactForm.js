import React,{Component} from 'react';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'
import axios from 'axios';

import Notifications, { notify } from './Notifications'

export default class ContactForm extends React.Component{
  constructor(){
    super()
      this.state = {
        fullName: '',
        email: '',
        text: '',
        clicked: false
      }
      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleChange = this.handleChange.bind(this)
      this.onClick = this.onClick.bind(this)

  }

  async handleSubmit(e){
    e.preventDefault()
    await axios.post('http://localhost:4000/api/email', this.state)
    .then(function(response){
      console.log(response)
    })
    .catch(function(err){
      console.error(err, "On no, looks like something is wrong with your submit")
    })
    this.setState({
      fullName: '',
      email: '',
      text: '',
      clicked: false
    })
    this.props.history.push('/')
  }

  handleChange(e){
     this.setState({
       [e.target.name]: e.target.value
     })
  }

  onClick(){
    notify("this is a notification")
    this.setState({
      clicked: true
    })
  }

  render(){
    return(
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
        <h2 className="header--lg">Let's Talk</h2>
        {this.state.clicked ? (
              <Notifications />
          ) : (
          <div>
          </div>)
        }
        <form onSubmit={this.handleSubmit} className="submission-form">
          <label>Full Name</label>
            <input
              name="fullName"
              type="text"
              value={this.state.fullName}
              onChange={this.handleChange}
            />
       <label>Email</label>
         <input
           placeholder="Your email address goes here"
           name="email"
           type="text"
           value={this.state.email}
           onChange={this.handleChange}
         />

       <label>Message</label>
         <textarea
           name="text"
           placeholder="Say something 🦄"
           value={this.state.text}
           onChange={this.handleChange}
         ></textarea>
       <button
           onClick={this.onClick}
           className="main-btn"
           type="submit"
           disabled={
             !this.state.fullName || !this.state.email || !this.state.text
           }
         >
           Send
         </button>
       </form>
      </div>
    )
  }
}
