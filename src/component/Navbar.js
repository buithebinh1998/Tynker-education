import React, { useState } from "react"
import { NavLink, withRouter } from "react-router-dom"
import Logo from '../assets/img/logo-tynker.png'
import { C } from '../constants/index'
import { connect } from "react-redux"
import * as actions from '../actions/index'
import './Navbar.scss'

const Navbar = (props) => {
  let show = ''
  const [active, setActive] = useState(false)
  const {
    isAuthenticated,
    onLogOut
  } = props;

  const toggleActive = () => {
    setActive(!active)
  }
  if (active) { show = 'toggleClass' } else { show = '' }
  const renderLoginNavMenu = () => {
    if (isAuthenticated) {
      return (
        <>
          <li className="nav-item cta">
            <NavLink
              to="/learn"
              className="nav-link"
              activeClassName="nav-link-active"
            >
              <span>Bài học</span>
            </NavLink>
          </li>
          <li className="nav-item cta" onClick={onLogOut}>
            <NavLink
              to="/"
              className="nav-link"
              activeClassName="nav-link-active"
            >
              <span>Đăng xuất</span>
            </NavLink>
          </li>
        </>
      )
    } else return (
      <>
        <li className="nav-item cta">
          <NavLink to="/dangky" className="nav-link">
            <span>Đăng ký</span>
          </NavLink>
        </li>
        <li className="nav-item cta">
          <NavLink to="/dangnhap" className="nav-link">
            <span>Đăng nhập</span>
          </NavLink>
        </li>
      </>
    )
  }

  const renderHeaderNavMenu = () => (
    <div className={`collapse navbar-collapse ${show}`} id="ftco-nav">
      <ul className="navbar-nav mc-auto ">
        <li className="nav-item">
          <NavLink
            to="/"
            exact
            className="nav-link"
            activeClassName="nav-link-active"
          >
            Trang chủ
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/gioithieu"
            className="nav-link"
            activeClassName="nav-link-active"
          >
            Giới thiệu
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/khoahoc"
            className="nav-link"
            activeClassName="nav-link-active"
          >
            Khóa học
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/giaovien"
            className="nav-link"
            activeClassName="nav-link-active"
          >
            Giáo viên
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            to="/lienhe"
            className="nav-link"
            activeClassName="nav-link-active"
          >
            Liên hệ
          </NavLink>
        </li>
        {renderLoginNavMenu()}
      </ul>
    </div>
  )

  const renderHeaderLogo = () => (
    <NavLink className="navbar-brand" to="/">
      <img
        className="imgNavbarLogo"
        src={Logo}
        alt="Logo"
      />
      <br />
      <span style={{ fontSize: `${16}px`, color: "red" }}>ĐẠI HỌC SƯ PHẠM</span>
    </NavLink>
  )

  const renderHeaderToggleMenu = () => (
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#ftco-nav"
      aria-controls="ftco-nav"
      aria-expanded="false"
      aria-label="Toggle navigation"
      onClick={toggleActive}
    >
      <span className="oi oi-menu" />
    </button>
  )

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
      id="ftco-navbar"
    >
      <div className="container">
        {renderHeaderLogo()}
        {renderHeaderToggleMenu()}
        {renderHeaderNavMenu()}
      </div>
    </nav>
  )
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== C.EMPTY_STRING,
    loading: state.auth.loading,
    isShowPassword: state.auth.isShowPassword
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password, history, resetForm) =>
      dispatch(actions.auth(email, password, history, resetForm)),
    onLogOut: () => dispatch(actions.logout())
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Navbar))
