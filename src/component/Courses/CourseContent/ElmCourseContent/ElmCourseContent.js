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
              Course content
            </div>
            <div
              className="header-right"
              data-purpose="curriculum-content-summary"
            >
              <span>
                <a
                  className="sections-toggle"
                  href="#/"
                  onClick={this.toggleBtn}
                >
                  {toggleExpand}
                </a>
              </span>
              <span className="dib">39 lectures</span>
              <span className="curriculum-header-length">04:45:42</span>
            </div>
          </div>
        </div>
        <div className="coverElmCourseContent curriculum-wrapper">
          <div className="lectures-container-Intro" onClick={this.toggleBtn}>
            <a
              className="section-container section-container--expanded"
              href="#/"
            >
              <div className="section-header-left">
                <span className="section-title-wrapper">
                  <span className="section-title-toggle">
                    <span>
                      <img alt="icon" src={plusMinus} />
                    </span>
                  </span>

                  <span className="section-title-text"> Introduction</span>
                </span>
              </div>
              <div className="section-header-right">
                <span className={`num-items-in-section ${lecture}`}>
                  4 lectures
                </span>
                <span className="section-header-length">07:53</span>
              </div>
            </a>
          </div>
          <DetailsCourse toggleClass={toggleClass} />
        </div>
      </>
    )
  }
}

export default ElmCourseContent
