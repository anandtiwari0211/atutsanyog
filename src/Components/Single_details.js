import React from 'react';
import '../Styles/styles.css';
import InnerHeader from '../Components/Inner_header';
import Footer from '../Components/Footer';

class Single_details extends React.Component {
  render() {
    return(
      <div>
      <InnerHeader />
      <div className="w3l_agileits_breadcrumbs">
    <div className="container">
        <div className="w3l_agileits_breadcrumbs_inner">
            <ul>
                <li><a href="/">Home</a><span>&#187;</span></li>
                <li>Single Detsils</li>
            </ul>
        </div>
    </div>
</div>

<div className="matches elite-app">
	<div className="container">
       	<div className="tittle-agileinfo">

		<h3>About</h3>
	</div>
	<div className="matches-main-agileinfo">
		<div className="col-md-6 profile1">
		<img src="" width="250" height="300" alt="image.png" />
		</div>

	<div className="col-md-6 person-info-agileits-w3layouts">
			<ul>
				<li><span>Name</span>:</li>
				<li><span>DOB</span>:</li>
				<li><span>Profession</span>:</li>
				<li><span>Education</span>: Post Graduate</li>



				<li><span>Gotra </span>: </li>
				<li><span>Address</span>:</li>


			</ul>
		</div>
		<div className="clearfix"> </div>
               </div>
		<div className="col-md-6 person-info-agileits-w3layouts">
			<h3>Basics Details</h3>
			<ul>
				<li><span>Job Place</span>:</li>
				<li><span>Salary/Month</span>:</li>
        <li><span>Email Id</span>: </li>
				<li><span>Height</span>: Below 4.5 feet</li>
					</ul>
		</div>
		<div className="col-md-6 person-info-agileits-w3layouts">
			<h3>Family Details</h3>
			<ul>
				<li><span>Fathers Name</span>:</li>
				<li><span>Fathers Occupation</span>:</li>
				<li><span>Mothers Occupation</span>:</li>
        <li><span>No. Of Brothers</span>: </li>
				<li><span>No. Of Sisters</span>: </li>
				 <li><span>Contact Number</span>:</li>
			</ul>
		</div>
	</div>
</div>
<Footer />
      </div>
    )
  }
}

export default Single_details;
