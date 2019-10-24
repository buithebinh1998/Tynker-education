import React from 'react'
import './CourseContent.scss'
import ElmCourseContent from './ElmCourseContent/ElmCourseContent'
import ElmCourseTitle from './ElmCourseTitle/ElmCourseTitle'

const CourseContent = () => {
  return (
    <>
      <div className="col-xxs-8 left-col">
        <div className="clp-component-render">
          <div className="curriculum-wrapper">
            <span id="curriculum" className="in-page-offset-anchor" />
            <div className="ud-component--clp--curriculum">
              <span />
              <ElmCourseTitle />
              <ElmCourseContent />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CourseContent
