import React from 'react'
import folder from '../../../../../assets/icon/folder.svg'
import play from '../../../../../assets/icon/play-circle.svg'
import '../ElmCourseContent.scss'

const DetailsCourse = props => (
  <div className={`cover-lectures-container ${props.toggleClass}`}>
    <div className="lectures-container">
      <div className="lecture-container">
        <div className="left-content">
          <img alt="icon" src={folder} />

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
          <img alt="icon" src={play} />
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
      <div className="lecture-container">
        <div className="left-content">
          <img alt="icon" src={play} />
          <div className="top">
            <div className="title">Welcome to Sliceline </div>
          </div>
        </div>
        <div className="details">
          <span className="content-summary">01:41</span>
        </div>
      </div>
      <div className="lecture-container">
        <div className="left-content">
          <img alt="icon" src={folder} />
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

export default DetailsCourse
