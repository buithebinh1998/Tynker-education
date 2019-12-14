import React from 'react'
import ElmCourseContentBasic from './ElmCourseContentBasic/ElmCourseContentBasic'

const CourseContentBasic = (props) => (
  <>
    <div className="col-xxs-8 left-col">
      <div className="clp-component-render">
        <div className="curriculum-wrapper">
          <span id="curriculum" className="in-page-offset-anchor" />
          <div className="ud-component--clp--curriculum">
            <span />
            <ElmCourseContentBasic _id={props._id} />
          </div>
        </div>
      </div>
    </div>
  </>
)

export default CourseContentBasic
