import React from 'react'
import {NavLink} from 'react-router-dom'
import { dataGiaoVien } from '../data/dataGiaoVien'
const GiaoVien = (props) => {
  const loadData = dataGiaoVien.map(item => {
    return(
    <div className="col-lg-4 mb-sm-4 ftco-animate">
              <div className="staff">
                <div className="d-flex mb-4">
                  <div className="img" style={{backgroundImage: `url(${item.imglink})`}} />
                  <div className="info ml-3">
                    <h3>{item.name}</h3>
                    <span className="position">{item.role}</span>
                    <p className="ftco-social d-flex">
                      <a href={`${item.fblink}`} target="_blank" className="d-flex justify-content-center align-items-center"><span className="icon-facebook" /></a>
                    </p>
                  </div>
                </div>
                <div className="text">
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
    ) } 
  )
  return (
    <div>
      {/* END nav */}
      <div className="hero-wrap hero-wrap-2" style={{backgroundImage: 'url("images/bg_2.jpg")', backgroundAttachment: 'fixed'}}>
        <div className="overlay" />
        <div className="container">
          <div className="row no-gutters slider-text align-items-center justify-content-center" data-scrollax-parent="true">
            <div className="col-md-8 ftco-animate text-center">
              <p className="breadcrumbs"><span className="mr-2"><NavLink to="/">Trang chủ</NavLink></span> <span>Giáo viên</span></p>
              <h1 className="mb-3 bread">GIÁO VIÊN</h1>
            </div>
          </div>
        </div>
      </div>
      <section className="ftco-section bg-light">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-7 heading-section ftco-animate text-center">
              <h2 className="mb-4">Những giáo viên của chúng tôi</h2>
            </div>
          </div>
          <div className="row">
            {loadData}
              </div>
            </div>

      </section>
    </div>
  )
}

export default GiaoVien