import React from 'react'
import plus from '../../../../assets/icon/plus.svg'
import minus from '../../../../assets/icon/minus.svg'

import DetailsCourse from './DetailsCourse/DetailsCourse'
import './ElmCourseContent.scss'

// eslint-disable-next-line react/prefer-stateless-function
class ElmCourseContent extends React.Component {
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
      toggleExpand = 'Mở rộng'
    } else {
      plusMinus = minus
      toggleClass = ''
      lecture = 'lecture'
      toggleExpand = 'Thu nhỏ'
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
              <span className="dib">5 bài học</span>
              <span className="curriculum-header-length">08:30:00</span>
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

                  <span className="section-title-text"> Các bài học</span>
                </span>
              </div>
              <div className="section-header-right">
                <span className={`num-items-in-section ${lecture}`}>
                  5 bài học
                </span>
                <span className="section-header-length">08:30:00</span>
              </div>
            </div>
          </div>
          <DetailsCourse toggleClass={toggleClass} />
        </div>
      </>
    )
  }
}

export default ElmCourseContent
