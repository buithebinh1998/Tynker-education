import React from 'react'
import Navbar from '../component/Navbar'
const LienHe = (props) =>{
    return (
        <div>
        <Navbar active = "lienhe"/>
          {/* END nav */}
          <div className="hero-wrap hero-wrap-2" style={{backgroundImage: 'url("images/bg_2.jpg")', backgroundAttachment: 'fixed'}}>
            <div className="overlay" />
            <div className="container">
              <div className="row no-gutters slider-text align-items-center justify-content-center" data-scrollax-parent="true">
                <div className="col-md-8 ftco-animate text-center">
                  <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Trang chủ</a></span> <span>Liên hệ</span></p>
                  <h1 className="mb-3 bread">LIÊN HỆ</h1>
                </div>
              </div>
            </div>
          </div>
          <section className="ftco-section contact-section ftco-degree-bg">
            <div className="container">
              <div className="row d-flex mb-5 contact-info">
                <div className="col-md-12 mb-4">
                  <h2 className="h4">Contact Information</h2>
                </div>
                <div className="w-100" />
                <div className="col-md-3">
                  <p><span>Address:</span> 198 West 21th Street, Suite 721 New York NY 10016</p>
                </div>
                <div className="col-md-3">
                  <p><span>Phone:</span> <a href="tel://1234567920">+ 1235 2355 98</a></p>
                </div>
                <div className="col-md-3">
                  <p><span>Email:</span> <a href="mailto:info@yoursite.com">info@yoursite.com</a></p>
                </div>
                <div className="col-md-3">
                  <p><span>Website</span> <a href="#">yoursite.com</a></p>
                </div>
              </div>
              <div className="row block-9">
                <div className="col-md-6 pr-md-5">
                  <h4 className="mb-4">Do you have any questions?</h4>
                  <form action="#">
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Your Name" />
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Your Email" />
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Subject" />
                    </div>
                    <div className="form-group">
                      <textarea name id cols={30} rows={7} className="form-control" placeholder="Message" defaultValue={""} />
                    </div>
                    <div className="form-group">
                      <input type="submit" defaultValue="Send Message" className="btn btn-primary py-3 px-5" />
                    </div>
                  </form>
                </div>
                <div className="col-md-6" id="map" />
              </div>
            </div>
          </section>
          <section className="ftco-section-parallax">
            <div className="parallax-img d-flex align-items-center">
              <div className="container">
                <div className="row d-flex justify-content-center">
                  <div className="col-md-7 text-center heading-section heading-section-white ftco-animate">
                    <h2>Subcribe to our Newsletter</h2>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>
                    <div className="row d-flex justify-content-center mt-5">
                      <div className="col-md-8">
                        <form action="#" className="subscribe-form">
                          <div className="form-group d-flex">
                            <input type="text" className="form-control" placeholder="Enter email address" />
                            <input type="submit" defaultValue="Subscribe" className="submit px-3" />
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <footer className="ftco-footer ftco-bg-dark ftco-section img" style={{backgroundImage: 'url(images/bg_2.jpg)', backgroundAttachment: 'fixed'}}>
            <div className="overlay" />
            <div className="container">
              <div className="row mb-5">
                <div className="col-md-3">
                  <div className="ftco-footer-widget mb-4">
                    <h2><a className="navbar-brand" href="index.html"><i className="flaticon-university" />Genius <br /><small>University</small></a></h2>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                      <li className="ftco-animate"><a href="#"><span className="icon-twitter" /></a></li>
                      <li className="ftco-animate"><a href="#"><span className="icon-facebook" /></a></li>
                      <li className="ftco-animate"><a href="#"><span className="icon-instagram" /></a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="ftco-footer-widget mb-4">
                    <h2 className="ftco-heading-2">Recent Blog</h2>
                    <div className="block-21 mb-4 d-flex">
                      <a className="blog-img mr-4" style={{backgroundImage: 'url(images/image_1.jpg)'}} />
                      <div className="text">
                        <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about</a></h3>
                        <div className="meta">
                          <div><a href="#"><span className="icon-calendar" /> July 12, 2018</a></div>
                          <div><a href="#"><span className="icon-person" /> Admin</a></div>
                          <div><a href="#"><span className="icon-chat" /> 19</a></div>
                        </div>
                      </div>
                    </div>
                    <div className="block-21 mb-4 d-flex">
                      <a className="blog-img mr-4" style={{backgroundImage: 'url(images/image_2.jpg)'}} />
                      <div className="text">
                        <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about</a></h3>
                        <div className="meta">
                          <div><a href="#"><span className="icon-calendar" /> July 12, 2018</a></div>
                          <div><a href="#"><span className="icon-person" /> Admin</a></div>
                          <div><a href="#"><span className="icon-chat" /> 19</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="ftco-footer-widget mb-4 ml-md-4">
                    <h2 className="ftco-heading-2">Site Links</h2>
                    <ul className="list-unstyled">
                      <li><a href="#" className="py-2 d-block">Home</a></li>
                      <li><a href="#" className="py-2 d-block">About</a></li>
                      <li><a href="#" className="py-2 d-block">Courses</a></li>
                      <li><a href="#" className="py-2 d-block">Students</a></li>
                      <li><a href="#" className="py-2 d-block">Video</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="ftco-footer-widget mb-4">
                    <h2 className="ftco-heading-2">Have a Questions?</h2>
                    <div className="block-23 mb-3">
                      <ul>
                        <li><span className="icon icon-map-marker" /><span className="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
                        <li><a href="#"><span className="icon icon-phone" /><span className="text">+2 392 3929 210</span></a></li>
                        <li><a href="#"><span className="icon icon-envelope" /><span className="text">info@yourdomain.com</span></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 text-center">
                  <p>{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                    Copyright © All rights reserved | This template is made with <i className="icon-heart" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      );
}

export default LienHe