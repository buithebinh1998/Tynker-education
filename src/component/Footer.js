import React from 'react'

const Footer = () =>{
    return(
    <div>
    <footer className="ftco-footer ftco-bg-dark ftco-section img" style={{backgroundImage: 'url(images/bg_2.jpg)', backgroundAttachment: 'fixed'}}>
    <div className="overlay" />
    <div className="container">
      <div className="row mb-5">
        <div className="col-md-4">
          <div className="ftco-footer-widget mb-4">
            <h2><a className="navbar-brand" href="index.html"><i className="flaticon-university" />TYNKER <br /><small>ĐẠI HỌC SƯ PHẠM</small></a></h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
              <li className="ftco-animate"><a href="/"><span className="icon-twitter" /></a></li>
              <li className="ftco-animate"><a href="/"><span className="icon-facebook" /></a></li>
              <li className="ftco-animate"><a href="/"><span className="icon-instagram" /></a></li>
            </ul>
          </div>
        </div>
        
        <div className="col-md-4">
          <div className="ftco-footer-widget mb-4 ml-md-4">
            <h2 className="ftco-heading-2">Liên kết</h2>
            <ul className="list-unstyled">
              <li><a href="/" className="py-2 d-block">Trang chủ</a></li>
              <li><a href="/" className="py-2 d-block">Giới thiệu</a></li>
              <li><a href="/" className="py-2 d-block">Khóa học</a></li>
              <li><a href="/" className="py-2 d-block">Giáo viên</a></li>
            </ul>
          </div>
        </div>
        <div className="col-md-4">
          <div className="ftco-footer-widget mb-4">
            <h2 className="ftco-heading-2">Bạn có thắc mắc cần giải đáp?</h2>
            <div className="block-23 mb-3">
              <ul>
                <li><span className="icon icon-map-marker" /><span className="text">280 An Dương Vương, Phường 4, Quận 5, Hồ Chí Minh</span></li>
                <li><a href="/"><span className="icon icon-phone" /><span className="text">+84 786 304 558</span></a></li>
                <li><a href="/"><span className="icon icon-envelope" /><span className="text">buithebinh1998@gmail.com</span></a></li>
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
    )
}
export default Footer