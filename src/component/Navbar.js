import React from 'react'
import {NavLink} from 'react-router-dom'
import Logo from '../images/logo.png'
const Navbar = props => {
  return(
    <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
    <div className="container">
      <NavLink className="navbar-brand" to="/"><img src = {Logo} alt ="Logo" style ={{width: '50px'}} />TYNKER <br /><small>ĐẠI HỌC SƯ PHẠM</small></NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="oi oi-menu" /> Menu
      </button>
      <div className="collapse navbar-collapse" id="ftco-nav">
        <ul className="navbar-nav ml-auto">
          <li className={`nav-item ${props.active === "trangchu"? 'active' : ''}`}><NavLink to = '/' className="nav-link">Trang chủ</NavLink></li>
          <li className={`nav-item ${props.active === "gioithieu"? 'active' : ''}`}><NavLink to = '/gioithieu' className="nav-link">Giới thiệu</NavLink></li>
          <li className={`nav-item ${props.active === "khoahoc"? 'active' : ''}`}><NavLink to = '/khoahoc' className="nav-link">Khóa học</NavLink></li>
          <li className={`nav-item ${props.active === "giaovien"? 'active' : ''}`}><NavLink to = '/giaovien' className="nav-link">Giáo viên</NavLink></li>
          <li className={`nav-item ${props.active === "lienhe"? 'active' : ''}`}><NavLink to = '/lienhe' className="nav-link">Liên hệ</NavLink></li>
          <li className="nav-item cta"><NavLink  className="nav-link"><span>Đăng ký</span></NavLink></li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar