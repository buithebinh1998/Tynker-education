import React from 'react'
import {NavLink} from 'react-router-dom'
const TrangChu = props => {
  return(
    <div>
  <div className="hero-wrap" style={{backgroundImage: 'url("https://i.wingur.com/Eznw.jpg")', backgroundAttachment: 'fixed'}}>
    <div className="overlay" />
    <div className="container">
      <div className="row no-gutters slider-text align-items-center justify-content-center" data-scrollax-parent="true">
        <div className="col-md-10 ftco-animate text-center">
          <h1 className="mb-4">Học Lập Trình Trực Quan <br/> Theo Định Hướng STEAM <br/> Với Tynker</h1>
          <p><a href="/" className="btn btn-primary px-4 py-3">Đăng Ký</a> <NavLink to="/khoahoc" className="btn btn-secondary px-4 py-3">Xem Khóa Học</NavLink></p>
        </div>
      </div>
    </div>
  </div>
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
        <div className="col-md-4 ftco-animate">
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
            </div>
            </div>
            <div className="col-md-4 ftco-animate">
          <div className="carousel-testimony owl-carousel">
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
            </div>
            </div>
            <div className="col-md-4 ftco-animate">
          <div className="carousel-testimony owl-carousel">
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
            </div>
            </div>
      </div>
    </div>
  </section>
</div>
  
  )
}

export default TrangChu