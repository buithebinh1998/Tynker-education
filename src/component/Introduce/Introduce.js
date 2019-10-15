import React from "react";
import { NavLink } from "react-router-dom";
const Introduce = props => (
  <div
    className="hero-wrap hero-wrap-2"
    style={{
      backgroundImage: 'url("images/bg_2.jpg")',
      backgroundAttachment: "fixed"
    }}
  >
    <div className="overlay" />
    <div className="container">
      <div
        className="row no-gutters slider-text align-items-center justify-content-center"
        data-scrollax-parent="true"
      >
        <div className="col-md-8 ftco-animate text-center">
          <p className="breadcrumbs">
            <span className="mr-2">
              <NavLink to="/">Trang chủ</NavLink>
            </span>{" "}
            <span>{props.name}</span>
          </p>
          <h1 className="mb-3 bread" style={{textTransform: "uppercase"}}>{props.name}</h1>
        </div>
      </div>
    </div>
  </div>
);

export default Introduce;
