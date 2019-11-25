import React from "react"
import { NavLink } from "react-router-dom"

const renderComponent = (props) => (
  <>
    {props.data.map((item, idx) => {
      return (
        <div className="col-md-4 d-flex ftco-animate" key={idx}>
          <div className="course align-self-stretch">
            <NavLink
              to="/"
              className="img"
              style={{ backgroundImage: `url(${item.imgLink})` }}
            >
              {" "}
            </NavLink>
            <div className="text p-4">
              <p className="category">
                <span>{item.title}</span>{" "}
                <span className="price">{item.price}</span>
              </p>
              <h3 className="mb-3" align="center">
                <NavLink to="/">{item.name}</NavLink>
              </h3>
              <p align="justify">{item.description}</p>
              <p>
                <NavLink to="/" className="btn btn-primary">
                  Bắt đầu khóa học!
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      )
    })}
  </>
)

export default renderComponent
