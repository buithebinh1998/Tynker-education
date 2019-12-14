import React from 'react'
import { NavLink } from 'react-router-dom'
import { dataCourse } from '../../../../../data/dataCourse'
import play from '../../../../../assets/icon/play-circle.svg'
import '../ElmCourseContent.scss'

const DetailsCourse = props => {

  return (
    <div className={`cover-lectures-container ${props.toggleClass}`}>
      <div className="lectures-container">
        {dataCourse.map((data, index) => (
          <div className="lecture-container" key={index}>
            <div className="left-content">
              <img alt="icon" src={play} />
              <div className="top">
                <div className="title">
                  <NavLink onClick={setId()} to={`/learn/basic/${index + 1}`}>
                    {data.title}
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="details">
              <span className="content-summary">{data.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DetailsCourse
