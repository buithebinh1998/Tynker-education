import React from 'react'
import VideoCourse from './VideoCourse/VideoCourse'
import './LearnBasic.scss'
import CourseContentBasic from './CourseContent/CourseContent'
class LearnBasic extends React.Component {
    myref = null
    state = {
      idCourse: 1
    }

    scrollToMyRef = () => window.scrollTo(0, this.myRef.offsetTop)
    componentDidMount() {
      this.scrollToMyRef();
    }
  render() {
    const {page} = this.props;
    console.log(page)
    return (
      <div className="row coverCourseVideo">
        <div className="up-Video" ref={ (ref) => this.myRef=ref }>
          <VideoCourse _id={this.state.idCourse} page = {page}/>
        </div>
        <div className="container down-Video">
          <CourseContentBasic _id={this.state.idCourse} />
        </div>
      </div>
    )
  }
}

export default LearnBasic
