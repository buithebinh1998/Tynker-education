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
                  What you'll learn
                </div>
                <ul className="what-you-get__items unstyled-list">
                  <li className="what-you-get__item what-you-get__item--columns">
                    <img className="iconCheck" alt="icon" src={icon} />
                    <span className="what-you-get__text">
                      Cutting-edge React Development with React Hooks :
                      useState, useEffect and your own custom hooks
                    </span>
                  </li>
                  <li className="what-you-get__item what-you-get__item--columns">
                    <img className="iconCheck" alt="icon" src={icon} />
                    <span className="what-you-get__text">
                      Build a Complete Pizza Ordering Application for
                      Customizing Restaurant Orders and Emailing Users
                    </span>
                  </li>
                  <li className="what-you-get__item what-you-get__item--columns">
                    <img className="iconCheck" alt="icon" src={icon} />
                    <span className="what-you-get__text">
                      Beautiful UI Development from Scratch with Food Grids,
                      Popup Dialogs, Buttons, Input Controls and more
                    </span>
                  </li>
                  <li className="what-you-get__item what-you-get__item--columns">
                    <img className="iconCheck" alt="icon" src={icon} />
                    <span className="what-you-get__text">
                      Styled-components : The hottest CSS-in-JS library
                      featuring CSS animations and extendable component styling
                    </span>
                  </li>
                  <li className="what-you-get__item what-you-get__item--columns">
                    <img className="iconCheck" alt="icon" src={icon} />
                    <span className="what-you-get__text">
                      Authenticate Users with Google to Login and Logout
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
