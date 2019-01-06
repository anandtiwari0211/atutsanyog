import React from 'react';
import { Link } from 'react-router-dom';
// import '../Styles/styles.css';
class Footer extends React.Component {
  render() {
    return(
    <div className="w3l_footer">
    <div className="container">
    <div className="w3ls_footer_grid">
    <div className="col-md-4 w3ls_footer_grid_left">
							<h4>Location:</h4>
							<p>M-50,Silicon City Indore MP</p>
					</div>
          <div className="col-md-4 w3ls_footer_grid_left">
							<h4>Contact us:</h4>
							<p><span>Phone : </span>+91-9424554800</p>
							<p><span>Email : </span><a href="mailto:info@example.com">meghanaik@atutsanyog.com</a></p>
					</div>
          <div className="col-md-4 w3ls_footer_grid_left">
							<h4>Opening hours:</h4>
							<p>Working days (4pm-8pm)</p>
							<p>Sundays (5pm-6pm)</p>
					</div>
					<div className="clearfix"> </div>
    </div>
    </div>
  </div>
    )
  }
}

export default Footer;
