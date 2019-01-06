import React from 'react';
import '../Styles/styles.css';
import InnerHeader from '../Components/Inner_header';
import Footer from '../Components/Footer';

class Registration extends React.Component {
  render() {
    return(
      <div>
      <InnerHeader />
      <div className="w3l_agileits_breadcrumbs">
    <div className="container">
        <div className="w3l_agileits_breadcrumbs_inner">
            <ul>
                <li><a href="/">Home</a><span>&#187;</span></li>
                <li>Register</li>
            </ul>
        </div>
    </div>
</div>

<div className="login elite-app">
    <div className="container">
        <div className="tittle-agileinfo">
            <h3>Register Now</h3>
        </div>
        <div className="row">
            <div className="col-md-12 login-form-w3-agile regi-form-bg-img">
                <form action="#" method="post" enctype="multipart/form-data">
                    <div className="col-md-6">
                        <div className="">
                            <div className="w3_form_body_grid full-regi-form">
                                <span>Full Name</span>
                                <input type="text" name="Name" placeholder="Full Name" autocomplete="off"/>

                            </div>

                            <div className="w3_form_body_grid  full-regi-form">
                                <span>Date Of Birth</span>
                                <input className="date" id="datepicker" name="dob" type="text" placeholder="mm/dd/yyyy" autocomplete="off"/>

                            </div>

                            <div className="w3_form_body_grid full-regi-form">
                                <span>Caste</span>
                                <select id="w3_country1" className="frm-field" name="Cast">
                                    <option value="">SELECT CASTE</option>
                                </select>
                            </div>

                            <div className="w3_form_body_grid full-regi-form">
                                <span>Job Profession</span>
                                <input type="text" name="Current_work" placeholder="Job Profession" autocomplete="off"/>

                            </div>

                            <div className="w3_form_body_grid  full-regi-form">
                                <span>Current Salary/Month</span>
                                <input type="text" name="Salary"  placeholder="Monthly Salary" autocomplete="off"/>

                            </div>

                            <div className="w3_form_body_grid  full-regi-form">
                                <span>GENDER</span>
                                <input type="radio" name="Gender" value="1" checked="checked"/>Male
                                <input type="radio" name="Gender" value="2"/>Female
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                          <div className="w3_form_body_grid full-regi-form">
                              <span>Email Id</span>
                              <input type="text" name="Email" placeholder="Email ID" autocomplete="off"/>

                          </div>

                          <div className="w3_form_body_grid full-regi-form">
                                <span>Father Name</span>
                                <input type="text" name="Father_name" placeholder="Father Name" autocomplete="off"/>

                          </div>

                          <div className="w3_form_body_grid full-regi-form">
                                <span>Education</span>
                                <select id="w3_country" className="frm-field required" name="Education">
                                    <option value="">Select Education</option>

                                </select>

                          </div>

                          <div className="w3_form_body_grid  full-regi-form w3_form_body_grid1">
                                <span>Contact No.</span>
                                <input type="text" name="Contact" placeholder="Contact No" autocomplete="off"/>

                          </div>

                          <div className="w3_form_body_grid  full-regi-form w3_form_body_grid1">
                                <span>Permanent Address</span>
                                <textarea rows="3" cols="53" name="Address" placeholder="Address" autocomplete="off">
                                </textarea>

                          </div>

                          <div className="w3_form_body_grid  full-regi-form w3_form_body_grid1">
                                <span>Add Image</span>
                                <input type="file" name="userfile" className="choose file"/>

                          </div>
                      </div>
                      <div className="sim-button-reg button12">
                          <input type="submit" value="Sign Up" className="sinup"/>
                      </div>
                </form>
        </div>
        </div>
    </div>
</div>
<Footer />
      </div>
    )
  }
}

export default Registration;
