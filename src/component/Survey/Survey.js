import React from 'react'
import D from '../../constants/dictionary';
import Image from '../ImageIntroduction/ImageIntroduction';
const Survey = (props) => (
  <section className="ftco-counter bg-light" id="section-counter">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-4 d-flex justify-content-center counter-wrap ftco-animate">
              <div className="block-18 text-center icon-content">
              <Image imgLink = {D.TynkerEducation.Count.img_student} notload = {true} />
                <div className="text">
                  <strong className="number" data-number={10300}>54</strong>
                  <span>Học viên hài lòng</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-4 d-flex justify-content-center counter-wrap ftco-animate">
              <div className="block-18 text-center icon-content">
              <Image imgLink = {D.TynkerEducation.Count.img_course}  notload = {true}/>
                <div className="text">
                  <strong className="number" data-number={7896}>89</strong>
                  <span>Khóa học hoàn tất</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-4 d-flex justify-content-center counter-wrap ftco-animate">
              <div className="block-18 text-center icon-content">
              <Image imgLink = {D.TynkerEducation.Count.img_teacher}  notload = {true}/>
                <div className="text">
                  <strong className="number" data-number={400}>6</strong>
                  <span>Giáo viên chuyên môn cao</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-4 d-flex justify-content-center counter-wrap ftco-animate">
              <div className="block-18 text-center icon-content">
              <Image imgLink = {D.TynkerEducation.Count.img_school} notload ={true} />
                <div className="text">
                  <strong className="number" data-number={200}>10</strong>
                  <span>Trường học</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Survey
