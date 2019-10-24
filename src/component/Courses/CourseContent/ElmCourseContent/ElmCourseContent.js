import React from 'react'
import plus from '../../../../assets/icon/plus.svg'
import minus from '../../../../assets/icon/minus.svg'

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
    let { plusMinus } = this.props
    const { opened } = this.state

    if (opened) {
      plusMinus = plus
    } else {
      plusMinus = minus
    }

    return (
      <div>
        <a className="section-container section-container--expanded" href="#/">
          <div className="section-header-left" onClick={this.toggleBtn}>
            <hr />
            <span className="section-title-wrapper">
              <span className="section-title-toggle">
                <span>
                  <img alt="icon" src={plusMinus} />
                </span>
              </span>

              <span className="section-title-text"> Introduction</span>
            </span>
            <hr />
          </div>
          <div className="section-header-right">
            <span
              className="num-items-in-section"
              data-purpose="num-items-in-section"
            >
              4 lectures
            </span>
            <span className="section-header-length">07:53</span>
          </div>
        </a>
        <div className="lectures-container">
          <div className="lecture-container">
            <div className="left-content">
              <span className="udi udi-file-o" />
              <div className="top">
                <div className="title">Beginner Setup </div>
              </div>
            </div>
            <div className="details">
              <span className="content-summary">01:47</span>
            </div>
          </div>
          <div className="lecture-container lecture-container--preview">
            <div className="left-content">
              <span className="udi udi-play-circle" />
              <div className="top">
                <div className="title">
                  <a href="/#">create-react-app</a>
                </div>
              </div>
            </div>
            <div className="details">
              <a href="/#">
                <span className="preview-text">Preview</span>
              </a>
              <span className="content-summary">04:15</span>
            </div>
          </div>
          <div className="lecture-container" data-purpose="lecture-item-1-3">
            <div className="left-content">
              <span className="udi udi-play-circle" />
              <div className="top">
                <div className="title">Welcome to Sliceline </div>
              </div>
            </div>
            <div className="details">
              <span className="content-summary">01:41</span>
            </div>
          </div>
          <div className="lecture-container" data-purpose="lecture-item-1-4">
            <div className="left-content">
              <span className="udi udi-file-o" />
              <div className="top">
                <div className="title">Source Code </div>
              </div>
            </div>
            <div className="details">
              <span className="content-summary">00:10</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ElmCourseContent
