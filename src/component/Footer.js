import React from "react";
import { NavLink } from "react-router-dom";
const Footer = () => {
  const renderIntroduce = () => (
    <div className="col-md-4">
      <div className="ftco-footer-widget mb-4">
        <h2>
          <NavLink className="navbar-brand" to="/">
            <img
              src="https://i.wingur.com/i4Zo.png"
              alt="Logo"
              style={{ width: "50px" }}
            />
            TynkerEdu <br />
            <span style={{ fontSize: 16 + "px", color: "yellow" }}>
              ĐẠI HỌC SƯ PHẠM
            </span>
          </NavLink>
        </h2>
        <p align="justify">
          Trang web giáo dục hỗ trợ việc học tập Tynker được phát triển bởi nhóm
          sinh viên trường Đại Học Sư Phạm.
        </p>
        <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
          <li className="ftco-animate">
            <a href="https://www.facebook.com/tynker.edu/" target="_blank" rel="noopener noreferrer">
              <span className="icon-facebook" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
  const renderConnect = () => (
    <div className="col-md-4">
      <div className="ftco-footer-widget mb-4 ml-md-4">
        <h2 className="ftco-heading-2">Liên kết</h2>
        <ul className="list-unstyled">
          <li>
            <NavLink to="/" className="py-2 d-block">
              Trang chủ
            </NavLink>
          </li>
          <li>
            <NavLink to="/gioithieu" className="py-2 d-block">
              Giới thiệu
            </NavLink>
          </li>
          <li>
            <NavLink to="/khoahoc" className="py-2 d-block">
              Khóa học
            </NavLink>
          </li>
          <li>
            <NavLink to="/giaovien" className="py-2 d-block">
              Giáo viên
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
  const renderCreated = () => (
    <div className="col-md-12 text-center">
      <p>
        Copyright © All rights reserved by Bui The Binh and Nguyen Minh Anh Khoi
        | Supported with <i className="icon-heart" aria-hidden="true" /> by Tran
        Anh Tuan
      </p>
    </div>
  );

  const renderQuestion = () => (
    <div className="col-md-4">
      <div className="ftco-footer-widget mb-4">
        <h2 className="ftco-heading-2">Bạn có thắc mắc cần giải đáp?</h2>
        <div className="block-23 mb-3">
          <ul>
            <li>
              <span className="icon icon-map-marker" />
              <span className="text">
                280 An Dương Vương, Phường 4, Quận 5, Hồ Chí Minh
              </span>
            </li>
            <li>
              <a href="/">
                <span className="icon icon-phone" />
                <span className="text">+84 786 304 558</span>
              </a>
            </li>
            <li>
              <a href="/">
                <span className="icon icon-envelope" />
                <span className="text">buithebinh1998@gmail.com</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
  return (
    <div>
      <footer
        className="ftco-footer ftco-bg-dark ftco-section img"
        style={{
          backgroundImage: "url(images/bg_2.jpg)",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="overlay" />
        <div className="container">
          <div className="row">
            {renderIntroduce()}
            {renderConnect()}
            {renderQuestion()}
          </div>
          <div className="row">{renderCreated()}</div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
