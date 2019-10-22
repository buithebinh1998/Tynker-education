import React from "react";
import "./Loader.scss";
const Loader = (props) => (
  <div className={props.load ? "loader component" : "loader"}>
  <span className="loader__ball loader__ball--1" />
  <span className="loader__ball loader__ball--2" />
  <span className="loader__ball loader__ball--3" />
</div>
)
export default Loader
