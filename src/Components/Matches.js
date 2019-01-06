import React from 'react';
import InnerHeader from '../Components/Inner_header';

class Matches extends React.Component {
  render() {
    return(
      <div>
      <div className="w3l_agileits_breadcrumbs">
  <div className="container">
      <div className="w3l_agileits_breadcrumbs_inner">
          <ul>
              <li><a href="/">Home</a><span>&#187;</span></li>
              <li>Matches</li>
          </ul>
      </div>
  </div>
</div>
<div className="matches elite-app footer-bottom-padding">
    <div className="container">
        <div className="tittle-agileinfo">
            <h3>Matches</h3>
        </div>
        <div className="row">
            <div className="col-md-8">

                <div className="col-md-12 matches-main-agileinfo">
                    <div className="col-md-6">
                        <div className="mask-on-pic-profile">
                            <div className="mask-div">
                              <img src="<?php echo IMGUPLOAD; ?><?php echo $loged_users->image; ?>" width="250" height="300" alt="image.png" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 person-info-agileits-w3layouts">
                        <ul>
                            <li><span>Name</span>:</li>
                            <li><span>DOB</span>:</li>
                            <li><span>Profession</span>:</li>

                            <li><span>Gotra </span>: </li>
                            <li><span>Address</span>:</li>
                            <li>
                            <div className="profile-button">
                                <a className="sim-button-profile button12" href="<?php echo SITEBASEURL; ?>profile_details/<?php echo $loged_users->id; ?>">More Details</a>
                                <a className="sim-button-profile button12" href="<?php echo SITEBASEURL; ?>shortlisted/<?php echo $loged_users->id; ?>">Short List</a>
                            </div>
                            </li>
                        </ul>
                    </div>
                    <div className="clearfix"> </div>
                </div>


            </div>
             <div className="col-md-4 right-saide-detail ">
                  <div className="mask-on-pic-profile">
                      <div className="mask-div">

                         <img src="<?php echo IMGUPLOAD; ?><?php echo $user_single->image; ?>" width="250" height="250" alt="image.png" />
                      </div>
                  </div>
                 <div className="tittle-agilein foprofile">
                     <a href="update" className="upload-pic">
                         <button> <img src="<?php echo IMGUPLOAD; ?><?php echo $user_single->image; ?>" alt="image.png" width="20px" height="20px" />

                         </button>
                     </a>
                     <a href="user_update_first"><button>Profile 1st Part Update</button></a>
                     <a href="user_update_second"><button>Profile 2nd Part Update</button></a>
                     <div className="full-filter">
                         <h1 className="filter_profile">Filter</h1>
                     <div className="filter_profile">
                         <span>Filter by D.O.B</span><input type="text"/> To <input type="text"/>
                     </div>
             <div className="filter_profile1 filter_profile">
            Filter by Job Sector: <select>
                <option>Select</option>
                </select>
               </div>
            <button className="filter_profile sim-button-profile button12">Show all Manglik</button>
            <a href="update"><button className="filter_profile sim-button-profile button12">Shotlisted List</button></a>
        </div>
                 </div>
            </div>
        </div>
</div>
  </div>
</div>
    )
  }
}

export default Matches;
