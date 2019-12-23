import React from 'react'
import ContentLoader from 'react-content-loader'
import { C } from '../../constants'

const MyLoader = () => (
  <ContentLoader
    height={350}
    speed={1}
    primaryColor="rgba(0,0,0,0.06)"
    secondaryColor="#ecebeb"
    animate={true}
  >
    <rect x="0" y="0" rx="4" ry="4" width="100%" height="100%" />
  </ContentLoader>
)
const LoadIcon = () => (
  <ContentLoader
  height = {100}
  speed={1}
  primaryColor="rgba(0,0,0,0.06)"
  secondaryColor="#ecebeb"
  animate={true}
>
<circle cx="100" cy="50" r="40" /> 
</ContentLoader>
)
const ImageIntroduction = props => {
  const { imgLink,loadicon } = props
  const [loadImageData, setLoadImageData] = React.useState(true)
  const handleLoadImage = () => {
    setLoadImageData(false)
  }
  let classImage = C.EMPTY_STRING ;
  if (loadImageData) {
    classImage = !loadicon ? "hide-img" : "hide-icon"
  } else {
    if (loadicon) {
      classImage = "show-icon"
    }
    else {
      classImage = "show-img"
    }
  }
  return (
    <>
    
      <div className="col-md-6 d-flex ftco-animate">
        <div className = "introduce">
        {loadImageData && !loadicon ? <MyLoader /> : C.EMPTY_STRING}
        {loadImageData && loadicon ? <LoadIcon /> : C.EMPTY_STRING}
        <img
          className={classImage}
          src={`https://drive.google.com/uc?export=view&id=${imgLink}`}
          onLoad={handleLoadImage}
          alt = {imgLink}
        />
      </div>
        </div>
      
    </>
  )
}

export default ImageIntroduction
