import React from "react";
import { NavLink } from "react-router-dom";
import Survey from "../component/Survey/Survey";
import Leading from "../component/Leading/Leading";
import StudentSay from "../component/StudentSay/StudentSay";
const TrangChu = props => {
  const renderIntroduce = () => (
    <div
      className="hero-wrap"
      style={{
        backgroundImage: 'url("https://i.wingur.com/Eznw.jpg")',
        backgroundAttachment: "fixed"
      }}
    >
      <div className="overlay" />
      <div className="container">
        <div
          className="row no-gutters slider-text align-items-center justify-content-center"
          data-scrollax-parent="true"
        >
          <div className="col-md-10 ftco-animate text-center">
            <h1 className="mb-4">
              Học Lập Trình Trực Quan <br /> Theo Định Hướng STEAM <br /> Với
              Tynker
            </h1>
            <p>
              <a href="/" className="btn btn-primary px-4 py-3">
                Đăng Ký
              </a>{" "}
              <NavLink to="/khoahoc" className="btn btn-secondary px-4 py-3">
                Xem Khóa Học
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderInformation = () => (
    <section className="ftco-section">
      <div className="container">
        <div className="row">
          <div className="col-md-4 d-flex align-self-stretch ftco-animate">
            <div className="media block-6 services p-3 py-4 d-block text-center">
              <div className="icon d-flex justify-content-center align-items-center mb-3">
                <span className="flaticon-exam" />
              </div>
              <div className="media-body px-3">
                <h3 className="heading">Admission</h3>
                <p>
                  Even the all-powerful Pointing has no control about the blind
                  texts it is an almost unorthographic.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex align-self-stretch ftco-animate">
            <div className="media block-6 services p-3 py-4 d-block text-center">
              <div className="icon d-flex justify-content-center align-items-center mb-3">
                <span className="flaticon-blackboard" />
              </div>
              <div className="media-body px-3">
                <h3 className="heading">Notice Board</h3>
                <p>
                  Even the all-powerful Pointing has no control about the blind
                  texts it is an almost unorthographic.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex align-self-stretch ftco-animate">
            <div className="media block-6 services p-3 py-4 d-block text-center">
              <div className="icon d-flex justify-content-center align-items-center mb-3">
                <span className="flaticon-books" />
              </div>
              <div className="media-body px-3">
                <h3 className="heading">Our Library</h3>
                <p>
                  Even the all-powerful Pointing has no control about the blind
                  texts it is an almost unorthographic.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <>
      {renderIntroduce()}
      {renderInformation()}
      <Leading />
      <Survey />
      <StudentSay />
    </>
  );
};

export default TrangChu;
