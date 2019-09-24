import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
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
          <Footer/>
        </div>
      );
}

export default LienHe