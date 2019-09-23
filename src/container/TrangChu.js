import React from 'react'
import Navbar from '../component/Navbar'
const TrangChu = props => {
  return(
    <div>
      <Navbar />
  {/* END nav */}
  <div className="hero-wrap" style={{backgroundImage: 'url("images/bg_1.jpg")', backgroundAttachment: 'fixed'}}>
    <div className="overlay" />
    <div className="container">
      <div className="row no-gutters slider-text align-items-center justify-content-center" data-scrollax-parent="true">
        <div className="col-md-8 ftco-animate text-center">
          <h1 className="mb-4">No Nation Can Prosper In Life Without Education</h1>
          <p><a href="/" className="btn btn-primary px-4 py-3">Apply Now</a> <a href="/" className="btn btn-secondary px-4 py-3">View Courses</a></p>
        </div>
      </div>
    </div>
  </div>
  <section className="ftco-search-course">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="courseSearch-wrap d-md-flex flex-column-reverse">
            <div className="full-wrap d-flex ftco-animate">
              <div className="one-third order-last p-5">
                <span>Know what you're after?</span>
                <h3>I want to study</h3>
                <form action="#" className="course-search-form">
                  <div className="form-group d-flex">
                    <input type="text" className="form-control" placeholder="Type a course you want to study" />
                    <input type="submit" defaultValue="Search" className="submit" />
                  </div>
                </form>
                <p>Just Browsing? <a href="/"> See all courses</a></p>
              </div>
              <div className="one-forth order-first img" style={{backgroundImage: 'url(images/image_1.jpg)'}} />
            </div>
            <div className="full-wrap ftco-animate">
              <div className="one-half">
                <div className="featured-blog d-md-flex">
                  <div className="image d-flex order-last">
                    <a href="/" className="img" style={{background: 'url(images/image_2.jpg)'}} />
                  </div>
                  <div className="text order-first">
                    <span className="date">Aug 20, 2018</span>
                    <h3><a href="/">We Conduct Workshop 2018</a></h3>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-section">
    <div className="container">
      <div className="row">
        <div className="col-md-4 d-flex align-self-stretch ftco-animate">
          <div className="media block-6 services p-3 py-4 d-block text-center">
            <div className="icon d-flex justify-content-center align-items-center mb-3"><span className="flaticon-exam" /></div>
            <div className="media-body px-3">
              <h3 className="heading">Admission</h3>
              <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
            </div>
          </div>      
        </div>
        <div className="col-md-4 d-flex align-self-stretch ftco-animate">
          <div className="media block-6 services p-3 py-4 d-block text-center">
            <div className="icon d-flex justify-content-center align-items-center mb-3"><span className="flaticon-blackboard" /></div>
            <div className="media-body px-3">
              <h3 className="heading">Notice Board</h3>
              <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
            </div>
          </div>      
        </div>
        <div className="col-md-4 d-flex align-self-stretch ftco-animate">
          <div className="media block-6 services p-3 py-4 d-block text-center">
            <div className="icon d-flex justify-content-center align-items-center mb-3"><span className="flaticon-books" /></div>
            <div className="media-body px-3">
              <h3 className="heading">Our Library</h3>
              <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
            </div>
          </div>    
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
  <section className="ftco-section bg-light">
    <div className="container">
      <div className="row justify-content-center mb-5 pb-3">
        <div className="col-md-7 heading-section ftco-animate text-center">
          <h2 className="mb-4">Our Experience Advisor</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 mb-sm-4 ftco-animate">
          <div className="staff">
            <div className="d-flex mb-4">
              <div className="img" style={{backgroundImage: 'url(images/person_1.jpg)'}} />
              <div className="info ml-4">
                <h3><a href="teacher-single.html">Ivan Jacobson</a></h3>
                <span className="position">CSE Teacher</span>
                <p className="ftco-social d-flex">
                  <a href="/" className="d-flex justify-content-center align-items-center"><span className="icon-twitter" /></a>
                  <a href="/" className="d-flex justify-content-center align-items-center"><span className="icon-facebook" /></a>
                  <a href="/" className="d-flex justify-content-center align-items-center"><span className="icon-instagram" /></a>
                </p>
              </div>
            </div>
            <div className="text">
              <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 mb-sm-4 ftco-animate">
          <div className="staff">
            <div className="d-flex mb-4">
              <div className="img" style={{backgroundImage: 'url(images/person_2.jpg)'}} />
              <div className="info ml-4">
                <h3><a href="teacher-single.html">Ivan Jacobson</a></h3>
                <span className="position">CSE Teacher</span>
                <p className="ftco-social d-flex">
                  <a href="/" className="d-flex justify-content-center align-items-center"><span className="icon-twitter" /></a>
                  <a href="/" className="d-flex justify-content-center align-items-center"><span className="icon-facebook" /></a>
                  <a href="/" className="d-flex justify-content-center align-items-center"><span className="icon-instagram" /></a>
                </p>
              </div>
            </div>
            <div className="text">
              <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 mb-sm-4 ftco-animate">
          <div className="staff">
            <div className="d-flex mb-4">
              <div className="img" style={{backgroundImage: 'url(images/person_3.jpg)'}} />
              <div className="info ml-4">
                <h3><a href="teacher-single.html">Ivan Jacobson</a></h3>
                <span className="position">CSE Teacher</span>
                <p className="ftco-social d-flex">
                  <a href="/" className="d-flex justify-content-center align-items-center"><span className="icon-twitter" /></a>
                  <a href="/" className="d-flex justify-content-center align-items-center"><span className="icon-facebook" /></a>
                  <a href="/" className="d-flex justify-content-center align-items-center"><span className="icon-instagram" /></a>
                </p>
              </div>
            </div>
            <div className="text">
              <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-freeTrial">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="d-flex align-items-center">
            <div className="free-trial ftco-animate">
              <h3>Try our free trial course</h3>
              <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life</p>
            </div>
            <div className="btn-join ftco-animate">
              <p><a href="/" className="btn btn-primary py-3 px-4">Join now!</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-section">
    <div className="container">
      <div className="row justify-content-center mb-5 pb-3">
        <div className="col-md-7 heading-section ftco-animate text-center">
          <h2 className="mb-4">Our Courses</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 d-flex ftco-animate">
          <div className="course align-self-stretch">
            <a href="/" className="img bg1"  />
            <div className="text p-4">
              <p className="category"><span>English</span></p>
              <h3 className="mb-3"><a href="/">English for Tommorow</a></h3>
              <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name</p>
              <p><a href="/" className="btn btn-primary">Enroll now!</a></p>
            </div>
          </div>
        </div>
        <div className="col-md-4 d-flex ftco-animate">
          <div className="course align-self-stretch">
            <a href="/" className="img bg2"  />
            <div className="text p-4">
              <p className="category"><span>Science</span></p>
              <h3 className="mb-3"><a href="/">Computer Engineering</a></h3>
              <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name</p>
              <p><a href="/" className="btn btn-primary">Enroll now!</a></p>
            </div>
          </div>
        </div>
        <div className="col-md-4 d-flex ftco-animate">
          <div className="course align-self-stretch">
            <a href="/" className="img" style={{backgroundImage: 'url(images/course-3.jpg)'}} />
            <div className="text p-4">
              <p className="category"><span>Business</span></p>
              <h3 className="mb-3"><a href="/">Business Studies</a></h3>
              <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name</p>
              <p><a href="/" className="btn btn-primary">Enroll now!</a></p>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-10 ftco-animate">
          <p><strong>When she reached</strong> the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p>
          <p><span>Just Browsing?</span><a href="course.html"> View All Courses</a></p>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-section bg-light">
    <div className="container">
      <div className="row justify-content-center mb-5 pb-3">
        <div className="col-md-7 heading-section ftco-animate text-center">
          <h2 className="mb-4">Recent from blog</h2>
        </div>
      </div>
      <div className="row d-flex">
        <div className="col-md-4 d-flex ftco-animate">
          <div className="blog-entry align-self-stretch">
            <a href="blog-single.html" className="block-20" style={{backgroundImage: 'url("images/image_1.jpg")'}}>
            </a>
            <div className="text p-4 d-block">
              <div className="meta mb-3">
                <div><a href="/">August 12, 2018</a></div>
                <div><a href="/">Admin</a></div>
                <div><a href="/" className="meta-chat"><span className="icon-chat" /> 3</a></div>
              </div>
              <h3 className="heading mt-3"><a href="/">How to standout at start of your UX Career</a></h3>
              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 d-flex ftco-animate">
          <div className="blog-entry align-self-stretch">
            <a href="blog-single.html" className="block-20" style={{backgroundImage: 'url("images/image_2.jpg")'}}>
            </a>
            <div className="text p-4 d-block">
              <div className="meta mb-3">
                <div><a href="/">August 12, 2018</a></div>
                <div><a href="/">Admin</a></div>
                <div><a href="/" className="meta-chat"><span className="icon-chat" /> 3</a></div>
              </div>
              <h3 className="heading mt-3"><a href="/">How to standout at start of your UX Career</a></h3>
              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 d-flex ftco-animate">
          <div className="blog-entry align-self-stretch">
            <a href="blog-single.html" className="block-20" style={{backgroundImage: 'url("images/image_3.jpg")'}}>
            </a>
            <div className="text p-4 d-block">
              <div className="meta mb-3">
                <div><a href="/">August 12, 2018</a></div>
                <div><a href="/">Admin</a></div>
                <div><a href="/" className="meta-chat"><span className="icon-chat" /> 3</a></div>
              </div>
              <h3 className="heading mt-3"><a href="/">How to standout at start of your UX Career</a></h3>
              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-section">
    <div className="container">
      <div className="row justify-content-center mb-5 pb-3">
        <div className="col-md-7 heading-section ftco-animate text-center">
          <h2 className="mb-4">Our Latest Events</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 d-flex ftco-animate">
          <div className="blog-entry align-self-stretch">
            <a href="blog-single.html" className="block-20" style={{backgroundImage: 'url("images/event-1.jpg")'}}>
            </a>
            <div className="text p-4 d-block">
              <div className="meta mb-3">
                <div><a href="/">Sep. 10, 2018</a></div>
                <div><a href="/">Admin</a></div>
                <div><a href="/" className="meta-chat"><span className="icon-chat" /> 3</a></div>
              </div>
              <h3 className="heading mb-4"><a href="/">Intern Bootcamp Meetup 2018</a></h3>
              <p className="time-loc"><span className="mr-2"><i className="icon-clock-o" /> 10:30AM-03:30PM</span> <span><i className="icon-map-o" /> Venue Main Campus</span></p>
              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              <p><a href="event.html">Join Event <i className="ion-ios-arrow-forward" /></a></p>
            </div>
          </div>
        </div>
        <div className="col-md-4 d-flex ftco-animate">
          <div className="blog-entry d-flex align-self-stretch flex-column-reverse">
            <a href="blog-single.html" className="block-20" style={{backgroundImage: 'url("images/event-2.jpg")'}}>
            </a>
            <div className="text p-4 d-block">
              <div className="meta mb-3">
                <div><a href="/">Sep. 10, 2018</a></div>
                <div><a href="/">Admin</a></div>
                <div><a href="/" className="meta-chat"><span className="icon-chat" /> 3</a></div>
              </div>
              <h3 className="heading mb-4"><a href="/">Intern Bootcamp Meetup 2018</a></h3>
              <p className="time-loc"><span className="mr-2"><i className="icon-clock-o" /> 10:30AM-03:30PM</span> <span><i className="icon-map-o" /> Venue Main Campus</span></p>
              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              <p><a href="event.html">Join Event <i className="ion-ios-arrow-forward" /></a></p>
            </div>
          </div>
        </div>
        <div className="col-md-4 d-flex ftco-animate">
          <div className="blog-entry align-self-stretch">
            <a href="blog-single.html" className="block-20" style={{backgroundImage: 'url("images/event-3.jpg")'}}>
            </a>
            <div className="text p-4 d-block">
              <div className="meta mb-3">
                <div><a href="/">Sep. 10, 2018</a></div>
                <div><a href="/">Admin</a></div>
                <div><a href="/" className="meta-chat"><span className="icon-chat" /> 3</a></div>
              </div>
              <h3 className="heading mb-4"><a href="/">Intern Bootcamp Meetup 2018</a></h3>
              <p className="time-loc"><span className="mr-2"><i className="icon-clock-o" /> 10:30AM-03:30PM</span> <span><i className="icon-map-o" /> Venue Main Campus</span></p>
              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              <p><a href="event.html">Join Event <i className="ion-ios-arrow-forward" /></a></p>
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
  <footer className="ftco-footer ftco-bg-dark ftco-section img" style={{backgroundImage: 'url(images/bg_2.jpg)', backgroundAttachment: 'fixed'}}>
    <div className="overlay" />
    <div className="container">
      <div className="row mb-5">
        <div className="col-md-3">
          <div className="ftco-footer-widget mb-4">
            <h2><a className="navbar-brand" href="index.html"><i className="flaticon-university" />Genius <br /><small>University</small></a></h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
              <li className="ftco-animate"><a href="/"><span className="icon-twitter" /></a></li>
              <li className="ftco-animate"><a href="/"><span className="icon-facebook" /></a></li>
              <li className="ftco-animate"><a href="/"><span className="icon-instagram" /></a></li>
            </ul>
          </div>
        </div>
        <div className="col-md-4">
          <div className="ftco-footer-widget mb-4">
            <h2 className="ftco-heading-2">Recent Blog</h2>
            <div className="block-21 mb-4 d-flex">
              <a className="blog-img mr-4" style={{backgroundImage: 'url(images/image_1.jpg)'}} />
              <div className="text">
                <h3 className="heading"><a href="/">Even the all-powerful Pointing has no control about</a></h3>
                <div className="meta">
                  <div><a href="/"><span className="icon-calendar" /> July 12, 2018</a></div>
                  <div><a href="/"><span className="icon-person" /> Admin</a></div>
                  <div><a href="/"><span className="icon-chat" /> 19</a></div>
                </div>
              </div>
            </div>
            <div className="block-21 mb-4 d-flex">
              <a className="blog-img mr-4" style={{backgroundImage: 'url(images/image_2.jpg)'}} />
              <div className="text">
                <h3 className="heading"><a href="/">Even the all-powerful Pointing has no control about</a></h3>
                <div className="meta">
                  <div><a href="/"><span className="icon-calendar" /> July 12, 2018</a></div>
                  <div><a href="/"><span className="icon-person" /> Admin</a></div>
                  <div><a href="/"><span className="icon-chat" /> 19</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="ftco-footer-widget mb-4 ml-md-4">
            <h2 className="ftco-heading-2">Site Links</h2>
            <ul className="list-unstyled">
              <li><a href="/" className="py-2 d-block">Home</a></li>
              <li><a href="/" className="py-2 d-block">About</a></li>
              <li><a href="/" className="py-2 d-block">Courses</a></li>
              <li><a href="/" className="py-2 d-block">Students</a></li>
              <li><a href="/" className="py-2 d-block">Video</a></li>
            </ul>
          </div>
        </div>
        <div className="col-md-3">
          <div className="ftco-footer-widget mb-4">
            <h2 className="ftco-heading-2">Have a Questions?</h2>
            <div className="block-23 mb-3">
              <ul>
                <li><span className="icon icon-map-marker" /><span className="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
                <li><a href="/"><span className="icon icon-phone" /><span className="text">+2 392 3929 210</span></a></li>
                <li><a href="/"><span className="icon icon-envelope" /><span className="text">info@yourdomain.com</span></a></li>
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
  {/* loader */}
 
</div>
  
  )
}

export default TrangChu