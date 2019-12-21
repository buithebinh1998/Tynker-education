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
      <rect x="80" y="2" rx="5" ry="5" width="50%" height="10%" />
      <rect x="20" y="20" rx="5" ry="5" width="80%" height="90%" />
    </ContentLoader>
  )
  
const InformationGV = props => {
  const { item, idx} = props
  const [loadImage,setLoadImage] = React.useState(true);
  const [loadData, setLoadData] = React.useState(true)
  const handleLoadImage = () => {
    setLoadImage(false);
  } 
  return (
    <div className="col-lg-4 mb-sm-4 ftco-animate" key={idx}>
      <div className="staff">
        <div className="d-flex mb-4">
          <img className="img" src={`https://drive.google.com/uc?export=view&id=${item.imgLink}`} onLoad ={handleLoadImage} />
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
        </div>
        <div className="text">
          <p>{item.description}</p>
        </div>
      </div>
    </div>
  )
}

InformationGV.propTypes = propsTypes
InformationGV.defaultProps = defaultProps

export default InformationGV
