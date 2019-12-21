import React from "react"
import InformationKH from './InfomationKH';
const renderComponent = (props) => (
  <>
    {props.data.map((item, idx) => {
      return (
          <InformationKH item= {item} idx= {idx}/>
      )
    })}
  </>
)

export default renderComponent
