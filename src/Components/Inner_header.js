import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/styles.css';


class Header extends React.Component {
  render() {
    return(
      <div>
      <div className="banner-w3ls inner-banner-agileits" id="home">
  	<div className="container">

                   <div className="header-inner">
  					  <h1 className="logo">
  						<button href="home"><img src="assets/images/atutsanyog_logo.jpg" alt="logo" width="80" height="60"/></button></h1>
  						<nav className="navbar navbar-default">
  							<div className="navbar-header">
  								<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
  									<span className="sr-only">Toggle navigation</span>
  									<span className="icon-bar"></span>
  									<span className="icon-bar"></span>
  									<span className="icon-bar"></span>
  								</button>
  							</div>

  							<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
  								<ul className="nav navbar-nav navbar-right">
                      <li><Link to='/'>Home</Link></li>
                      <li><Link to='/about'>About</Link></li>
                      <li><a href="/matches">Matchess</a></li>
                      <li><a href="/contact">Contact</a></li>
                      <li><a href="/janganna">Jangnna</a></li>
  								</ul>
  							</div>
  							<div className="clearfix"> </div>
  						</nav>

  						<div className="header-right-w3ls">
  					 	<a href="/"><div>Logout</div></a>
  						</div>

  						<div className="clearfix"></div>
  				</div>
  </div>
  </div>
        </div>
        )
  }
}

export default Header;
