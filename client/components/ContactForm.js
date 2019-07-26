import React,{Component} from 'react';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'



class ContactForm extends React.Component{
  constructor(){
    super()
      this.state = {
        firstName: '',
        lastName: '',
        email: '',
        message: '',
        show: false,
        setShow: false
      }
  }

  render(){
    return(
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
        <h2 className="header--sm">Would like to hire me for your project? </h2>
          <form className="submission-form">
         <label>First Name</label>
         <input
           type="text"
           name="firstName"
           value={this.state.firstName}
           onChange={evt => this.setState({firstName: evt.target.value})}
         />
         <label>Last Name</label>
         <input
           type="text"
           name="lastName"
           value={this.state.lastName}
           onChange={evt => this.setState({lastName: evt.target.value})}
         />
         <label>Email</label>
         <input
           type="email"
           name="email"
           value={this.state.email}
           onChange={evt => this.setState({email: evt.target.value})}
         />
       <label>Message</label>
         <textarea
           type="text"
           name="message"
           value={this.state.message}
           onChange={evt => this.setState({message: evt.target.value})}
         ></textarea>
         <Button
           type="button"
           variant="dark"
           className="submit-btn"
           size="lg" block
           disabled={
             !this.state.firstName || !this.state.lastName || !this.state.email
           }
           onClick={() => {
             this.props.history.push('/')
             this.setState({
               firstName: '',
               lastName: '',
               email: '',
               message: ''
             })
           }}
         >
           Send
         </Button>
       </form>
      </div>
    )
  }
}

module.exports = ContactForm;
