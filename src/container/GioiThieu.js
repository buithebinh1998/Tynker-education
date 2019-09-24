import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
const GioiThieu = (props) => {
    return (
        <div>
          <Navbar active = "gioithieu"/>
          {/* END nav */}
          <div className="hero-wrap hero-wrap-2" style={{backgroundImage: 'url("images/bg_2.jpg")', backgroundAttachment: 'fixed'}}>
            <div className="overlay" />
            <div className="container">
              <div className="row no-gutters slider-text align-items-center justify-content-center" data-scrollax-parent="true">
                <div className="col-md-8 ftco-animate text-center">
                  <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Trang chủ</a></span> <span>Giới thiệu</span></p>
                  <h1 className="mb-3 bread">GIỚI THIỆU</h1>
                </div>
              </div>
            </div>
          </div>
          <section className="ftco-section">
            <div className="container">
              <div className="row d-flex">
                <div className="col-md-6 d-flex ftco-animate">
                  <div className="img img-about align-self-stretch" style={{backgroundImage: 'url(images/bg_3.jpg)', width: '100%'}} />
                </div>
                <div className="col-md-6 pl-md-5 ftco-animate">
                  <h2 className="mb-4">Welcome to Genius University Stablished Since 1898</h2>
                  <p>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.</p>
                  <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.</p>
                </div>
              </div>
            </div>
          </section>
          <section className="ftco-section-3 img" style={{backgroundImage: 'url(images/bg_3.jpg)'}}>
            <div className="overlay" />
            <div className="container">
              <div className="row d-md-flex justify-content-center">
                <div className="col-md-9 about-video text-center">
                  <h2 className="ftco-animate">Genius University is a Leading Schools Around the World</h2>
                  <div className="video d-flex justify-content-center">
                    <a href="https://vimeo.com/45830194" className="button popup-vimeo d-flex justify-content-center align-items-center"><span className="ion-ios-play" /></a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="ftco-counter bg-light" id="section-counter">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-10">
                  <div className="row">
                    <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                      <div className="block-18 text-center">
                        <div className="text">
                          <strong className="number" data-number={10300}>0</strong>
                          <span>Satisfied Students</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                      <div className="block-18 text-center">
                        <div className="text">
                          <strong className="number" data-number={7896}>0</strong>
                          <span>Courses Completed</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                      <div className="block-18 text-center">
                        <div className="text">
                          <strong className="number" data-number={400}>0</strong>
                          <span>Experts Advisors</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                      <div className="block-18 text-center">
                        <div className="text">
                          <strong className="number" data-number={200}>0</strong>
                          <span>Schools</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="ftco-section testimony-section">
            <div className="container">
              <div className="row justify-content-center mb-5 pb-3">
                <div className="col-md-7 heading-section ftco-animate text-center">
                  <h2 className="mb-4">What Our Student Says</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 ftco-animate">
                  <div className="carousel-testimony owl-carousel">
                    <div className="item">
                      <div className="testimony-wrap text-center">
                        <div className="user-img mb-5" style={{backgroundImage: 'url(images/person_1.jpg)'}}>
                          <span className="quote d-flex align-items-center justify-content-center">
                            <i className="icon-quote-left" />
                          </span>
                        </div>
                        <div className="text">
                          <p className="mb-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                          <p className="name">Dennis Green</p>
                          <span className="position">CSE Student</span>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="testimony-wrap text-center">
                        <div className="user-img mb-5" style={{backgroundImage: 'url(images/person_2.jpg)'}}>
                          <span className="quote d-flex align-items-center justify-content-center">
                            <i className="icon-quote-left" />
                          </span>
                        </div>
                        <div className="text">
                          <p className="mb-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                          <p className="name">Dennis Green</p>
                          <span className="position">Math Student</span>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="testimony-wrap text-center">
                        <div className="user-img mb-5" style={{backgroundImage: 'url(images/person_3.jpg)'}}>
                          <span className="quote d-flex align-items-center justify-content-center">
                            <i className="icon-quote-left" />
                          </span>
                        </div>
                        <div className="text">
                          <p className="mb-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                          <p className="name">Dennis Green</p>
                          <span className="position">Science Students</span>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="testimony-wrap text-center">
                        <div className="user-img mb-5" style={{backgroundImage: 'url(images/person_3.jpg)'}}>
                          <span className="quote d-flex align-items-center justify-content-center">
                            <i className="icon-quote-left" />
                          </span>
                        </div>
                        <div className="text">
                          <p className="mb-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                          <p className="name">Dennis Green</p>
                          <span className="position">English Student</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
export default GioiThieu 