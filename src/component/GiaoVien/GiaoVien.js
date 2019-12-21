import React from "react"
import Loader from '../Loader/Loader'
import InformationGV from "./InformationGV";
const GiaoVien = props => {
  const { data, loading } = props

  const renderData = data => data.map((item, idx) => {
    return <InformationGV item ={item} idx ={idx}/>
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
