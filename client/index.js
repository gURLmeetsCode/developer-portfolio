import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Loadable from 'react-loadable'
import Spinner from 'react-bootstrap/Spinner'



const Welcome = Loadable({
  loader: () => import('./components/Welcome'),
  loading() {
    return <div>
      <h4>Content is loading</h4>
      <Spinner animation="border" variant="secondary" /></div>
  }
})

const About = Loadable({
  loader: () => import('./components/About'),
  loading() {
    return <div>
      <h4>Content is loading</h4>
      <Spinner animation="border" variant="secondary" />
    </div>
  },
  timeout: 10000
})

const ContactForm = Loadable({
  loader: () => import('./components/ContactForm'),
  loading() {
    return <div>
      <h4>Content is loading</h4>
      <Spinner animation="border" variant="secondary" /></div>
  }
})

const Projects = Loadable({
  loader: () => import('./components/Projects'),
  loading() {
    return <div>
      <h4>Content is loading</h4>
      <Spinner animation="border" variant="secondary" /></div>
  }
})




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
