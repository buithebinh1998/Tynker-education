import React from "react"
import Loader from '../Loader/Loader'

const GiaoVien = props => {
  const { data, loading } = props

  const renderComponent = (item, idx) => (
    <div className="col-lg-4 mb-sm-4 ftco-animate" key={idx}>
      <div className="staff">
        <div className="d-flex mb-4">
          <div
            className="img"
            style={{ backgroundImage: `url(${item.imgLink})` }}
          />
          <div className="info ml-3">
            <h3>{item.name}</h3>
            <span className="position">{item.role}</span>
            <p className="ftco-social d-flex">
              <a
                href={`${item.fbLink}`}
                target="_blank"
                rel="noopener noreferrer"
                className="d-flex justify-content-center align-items-center"
              >
                <span className="icon-facebook" />
              </a>
            </p>
          </div>
        </div>
        <div className="text">
          <p>{item.description}</p>
        </div>
      </div>
    </div>
  )

  const renderData = data => data.map((item, idx) => {
    return renderComponent(item, idx)
  })

  return (
    <section className="ftco-section bg-light">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-3">
          <div className="col-md-7 heading-section ftco-animate text-center">
            <h2 className="mb-4">Những giáo viên của chúng tôi</h2>
          </div>
        </div>
        <div className="row">{loading ? <Loader /> : renderData(data)}</div>
      </div>
    </section>
  )
}

export default GiaoVien
