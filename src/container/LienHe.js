import React from 'react'
import Introduce from '../component/Introduce/Introduce'

const LienHe = () => {
  return (
    <>
      <Introduce name="Liên Hệ" />
      <section className="ftco-section contact-section ftco-degree-bg">
        <div className="container">
          <div className="row d-flex mb-5 contact-info">
            <div className="col-md-12 mb-4">
              <h2 className="h4">Thông tin liên hệ</h2>
            </div>
            <div className="w-100" />
            <div className="col-md-3">
              <p>
                <span>Địa chỉ:</span>	280 An Dương Vương, Phường 4, Quận 5, Hồ Chí Minh
              </p>
            </div>
            <div className="col-md-3">
              <p>
                <span>Số điện thoại:</span>{' '}
                <a href="tel://+84 786 304 558">+84 786 304 558</a>
              </p>
            </div>
            <div className="col-md-3">
              <p>
                <span>Email:</span>{' '}
                <a href="mailto:tynker.edu@gmail.com">tynker.edu@gmail.com</a>
              </p>
            </div>
            <div className="col-md-3">
              <p>
                <span>Website</span> <a href="https://tynkerdhsp.firebaseapp.com/">tynkerdhsp.firebaseapp.com</a>
              </p>
            </div>
          </div>
          <div className="row block-9">
            <div className="col-md-6 pr-md-5">
              <h4 className="mb-4">Bạn có câu hỏi gì không?</h4>
              <form action="#">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Tên của bạn"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email của bạn"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Chủ đề"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name='true'
                    id='true'
                    cols={30}
                    rows={7}
                    className="form-control"
                    placeholder="Câu hỏi"
                    defaultValue=""
                  />
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    defaultValue="Send Message"
                    className="btn btn-primary py-3 px-5"
                  />
                </div>
              </form>
            </div>
            <div className="col-md-6" id="map" />
          </div>
        </div>
      </section>
    </>
  )
}

export default LienHe
