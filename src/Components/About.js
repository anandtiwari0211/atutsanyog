import React from 'react';
import '../Styles/styles.css';
import InnerHeader from '../Components/Inner_header';
import Footer from '../Components/Footer';

class About extends React.Component {
  render() {
    return(
      <div>
      <InnerHeader />
      <div className="w3l_agileits_breadcrumbs">
   <div className="container">
		<div className="w3l_agileits_breadcrumbs_inner">
			<ul>
			  <li><a href="/">Home</a><span>&#187;</span></li>
				<li>About</li>
				</ul>
		</div>
	</div>

</div>
<div className="about-w3layouts" id="about">
	<div className="tittle-agileinfo">
				<h3>About Us</h3>
        <div className="container">
        <div className="about-text">
									<h2>The day we Met</h2>
									<h4>01.02.2014</h4>
									<p>Are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat</p>
                                    </div>
                                    </div>
			</div>
	<div className="about-left-agileits">
		<div className="button">
			<a href="#small-dialog" className="play-icon popup-with-zoom-anim"><span className="glyphicon glyphicon-play-circle" aria-hidden="true"></span></a>
		</div>
		<div id="small-dialog" className="mfp-hide w3ls_small_dialog wthree_pop">
			<div className="agileits_modal_body">
				<iframe src="https://player.vimeo.com/video/198296034"></iframe>
			</div>
		</div>
	</div>
	<div className="about-right">
		<h3 className="subheading-agileits-w3layouts"><span>Elite Find Success Stories</span></h3>
		<p className="para-agileits-w3layouts">Duis sit amet nisi quis leo fermentum vestibulum vitae eget augue. Nulla quam nunc, vulputate id urna at, tempor tincidunt metus. Sed feugiat quam nec mauris mattis malesuada.</p>
		<div className="sim-button button12"><a href="matches">View Profiles</a></div>
	</div>
	<div className="clearfix"> </div>
</div>
<section className="w3ls-team text-center">
				<div className="container">
					<div className="tittle-agileinfo">
						<h3>Meet our team</h3>
					</div>
					<div className="team-row">


						<div className="col-md-3 w3ls-team-grids">
							<h5>Anand Tiwari</h5>
							<p>Lorem ipsum dolor sit amet, consectetur adipi est eligendi scing elit consectetur.</p>
							<div className="agileits-social">
								<ul>
									<li><a href="#"><i className="fa fa-facebook"></i></a></li>
									<li><a href="#"><i className="fa fa-twitter"></i></a></li>
									<li><a href="#"><i className="fa fa-rss"></i></a></li>
								</ul>
							</div>
							<div className="team-img">
                                                            <div className="mask-on-pic">
                                                            <figure className="mask-div">
                                                              <img src="/images/team1.jpg" alt="The Heart Memoragble Days Couple Image" title="The Heart Memoragble Days Couple Image"/>
                                                            </figure>
						           </div>

							</div>
						</div>
						<div className="col-md-3 w3ls-team-grids team-mdl">
							<h5>Namita Sharma</h5>
							<p>Lorem ipsum dolor sit amet, consectetur adipi est eligendi scing elit consectetur.</p>
							<div className="agileits-social">
								<ul>
									<li><a href="#"><i className="fa fa-facebook"></i></a></li>
									<li><a href="#"><i className="fa fa-twitter"></i></a></li>
									<li><a href="#"><i className="fa fa-rss"></i></a></li>
								</ul>
							</div>
							<div className="team-img">
							<div className="mask-on-pic">
                                                            <figure className="mask-div">
                                                              <img src="/images/team2.jpg" alt="The Heart Memoragble Days Couple Image" title="The Heart Memoragble Days Couple Image"/>
                                                            </figure>
						        </div>

							</div>
						</div>
						<div className="col-md-3 w3ls-team-grids team-mdl1">
							<h5>Megha Naik</h5>
							<p>Lorem ipsum dolor sit amet, consectetur adipi est eligendi scing elit consectetur.</p>
							<div className="agileits-social">
								<ul>
									<li><a href="#"><i className="fa fa-facebook"></i></a></li>
									<li><a href="#"><i className="fa fa-twitter"></i></a></li>
									<li><a href="#"><i className="fa fa-rss"></i></a></li>
								</ul>
							</div>
							<div className="team-img">
                                                            <div className="mask-on-pic">
                                                            <figure className="mask-div">
                                                              <img src="/images/team4.jpg" alt="The Heart Memoragble Days Couple Image" title="The Heart Memoragble Days Couple Image"/>
                                                            </figure>
						           </div>


							</div>
						</div>
						<div className="col-md-3 w3ls-team-grids">
							<h5>Purva Naik</h5>
							<p>Lorem ipsum dolor sit amet, consectetur adipi est eligendi scing elit consectetur.</p>
							<div className="agileits-social">
								<ul>
									<li><a href="#"><i className="fa fa-facebook"></i></a></li>
									<li><a href="#"><i className="fa fa-twitter"></i></a></li>
									<li><a href="#"><i className="fa fa-rss"></i></a></li>
								</ul>
							</div>
							<div className="team-img">
                                                             <div className="mask-on-pic">
                                                            <figure className="mask-div">
                                                              <img src="/images/intropicg2.jpg" alt="The Heart Memoragble Days Couple Image" title="The Heart Memoragble Days Couple Image"/>
                                                            </figure>
						           </div>



							</div>
						</div>
						<div className="clearfix"> </div>
					</div>
				</div>

				</section>
          <Footer/>
      </div>

    )
  }
}

export default About;
