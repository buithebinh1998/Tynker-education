import React from 'react'
import Navbar from '../component/Navbar'
import {data} from '../data/data'
import Footer from '../component/Footer'
import {NavLink} from 'react-router-dom'
const KhoaHoc = (props) => {
  const loadData = data.map(item => {
      return(
        <div className="col-md-4 d-flex ftco-animate">
        <div className="course align-self-stretch">
          <a href="/" className="img" style={{backgroundImage: `url(${item.imglink})`}} />
          <div className="text p-4">
            <p className="category"><span>{item.title}</span> <span className="price">{item.price}</span></p>
            <h3 className="mb-3" align="center"><a href="/">{item.name}</a></h3>
            <p align="justify">{item.description}</p>
            <p><a href="/" className="btn btn-primary">Bắt đầu khóa học!</a></p>
          </div>
        </div>
      </div>
      )
  } )
  return(
    <div>
        <Navbar active = "khoahoc"/>
        {/* END nav */}
        <div className="hero-wrap hero-wrap-2" style={{backgroundImage: 'url("images/bg_2.jpg")', backgroundAttachment: 'fixed'}}>
          <div className="overlay" />
          <div className="container">
            <div className="row no-gutters slider-text align-items-center justify-content-center" data-scrollax-parent="true">
              <div className="col-md-8 ftco-animate text-center">
                <p className="breadcrumbs"><span className="mr-2"><NavLink to = "/">Trang chủ</NavLink></span> <span>Khóa học</span></p>
                <h1 className="mb-3 bread">KHÓA HỌC</h1>
              </div>
            </div>
          </div>
        </div>
        <section className="ftco-section">
          <div className="container">
            <div className="row">
                  {loadData}
            </div>
            <div className="row mt-5">
              <div className="col text-center">
                <div className="block-27">
                  <ul>
                    <li><a href="javascript:void(0);">&lt;</a></li>
                    <li className="active"><span>1</span></li>
                    <li><a href="javascript:void(0);">&gt;</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <Footer/>
      </div>
  )
}

export default KhoaHoc