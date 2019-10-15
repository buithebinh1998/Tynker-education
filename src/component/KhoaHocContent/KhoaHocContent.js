import React, { useEffect } from "react";
import axios from "axios";
const KhoaHocContent = props => {
  const [data, setData] = React.useState([]);

  useEffect(() => {
    axios
      .get("http://tynkerserver.herokuapp.com/tynkerdhsp/courses")
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  });
  const renderComponent = (item, idx) => (
    <div className="col-md-4 d-flex ftco-animate">
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
  );
  const renderData = data =>
    data.map((item, idx) => {
      return renderComponent(item, idx);
    });
  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row">{renderData(data)}</div>
        <div className="row mt-5">
          <div className="col text-center">
            <div className="block-27"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KhoaHocContent;
