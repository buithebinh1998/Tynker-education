import React from 'react'
import {NavLink} from 'react-router-dom'
import KhoaHocContent from '../component/KhoaHocContent/KhoaHocContent'
import { dataKhoaHoc } from '../data/dataKhoaHoc'
const KhoaHoc = (props) => {
  const loadData = dataKhoaHoc.map(item => {
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
                  <KhoaHocContent/>
            </div>
            <div className="row mt-5">
              <div className="col text-center">
                <div className="block-27">
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
  )
}

export default KhoaHoc