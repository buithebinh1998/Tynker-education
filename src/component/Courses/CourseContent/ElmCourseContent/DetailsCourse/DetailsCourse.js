import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import play from '../../../../../assets/icon/play-circle.svg'
import pdf from '../../../../../assets/pdf/EBOOK_TYNKER.pdf'
import '../ElmCourseContent.scss'

const DetailsCourse = props => {
  const { dataCourse } = props
  return (
    <div className={`cover-lectures-container ${props.toggleClass}`}>
      <div className="lectures-container">
        {dataCourse.map((data, index) => (
          <div className="lecture-container" key={index}>
            <div className="left-content">
              <img alt="icon" src={play} />
              <div className="top">
                <div className="title">
                  <NavLink
                    to={`/learn/basic/${data.id}`}
                    onClick={() => window.scrollTo(0, 0)}
                  >
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
        <a href={pdf} download>Tài liệu tham khảo</a>

      </div>
    </div>
  )
}
const mapStateToProps = state => {
  return {
    dataCourse: state.pages
  }
}
export default connect(mapStateToProps, null)(DetailsCourse)
