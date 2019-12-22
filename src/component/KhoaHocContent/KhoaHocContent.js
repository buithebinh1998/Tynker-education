import React from 'react'
import InformationKH from './InfomationKH'

const KhoaHocContent = props => {
  const { data, loading } = props
  const renderComponent = data =>
    data.map((item, idx) => {
      return <InformationKH item={item} idx={idx} loading={loading} key={idx} />
    })
  return (
    <section className="ftco-section" style={{ paddingTop: '1em' }}>
      <div className="container">
        <div className="row">{renderComponent(data, loading)}</div>
        <div className="row mt-5">
          <div className="col text-center">
            <div className="block-27" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default KhoaHocContent
