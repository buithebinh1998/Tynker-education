import React from "react"

const renderComponent = (props) => (
  <>
    {props.data.map((item, idx) => {
      return (
        <div className="col-md-4 d-flex ftco-animate" key={idx}>
          <div className="course align-self-stretch">
            <a
              href="/"
              className="img"
              style={{ backgroundImage: `url(${item.imgLink})` }}
            >
              {" "}
            </a>
            <div className="text p-4">
              <p className="category">
                <span>{item.title}</span>{" "}
                <span className="price">{item.price}</span>
              </p>
              <h3 className="mb-3" align="center">
                <a href="/">{item.name}</a>
              </h3>
              <p align="justify">{item.description}</p>
              <p>
                <a href="/" className="btn btn-primary">
                  Bắt đầu khóa học!
                </a>
              </p>
            </div>
          </div>
        </div>
      )
    })}
  </>
)

export default renderComponent
