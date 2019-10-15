import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = props => {
  const renderHeaderNavMenu = () => (
    <div className="collapse navbar-collapse" id="ftco-nav">
      <ul className="navbar-nav ml-auto">
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
      </ul>
    </div>
  );

  const renderHeaderLogo = () => (
    <NavLink className="navbar-brand" to="/">
      <img
        src="https://i.wingur.com/i4Zo.png"
        alt="Logo"
        style={{ width: "50px" }}
      />
      TynkerEdu <br />
      <span style={{ fontSize: 16 + "px", color: "red" }}>ĐẠI HỌC SƯ PHẠM</span>
    </NavLink>
  );

  const renderHeaderToggleMenu = () => (
    <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#ftco-nav"
    aria-controls="ftco-nav"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="oi oi-menu" /> Menu
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
  );
};

export default Navbar;
