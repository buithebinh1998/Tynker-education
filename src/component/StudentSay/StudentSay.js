import React from 'react'
import D from '../../constants/dictionary'
import ImageStudent from '../ImageStudent/ImageStudent'
const StudentSay = props => (
  <section className="ftco-section testimony-section">
    <div className="container">
      <div className="row justify-content-center mb-5 pb-3">
        <div className="col-md-7 heading-section ftco-animate text-center">
          <h2 className="mb-4">Học viên nói gì?</h2>
        </div>
      </div>
      <div className="row">
        <ImageStudent
          name={D.TynkerEducation.Student1.name}
          say={D.TynkerEducation.Student1.say}
          role={D.TynkerEducation.Student1.role}
          imgLink={D.TynkerEducation.Student1.imgLink}
        />
        <ImageStudent
          name={D.TynkerEducation.Student2.name}
          say={D.TynkerEducation.Student2.say}
          role={D.TynkerEducation.Student2.role}
          imgLink={D.TynkerEducation.Student2.imgLink}
        />
        <ImageStudent
          name={D.TynkerEducation.Parents.name}
          say={D.TynkerEducation.Parents.say}
          role={D.TynkerEducation.Parents.role}
          imgLink={D.TynkerEducation.Parents.imgLink}
        />
        <ImageStudent
          name={D.TynkerEducation.Teacher.name}
          say={D.TynkerEducation.Teacher.say}
          role={D.TynkerEducation.Teacher.role}
          imgLink={D.TynkerEducation.Teacher.imgLink}
        />
      </div>
    </div>
  </section>
)
export default StudentSay
