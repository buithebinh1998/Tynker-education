import React from "react"

const Leading = () => (
  <section
    className="ftco-section-3 img"
    style={{ backgroundImage: "url(images/bg_3.jpg)" }}
  >
    <div className="overlay" />
    <div className="container">
      <div className="row d-md-flex justify-content-center">
        <div className="col-md-9 about-video text-center">
          <h2 className="ftco-animate">
            TynkerEdu - học lập trình trực quan đơn giản và thú vị.
          </h2>
          <div className="video d-flex justify-content-center">
            <a
              href="https://vimeo.com/45830194"
              className="button popup-vimeo d-flex justify-content-center align-items-center"
            >
              <span className="ion-ios-play" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
)
export default Leading
