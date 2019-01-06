import React from 'react';
import { Link } from 'react-router-dom';
// import '../Styles/styles.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

class Home extends React.Component {
  render() {
    return(
  <>
      <Header />
                    <div className="services" id="services">
              <div className="container" id="bg-img-intro">

                <div className="col-md-6 w3_agileits_services_grids">
                  <div className="w3_agileits_services_grid">
                    <div className="w3_agileits_services_grid_agile">
                      <div>
                                                          <h3>Rose Merry</h3>
                                                          <h4>The Bride</h4>
                                                          <p>it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and </p>
                                                  </div>
                    </div>
                  </div>
                  <div className="w3_agileits_services_grid">
                    <div className="w3_agileits_services_grid_agile">
                       <img src="/images/introduction-gentel-man-img.png" className="intro-img"/>
                    </div>
                  </div>

                  <div className="clearfix"> </div>
                </div>
                <div className="col-md-6 regstr-r-w3-agileits">
                                          <div className="w3_agileits_services_grid1">
                     <img src="/images/introduction-ladies-img.png" className="intro-img" />
                  </div>
                                       <div className="w3_agileits_services_grid">
                    <div>
                                                          <h3>Rose Merry</h3>
                                                          <h4>The Bride</h4>
                                                          <p>it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and </p>
                                                  </div>
                  </div>
                </div>
              </div>
              </div>

              <section className="the-heart-paper-effect-bg">
                  <div className="middle-section-agileits-w3layouts">
                      <div className="container">
                      		<h3 className="subheading-agileits-w3layouts"><span>Elite </span>Match</h3>
                      		<p className="para-w3layouts">Exclusive Matchmaking Service for the Elite</p>
                      		<div className="sim-button button12"><a>Contact Us</a></div>
                      </div>
                  </div>
                </section>

                <div className="elite-app" >
              			<div className="container">
              	                   <div className="app-inner agile-w3l">
              					     <div className="col-md-5 app-info">
              						     <h4>Elite Match Apps</h4>
              							 <p className="para-agileits-w3layouts">Nam arcu mauris, tincidunt sed convallis non, egestas ut lacus. Cras sapien urna, malesuada ut varius consequat, hendrerit nisl. Aliquam vestibulum, odio non ullamcorper malesuada.</p>
              							 <div className="app-devices">
              								<a href="#"><img src="/images/app.png" alt=""/></a>
              								<a href="#"><img src="/images/app1.png" alt=""/></a>
              								<div className="clearfix"> </div>
              							</div>
              							<p className="para-agileits-w3layouts"><a href="#">Click here </a>to know more about apps.</p>
              						 </div>
              						 <div className="col-md-7 app-img">
              						    <img src="/images/screens1.png" alt=" " class="img-responsive"/>
              						 </div>
              						 <div className="clearfix"></div>
              					   </div>
              			</div>
		             </div>

                 <div className="test the-heart-paper-effect-bg" id="clients">
                      <div className="container">
                      <div className="tittle-agileinfo">
                      <h3 className="white-w3ls">Happy Couples</h3>
                      </div>
                      <div className="test-gri1">
                      <div id="owl-demo2" className="owl-carousel">
                      <div className="test-grid1">
                      <img src="/images/t1.jpg" alt="" class="img-r"/>
                      <h4>Abelard & Heloise</h4>
                      <span>Couple 1</span>
                      <p>Lorem ipsum dolor sit amet, Ut enim ad minim veniam, quis.Lorem ipsum dolor .</p>
                      </div>
                      <div className="agile">
                      <div className="test-grid1">
                      <img src="/images/t2.jpg" alt="" class="img-r"/>
                      <h4>Bonnie & Clyde</h4>
                      <span>Couple 2</span>
                      <p>Lorem ipsum dolor sit amet, Ut enim ad minim veniam, quis.Lorem ipsum dolor .</p>
                      </div>
                      </div>
                      <div className="agile">
                      <div className="test-grid1">
                      <img src="/images/t3.jpg" alt="" class="img-r"/>
                      <h4>Jack & Sally</h4>
                      <span>Couple 3</span>
                      <p>Lorem ipsum dolor sit amet, Ut enim ad minim veniam, quis.Lorem ipsum dolor .</p>
                      </div>
                      </div>
                      </div>
                      </div>
                      </div>
                  </div>

                <div className="gallery" id="gallery">
                		<div className="tittle-agileinfo">
                			<h3>Together by Elite Match</h3>
                		</div>
                			<ul id="flexiselDemo1">
                			<li>
                				<div className="wthree_gallery_grid">
                					<a href="shadi_four.jpg" className="lsb-preview" data-lsb-group="header">
                						<div className="view second-effect">
                							<img src="/images/shadi_four.jpg" alt="" className="img-responsive" />
                							<div className="mask">
                								<p>Bonnie <i className="fa fa-heart-o" aria-hidden="true"></i> Clyde</p>
                							</div>
                						</div>
                					</a>
                				</div>
                			</li>
                			<li>
                				<div className="wthree_gallery_grid">
                					<a href="shadi1.jpg" className="lsb-preview" data-lsb-group="header">
                						<div className="view second-effect">
                							<img src="/images/shadi1.jpg" alt="" className="img-responsive" />
                							<div className="mask">
                								<p>Abelard <i className="fa fa-heart-o" aria-hidden="true"></i> Heloise</p>
                							</div>
                						</div>
                					</a>
                				</div>
                			</li>
                			<li>
                				<div className="wthree_gallery_grid">
                					<a href="shadi_two.jpg" className="lsb-preview" data-lsb-group="header">
                						<div className="view second-effect">
                							<img src="/images/shadi_two.jpg" alt="" className="img-responsive" />
                							<div className="mask">
                								<p>Henry <i className="fa fa-heart-o" aria-hidden="true"></i> Clare</p>
                							</div>
                						</div>
                					</a>
                				</div>
                			</li>
                			<li>
                				<div className="wthree_gallery_grid">
                					<a href="/images/shadi.jpg" className="lsb-preview" data-lsb-group="header">
                						<div className="view second-effect">
                							<img src="/images/shadi.jpg" alt="" className="img-responsive" />
                							<div className="mask">
                								<p>Jack <i className="fa fa-heart-o" aria-hidden="true"></i> Sally</p>
                							</div>
                						</div>
                					</a>
                				</div>
                			</li>
                			<li>
                				<div className="wthree_gallery_grid">
                					<a href="/images/shadi_three.jpg" className="lsb-preview" data-lsb-group="header">
                						<div className="view second-effect">
                							<img src="/images/shadi_three.jpg" alt="" className="img-responsive" />
                							<div className="mask">
                								<p>Henry <i className="fa fa-heart-o" aria-hidden="true"></i> Clare</p>
                							</div>
                						</div>
                					</a>
                				</div>
                			</li>
                		</ul>
                	</div>
      <Footer />
  </>
    )
  }
}

export default Home;
