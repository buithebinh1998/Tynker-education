import React from 'react'
import VideoCourse from './VideoCourse/VideoCourse'
import './LearnBasic.scss'
import CourseContentBasic from './CourseContent/CourseContent'

const LearnBasic = () => (
  <div className="row coverCourseVideo">
    <div className="up-Video">
      <VideoCourse />
    </div>
    <div className="container down-Video">
      <CourseContentBasic />
    </div>
  </div>
)

export default LearnBasic
