import React from 'react'
import ContentLoader from 'react-content-loader'
import { C } from '../../constants';

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
const ImageStudent = (props) => {
    const {imgLink, name, role, say} = props;
    const [loadImageData, setLoadImageData] = React.useState(true)
    const handleLoadImage = () => {
      setLoadImageData(false)
    }
    return (
      <div className="col-12 col-md-3 ftco-animate">
      <div className="carousel-testimony owl-carousel">
        <div className="item"> 

          <div className="testimony-wrap text-center">
            {loadImageData ? <MyLoader /> : C.EMPTY_STRING}
          <img src = {`https://drive.google.com/uc?export=view&id=${imgLink}`}  className = "img" alt = {imgLink} onLoad = {handleLoadImage}/ >
            <div
              className="user-img mb-5"
            >
            </div>
            <div className="text">
              <p className="mb-5">
                {say}
              </p>
              <p className="name">{name}</p>
              <span className="position">{role}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default ImageStudent
