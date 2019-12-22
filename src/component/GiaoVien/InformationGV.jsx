import React from 'react'
import PropTypes from 'prop-types'
import { C } from '../../constants/index'
import ContentLoader from 'react-content-loader'
const propsTypes = {
  item: PropTypes.object
}
const defaultProps = {
  item: C.EMPTY_OBJECT
}
const MyLoader = () => (
  <ContentLoader
    height={160}
    speed={1}
    primaryColor="rgba(0,0,0,0.06)"
    secondaryColor="#ecebeb"
    animate={true}
  >
    <rect x="120" y="15" rx="4" ry="4" width="80%" height="10%" />
    <rect x="120" y="35" rx="3" ry="3" width="20%" height="8%" />
    <circle cx="50" cy="50" r="50" />
    <circle cx="140" cy="72" r="18" />
  </ContentLoader>
)

const InformationGV = props => {
  const { item, idx, loading } = props
  const [loadImage, setLoadImage] = React.useState(true)
  const handleLoadImage = () => {
    setLoadImage(false)
  }
  return (
    <div className="col-lg-4 mb-sm-4 ftco-animate" key={idx}>
      <div className="staff">
        {loading || loadImage ? <MyLoader /> : C.EMPTY_STRING}
        <div className="d-flex mb-4">
          <img
            className={`${loadImage? "hide-img" : "show-img"}`}
            src={`https://drive.google.com/uc?export=view&id=${item.imgLink}`}
            onLoad={handleLoadImage}
            alt = {item.imgLink}
          />
          {!loading && !loadImage ? (
            <div className="info ml-3">
              <h3>{item.name}</h3>
              <span className="position">{item.role}</span>
              <p className="ftco-social d-flex">
                <a
                  href={`${item.fbLink}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-flex justify-content-center align-items-center"
                >
                  <span className="icon-facebook" />
                </a>
              </p>
            </div>
          ) : (
            C.EMPTY_STRING
          )}
        </div>
      </div>
    </div>
  )
}

InformationGV.propTypes = propsTypes
InformationGV.defaultProps = defaultProps

export default InformationGV
