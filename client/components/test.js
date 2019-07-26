<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/assets/images/profile_photo.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/assets/images/launchday.jpeg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/assets/images/gdisf.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<div>
  <h2>How did I get started?</h2>
  <p>Lorem Lorem Praesent commodo cursus magna, vel scelerisque nisl consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident </p>
  <br />
  <h2>Interests && Passions </h2>
  <p>Lorem Lorem Praesent commodo cursus magna, vel scelerisque </p>
  <br />

  <h2>What am I working on now?</h2>
  <p>Lorem Lorem Praesent commodo cursus magna, vel scelerisque nisl consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>

  <h6>Check out my work!</h6>
  <Button className="about-btn" variant="dark"><Link to="/projects">PROJECTS</Link></Button>
</div>

<div className="image-container">
  <img className="image-main" src="/assets/images/profile_photo.jpg"/>
</div>
<div className="side-content">
  <h1 className="heading">HI. IM NATASHA!</h1>
  <p className="sub-heading">"I believe programming allows you to be in a state of constant professional and personal improvement. I enjoy the fact there is always something new to learn or experiment with!"</p>
  <p className="labels">Software Developer | Blogger | Lover of Learning</p>
  <p className="thank-you-note">Thank you for visiting my personal website. I am excited to share my love of technology with you.</p>
  <div className="main-btn-box">
    <Button className="main-btn" variant="dark"><Link to="/about">WELCOME</Link></Button>
  </div>
  <div className='social-nav social-nav--welcome'>
    <div className='social-nav__row'>
     <li><a href="https://www.facebook.com/natasha.kelly.16"><img src="/assets/images/official-facebook-logo.png" className="social-nav__photo" /></a></li>
     <li><a href="https://twitter.com/gURLmeetsCode"><img src="/assets/images/new-twitter-logo.png" className="social-nav__photo" /></a></li>
     <li><a href="https://www.linkedin.com/in/natashakelly1/"><img src="/assets/images/linkedin-logo.png" className="social-nav__photo" /></a></li>
     <li><a href="https://github.com/gURLmeetsCode"><img src="/assets/images/github-logo.png" className="social-nav__photo" /></a></li>
     <li><a href="https://medium.com/@gURLmeetsCode"><img src="/assets/images/medium-logo-688.png" className="social-nav__photo" /></a></li>
   </div>
 </div>
</div>

<div>
  <Card>
     <Card.Header>Featured</Card.Header>
     <Card.Body>
       <Card.Title>View My Resume</Card.Title>
       <Card.Text>
         Get a detailed view of everything I have been working on!
       </Card.Text>
       <Button variant="dark"><a href="https://drive.google.com/file/d/1TCf0fhgMqcUvYMtb9bJOacFVa4x4w-LU/view?usp=sharing">View</a></Button>
     </Card.Body>
   </Card>
</div>

this.props.history.push('/')

<div className="gradient-main">
  <div className="header-container">
    <h1
      className="header">NATASHA KELLY</h1>
  </div>
  <p className="main-text">FULL STACK SOFTWARE ENGINEER</p>
  <span className="img-container">
    <div className="image-cropper">
      <Link to="/about" className="link-btn"><img src="/assets/images/profile_photo.jpg" alt="avatar" className="profile-pic"/></Link>
    </div>
  </span>
  <div className="main-btn">
    <Button variant="dark"><Link to="/about" className="link-btn">WELCOME</Link></Button>
  </div>
  <div className='social-nav social-nav--welcome'>
    <div className='social-nav__row'>
     <li><a href="https://www.facebook.com/natasha.kelly.16"><img src="/assets/images/official-facebook-logo.png" className="social-nav__photo" /></a></li>
     <li><a href="https://twitter.com/gURLmeetsCode"><img src="/assets/images/new-twitter-logo.png" className="social-nav__photo" /></a></li>
     <li><a href="https://www.linkedin.com/in/natashakelly1/"><img src="/assets/images/linkedin-logo.png" className="social-nav__photo" /></a></li>
     <li><a href="https://github.com/gURLmeetsCode"><img src="/assets/images/github-logo.png" className="social-nav__photo" /></a></li>
     <li><a href="https://medium.com/@gURLmeetsCode"><img src="/assets/images/medium-logo-688.png" className="social-nav__photo" /></a></li>
   </div>
 </div>
</div>


/* WELCOME PAGE STYLING */
.main-container {
  background-color: #282E34;
  width: 100%;
  margin: 0 auto;
}

.gradient-main {

  max-width: 100%;
  max-height: 100%;

  background:
    linear-gradient(
      rgba(40, 54, 92, 0.88),
      rgba(20, 26, 36, 1)
    );
}

.img-container{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}


.image-cropper {
    width: 200px;
    height: 200px;
    position: relative;
    overflow: hidden;
    border: 2px solid #fff;
    border-radius: 50%;
}

.profile-pic {
  display: inline;
  margin: 0 auto;
  margin-left: -25%;
  height: 100%;
  width: auto;
}
.header{
  text-align: center;
  font-size: 86px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #FFF;
}

.main-text{
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 27px;
  letter-spacing: 8px;
  text-transform: uppercase;
  color: #28395C;
}

.main-btn{
  background-color: #28395C;
  position: absolute;
  top: 73%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: none;
}


.link-btn{
  text-decoration: none;
  color: #FFF;
  border: none;
}

.link-btn:hover {
  text-decoration: none;
  color: #666;
}

.social-media-container a {
  display: inline-block;
  text-decoration: none;
}

.social-nav--welcome{
    list-style-type: none;
    display: inline;
}

.social-nav__row{
    display:flex;
    justify-content:space-around;
    list-style-type:none;
    position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;

}

.social-nav__row--footer{
    display: flex;
    list-style-type:none;
    margin-top: 65px;
    justify-content: center;
}


.social-nav__photo{
    width: 30px;
	  height: 30px;
}

.social-btns{
    text-align: center;
}

/* ABOUT STYLING */

.about-btn:hover{
  background-color: #111;
}
.about-link:{
  text-decoration: none;
}

.about-link:hover{
  color: #FFF;
  text-decoration: none;
}

/* form */
.submission-form{
max-width: 600px;
margin: 2rem auto;
border: 2px solid #eee;
padding: 2rem;
}

label, input, textarea{
  display: block;
}

input, textarea{
  width: 100%;
}

label {
  color: #FFF;
}

textarea{
  margin-bottom: 20px;
}

.header--sm{
  text-align: center;
  font-size: 32px;
  text-transform: uppercase;
  color: #FFF;
}

.header--sm-diff{
  font-size: 32px;
  text-transform: uppercase;
  color: #FFF;
}

/* work */
.iframe-container{
  position: relative;
  left: 30%;
}

.card-subheader{
  font-weight: bolder;
}
