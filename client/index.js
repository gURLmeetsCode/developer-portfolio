import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Welcome from './components/Welcome'
import About from './components/About'
import ContactForm from './components/ContactForm'
import Projects from './components/Projects'
import {default as NotFound} from './components/NotFound'


import './index.css';


ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route exact path="/about" component={About} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/contact" component={ContactForm} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
