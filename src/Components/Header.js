import React from 'react';
import { Link } from 'react-router-dom';
// import '../Styles/styles.css';

class Header extends React.Component {
  render() {
    return(
      <>
      <div className="banner-w3ls" id="home">
    <div className="container-fluid">
        <div className="header">
            <div className="container ">

                 <div className="header-inner">
					  <h1 className="logo">
						<a href="home"><img src="/Images/atutsanyog_logo.png" alt="logo" width="60" height="40"/></a></h1>
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
                      <li><a href="/matches">Matches</a></li>
                      <li><a href="/contact">Contact</a></li>
                      <li><a href="/janganna">Jangnna</a></li>
								</ul>
							</div>
							<div className="clearfix"> </div>
						</nav>
						<div className="header-right-w3ls">
							<a href="login">Log In</a>
							<a href="registration">Register</a>
						</div>
						<div className="clearfix"></div>
				</div>


			<div className="w3l_banner_info" >
				<div className="slider">
					<div className="callbacks_container">

					</div>
				</div>
			</div>
			<div className="clearfix"></div>

        </div>
        </div>
    </div>
</div>
        </>
        )
  }
}

export default Header;
