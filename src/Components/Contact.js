import React from 'react';
import '../Styles/styles.css';
import InnerHeader from '../Components/Inner_header';
import Footer from '../Components/Footer';

class Contact extends React.Component {
  render() {
    return(
      <div>
<InnerHeader />
      <div className="w3l_agileits_breadcrumbs">
 <div className="container">
  <div className="w3l_agileits_breadcrumbs_inner">
    <ul>
      <li><a href="/">Home</a><span>&#187;</span></li>
      <li>Contact</li>
      </ul>
  </div>
</div>
</div>

<div className="login elite-app contact-page">
	<div className="container">
	<div className="tittle-agileinfo">
				<h3>Contact</h3>
			</div>
			<div className="col-md-12 regstr-r-w3-agileits">
			<div className="form-bg-w3ls">
				<h3 className="subhead-agileits white-w3ls">Contact Form</h3>
				<form action="#" method="post">
					<input type="text" name="Name" placeholder="Name"/>

					<input type="text" name="Mobile_no" placeholder="Mobile No."/>

					<textarea name="Message" placeholder="Message"></textarea>

					<input type="submit" value="Submit" className="button-w3layouts hvr-rectangle-out"/>
				</form>
			</div>
			</div>
	</div>
</div>
<div className="contact-page-w3-agile">
	<div className="tittle-agileinfo">
				<h3>Find Us</h3>
			</div>
	<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2453.541062085639!2d1.1943017158471063!3d52.05167107972815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d99fa5c3b9c23f%3A0x1c973f6b89853630!2sMatrimonium+Elite!5e0!3m2!1sen!2sin!4v1490253796112"></iframe>
</div>
<Footer />
      </div>
    )
  }
}

export default Contact;
