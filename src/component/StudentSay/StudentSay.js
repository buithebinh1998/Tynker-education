import React from "react"

const StudentSay = props => (
  <section className="ftco-section testimony-section">
    <div className="container">
      <div className="row justify-content-center mb-5 pb-3">
        <div className="col-md-7 heading-section ftco-animate text-center">
          <h2 className="mb-4">Học viên nói gì?</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 ftco-animate">
          <div className="carousel-testimony owl-carousel">
            <div className="item">
              <div className="testimony-wrap text-center">
                <div
                  className="user-img mb-5"
                  style={{ backgroundImage: "url(images/person_1.jpg)" }}
                >
                  <span className="quote d-flex align-items-center justify-content-center">
                    <i className="icon-quote-left" />
                  </span>
                </div>
                <div className="text">
                  <p className="mb-5">
                  Em rất cảm ơn TynkerEdu đã cung cấp một khóa học "Tynker cơ bản" cực kì bổ ích. 
                  Vừa được tiếp thu kiến thức mới, vừa được trực tiếp thực hành giúp đỡ em rất nhiều trong việc học lập trình. 
          
                  </p>
                  <p className="name">Bùi Hoàng Minh</p>
                  <span className="position">Học sinh THCS</span>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="testimony-wrap text-center">
                <div
                  className="user-img mb-5"
                  style={{ backgroundImage: "url(images/person_2.jpg)" }}
                >
                  <span className="quote d-flex align-items-center justify-content-center">
                    <i className="icon-quote-left" />
                  </span>
                </div>
                <div className="text">
                  <p className="mb-5">
                  Nhờ có TynkerEdu, em đã biết thêm được rất nhiều kiến thức bổ ích về những cấu trúc mà em không thể hiểu được khi tự tìm hiểu.
                  Em sẽ tiếp tục đăng ký lớp "Tynker nâng cao" để theo đuổi niềm đam mê lập trình của bản thân.
                  </p>
                  <p className="name">Trần Anh Phúc</p>
                  <span className="position">Học sinh THCS</span>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="testimony-wrap text-center">
                <div
                  className="user-img mb-5"
                  style={{ backgroundImage: "url(images/person_3.jpg)" }}
                >
                  <span className="quote d-flex align-items-center justify-content-center">
                    <i className="icon-quote-left" />
                  </span>
                </div>
                <div className="text">
                  <p className="mb-5">
                  Tôi chưa từng hối hận khi đăng ký cho con mình một khóa học ở trang TynkerEdu.
                  Những bài giảng rất hay, kèm theo những ví dụ rất thực tế làm cho con tôi rất hứng thú và đam mê lập trình.
                  Tôi cảm ơn TynkerEdu.
                  </p>
                  <p className="name">Lâm Sơn Tùng</p>
                  <span className="position">Phụ huynh</span>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="testimony-wrap text-center">
                <div
                  className="user-img mb-5"
                  style={{ backgroundImage: "url(images/person_3.jpg)" }}
                >
                  <span className="quote d-flex align-items-center justify-content-center">
                    <i className="icon-quote-left" />
                  </span>
                </div>
                <div className="text">
                  <p className="mb-5">
                    Những tài liệu bổ ích cùng những bài giảng tuyệt vời của TynkerEdu đã hun đúc cho tôi những kinh nghiệm quý giá 
                    cho việc dạy học lập trình của tôi. Tôi chân thành cảm ơn công sức của các thầy cô.
                  </p>
                  <p className="name">Nguyễn Minh Đạt</p>
                  <span className="position">Giáo viên</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)
export default StudentSay
