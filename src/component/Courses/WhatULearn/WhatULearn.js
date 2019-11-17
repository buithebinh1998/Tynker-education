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
                    Học sinh sẽ được học theo chương trình bản quyền của Tynker, một nền tảng đào tạo lập trình online được sử dụng đào tạo phổ biến tại các trường học trên toàn thế giới.
                    </span>
                  </li>
                  <li className="what-you-get__item what-you-get__item--columns">
                    <img className="iconCheck" alt="icon" src={icon} />
                    <span className="what-you-get__text">
                    Mỗi học sinh sẽ được cấp tài khoản học tập tại Tynker.com
                    </span>
                  </li>
                  <li className="what-you-get__item what-you-get__item--columns">
                    <img className="iconCheck" alt="icon" src={icon} />
                    <span className="what-you-get__text">
                    Trong khoá học, học sinh sẽ được tiếp cận việc học lập trình cùng Minecraft, một sản phẩm giáo dục, vừa học vừa chơi, trong thế giới mở, tạo ra sự hưng phấn học tập và sáng tạo cho mỗi học sinh thông qua việc xây dựng các công trình theo trí tưởng tượng của mình, bằng cách xây các khối kết cấu trong một thế giới 3D như xây dựng thành phố, làng mạc, nhà cửa, tàu chiến, công trình (ví dụ tháp Eiffel, cầu Cổng Vàng, Vạn Lý Trường Thành).
                    </span>
                  </li>
                  <li className="what-you-get__item what-you-get__item--columns">
                    <img className="iconCheck" alt="icon" src={icon} />
                    <span className="what-you-get__text">
                    Nhờ tính xuyên suốt của Minecraft, các bạn nhỏ sẽ hình thành được tư duy thiết kế, tư duy tổng thể và nâng cao năng lực sáng tạo cho bản thân.
                    </span>
                  </li>
                  <li className="what-you-get__item what-you-get__item--columns">
                    <img className="iconCheck" alt="icon" src={icon} />
                    <span className="what-you-get__text">
                    Minecraft được Microsoft mua lại với giá 2,5 tỷ USD và hiện đang được sử dụng giảng dạy cho 50 triệu học sinh và 60 nghìn trường trên toàn thế giới.
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
