import React from 'react'
import './WhatULearn.scss'
import icon from '../../../assets/icon/check.svg'

const WhatULearn = () => {
  return (
    <div className="component-margin">
      <div className="clp-component-render">
        <span id="objective" className="in-page-offset-anchor" />
        <div className="what-you-get">
          <div
            className="js-simple-collapse js-simple-collapse--what-you-get"
            data-purpose="course-objectives"
            data-more="See more"
          >
            <div className="js-simple-collapse-inner">
              <div className="what-you-get__content">
                <div className="what-you-get__title udlite-heading-xl">
                  {' '}
                  MÔ TẢ KHOÁ HỌC
                </div>
                <ul className="what-you-get__items unstyled-list">
                  <li className="what-you-get__item what-you-get__item--columns">
                    <img className="iconCheck" alt="icon" src={icon} />
                    <span className="what-you-get__text">
                    Học sinh sẽ được học lập trình trực quan theo chương trình Tin học phổ thông tổng thể mới bằng Tynker, một nền tảng đào tạo lập trình online được sử dụng đào tạo phổ biến tại các trường học trên toàn thế giới.
                    </span>
                  </li>
                  <li className="what-you-get__item what-you-get__item--columns">
                    <img className="iconCheck" alt="icon" src={icon} />
                    <span className="what-you-get__text">
                    Phương pháp dạy học STEAM được áp dụng xuyên suốt các bài giảng của khóa học.
                    </span>
                  </li>
                  <li className="what-you-get__item what-you-get__item--columns">
                    <img className="iconCheck" alt="icon" src={icon} />
                    <span className="what-you-get__text">
                    Trong khoá học, học sinh có thể sáng tạo ra các sản phẩm phần mềm, các ứng dụng, câu chuyện, trò chơi của chính mình.
                    </span>
                  </li>
                  <li className="what-you-get__item what-you-get__item--columns">
                    <img className="iconCheck" alt="icon" src={icon} />
                    <span className="what-you-get__text">
                    Nhờ tính xuyên suốt của khóa học, các bạn nhỏ sẽ hình thành được tư duy thiết kế, tư duy tổng thể và nâng cao năng lực sáng tạo cho bản thân.
                    </span>
                  </li>
                  <li className="what-you-get__item what-you-get__item--columns">
                    <img className="iconCheck" alt="icon" src={icon} />
                    <span className="what-you-get__text">
                    Các kiến thức khoa học, tự nhiên, xã hội được lồng ghép gây ra hứng thú cho học sinh. 
                    </span>
                  </li>
                  <li className="what-you-get__item what-you-get__item--columns">
                    <img className="iconCheck" alt="icon" src={icon} />
                    <span className="what-you-get__text">
                    Các sản phẩm vừa áp dụng kiến thức tin học, vừa lấy ví dụ cho các kiến thức khoa học, xã hội, tự nhiên học sinh mới được học.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhatULearn
