import React from 'react';
import '../Styles/styles.css';
import InnerHeader from '../Components/Inner_header';
import Footer from '../Components/Footer';
class Login extends React.Component {
  render() {
    return(
      <div>
      <InnerHeader />
      <div className="w3l_agileits_breadcrumbs">
     <div className="container">
    		<div className="w3l_agileits_breadcrumbs_inner">
    			<ul>
    				   <li><a href="/">Home</a><span>&#187;</span></li>
    				   <li>Login</li>
    			</ul>
    		</div>
  	</div>
  </div>

  <div className="login elite-app up-padding">
    <div className="container">
	       <div className="tittle-agileinfo">
				     <h3>Login Now</h3>
			   </div>
            <div className="row">
	               <div className="col-md-8 login-form-w3-agile form-bg-img">
			                <form action="" method="post">
				                    <div className="w3_form_body_grid form-chart">
					                         <span>Mobile No.</span><br/>
                          <input type="text" name="Contact" autocomplete="off" placeholder="Mobile No"/>

				                     </div>
                             <div className="submit-button">
                                 <div className="sim-button button12">
                                     <input type="submit" value="Next"/>
                                 </div>
                             </div>
			                 </form>
			                    <h4>Continue With</h4>
			                    <div className="social_icons agileinfo_social_asd">
				                      <a href="#" className="slide-social wthree_slide_social">
  					                           <div className="button">5 Likes</div>
  					                                <div className="facebook icon"> <i className="fa fa-facebook" aria-hidden="true"></i> </div>
  					                            <div className="facebook slide">
  						                                  <p>Facebook</p>
  					                            </div>
				                             </a>
			                      </div>
		                 </div>
		                 <div className="col-md-4 login-right-info form-bg-img">
			                    <h3 className="subhead-agileits">Why Join Elite Match</h3>
			                       <p className="para-agileits-w3layouts" >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
			                          <ul>
				                              <li><i className="fa fa-check" aria-hidden="true"></i>Lorem ipsum</li>
				                              <li><i className="fa fa-check" aria-hidden="true"></i>Vivamus lacus</li>
				                              <li><i className="fa fa-check" aria-hidden="true"></i>quisquam est</li>
				                              <li><i className="fa fa-check" aria-hidden="true"></i>Pellentesque</li>
			                           </ul>
			                           <h5>Don't have an account?<i className="fa fa-hand-o-down" aria-hidden="true"></i></h5>
			                           <div className="sim-button button12">
                                   <a>
                                     <button className="registation-button" onclick="redirectTo('http:/allsamaj/register')">Register</button>
                                   </a>
                                 </div>
		                   </div>
	                 </div>
            </div>
      </div>
<Footer />
      </div>
    )
  }
}

export default Login;
