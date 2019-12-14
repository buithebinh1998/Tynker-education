import React from 'react'
import VideoCourse from './VideoCourse/VideoCourse'
import './LearnBasic.scss'
import CourseContentBasic from './CourseContent/CourseContent'

class LearnBasic extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      idCourse : 1
    }
  }

  render() {
    return (
      <div className="row coverCourseVideo">
        <div className="up-Video">
          <VideoCourse _id={this.state.idCourse} />
        </div>
        <div className="container down-Video">
          <CourseContentBasic _id={this.state.idCourse} />
        </div>
      </div>
    )
  }
}
export default LearnBasic
