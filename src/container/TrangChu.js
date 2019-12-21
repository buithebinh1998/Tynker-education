import React from 'react'
import { NavLink } from 'react-router-dom'
import Survey from '../component/Survey/Survey'
import Leading from '../component/Leading/Leading'
import StudentSay from '../component/StudentSay/StudentSay'

const TrangChu = () => {
  const renderIntroduce = () => (
    <div
      className="hero-wrap"
      style={{
        backgroundImage: 'url("https://i.wingur.com/Eznw.jpg")',
        backgroundAttachment: 'fixed'
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
              TynkerEdu <br /> Trang Web dạy học lập trình trực quan bằng ngôn ngữ Tynker
            </h1>
            <p>
              <NavLink to="/dangky" className="btn btn-primary px-4 py-3">
                Đăng ký
              </NavLink>
              <NavLink to="/khoahoc" className="btn btn-secondary px-4 py-3">
                Xem Khóa Học
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  )

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
                <h3 className="heading">Thực hành ngay</h3>
                <p>
                  Khi tham gia khóa học, cuối mỗi bài học đều có phần demo chạy thử sản phẩm và có riêng một phần dành cho các bạn lập trình, thử nghiệm sản phẩm.
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
                <h3 className="heading">Bài giảng trực quan</h3>
                <p>
                  TynkerEdu cung cấp cho các bạn các khóa học bao gồm rất nhiều bài giảng trực quan, dễ hiểu, được thiết kế nhằm phát huy năng lực Tin học ở mỗi cá nhân. 
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
                <h3 className="heading">Tài liệu bổ ích</h3>
                <p>
                  Các tài liệu được biên soạn vô cùng chi tiết và công phu sẽ được cung cấp sau khi các bạn đăng ký tham gia khóa học.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )

  return (
    <>
      {renderIntroduce()}
      {renderInformation()}
      <Leading />
      <Survey />
      <StudentSay />
    </>
  )
}

export default TrangChu
