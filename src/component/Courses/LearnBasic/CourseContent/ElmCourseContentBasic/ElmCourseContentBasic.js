import React from 'react'
import plus from '../../../../../assets/icon/plus.svg'
import minus from '../../../../../assets/icon/minus.svg'

import DetailsCourse from '../../../CourseContent/ElmCourseContent/DetailsCourse/DetailsCourse'
import '../../../CourseContent/ElmCourseContent/ElmCourseContent.scss'

class ElmCourseContentBasic extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      opened: false
    }
  }

  toggleBtn = () => {
    const { opened } = this.state
    this.setState({
      opened: !opened
    })
  }

  render() {
    let { plusMinus, lecture, toggleClass, toggleExpand } = this.props
    const { opened } = this.state

    if (!opened) {
      plusMinus = plus
      toggleClass = 'toggleClass'
      lecture = ''
      toggleExpand = 'Expand all'
    } else {
      plusMinus = minus
      toggleClass = ''
      lecture = 'lecture'
      toggleExpand = 'Collapse all'
    }

    return (
      <>
        <div className="curriculum-header-container">
          <div className="header-left">
            <div
              className="curriculum-header-title"
              data-purpose="curriculum-title"
            >
              Nội dung khóa học
            </div>
            <div
              className="header-right"
              data-purpose="curriculum-content-summary"

            >
              <span>
                <div
                  onClick={this.toggleBtn}
                  className="sections-toggle" style={{ cursor: 'pointer' }}
                >
                  {toggleExpand}
                </div>
              </span>
              <span className="curriculum-header-length">04:45:42</span>
            </div>
          </div>
        </div>
        <div className="coverElmCourseContent curriculum-wrapper">
          <div className="lectures-container-Intro" onClick={this.toggleBtn}>
            <div
              className="section-container section-container--expanded"
            >
              <div className="section-header-left">
                <span className="section-title-wrapper">
                  <span className="section-title-toggle">
                    <span>
                      <img alt="icon" src={plusMinus} />
                    </span>
                  </span>

                  <span className="section-title-text"> Giới thiệu</span>
                </span>
              </div>
              <div className="section-header-right">
                <span className={`num-items-in-section ${lecture}`}>
                  5 lectures
                </span>
                <span className="section-header-length">07:53</span>
              </div>
            </div>
          </div>
          <DetailsCourse toggleClass={toggleClass} _id={this.props._id}/>
        </div>
      </>
    )
  }
}

export default ElmCourseContentBasic
