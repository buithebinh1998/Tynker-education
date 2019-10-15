import React from 'react';

const Survey = (props) => (
    <section className="ftco-counter bg-light" id="section-counter">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="row">
            <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
              <div className="block-18 text-center">
                <div className="text">
                  <strong className="number" data-number={10300}>0</strong>
                  <span>Satisfied Students</span>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
              <div className="block-18 text-center">
                <div className="text">
                  <strong className="number" data-number={7896}>0</strong>
                  <span>Courses Completed</span>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
              <div className="block-18 text-center">
                <div className="text">
                  <strong className="number" data-number={400}>0</strong>
                  <span>Experts Advisors</span>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
              <div className="block-18 text-center">
                <div className="text">
                  <strong className="number" data-number={200}>0</strong>
                  <span>Schools</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
) 

export default Survey;