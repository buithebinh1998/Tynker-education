import React from 'react'
import './ElmCourseTitle.scss'

const ElmCourseTitle = () => {
  return (
    <div className="curriculum-header-container">
      <div className="header-left">
        <div
          className="curriculum-header-title"
          data-purpose="curriculum-title"
        >
          Course content
        </div>
        <div className="header-right" data-purpose="curriculum-content-summary">
          <span>
            <a className="sections-toggle" href="/#">
              Expand all
            </a>
          </span>
          <span className="dib">39 lectures</span>
          <span className="curriculum-header-length">04:45:42</span>
        </div>
      </div>
    </div>
  )
}

export default ElmCourseTitle
