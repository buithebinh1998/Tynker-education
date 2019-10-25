import React from "react"
import Loader from "../Loader/Loader"
import Data from "./DataContent"

const KhoaHocContent = props => {
  const { data, loading } = props
  return (
    <section className="ftco-section" style={{ paddingTop: "1em" }}>
      <div className="container">
        <div className="row">
          {" "}
          {React.useMemo(() => {
            const component = loading ? <Loader /> : <Data data={data} />
            return component
          }, [data, loading])}
        </div>
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
