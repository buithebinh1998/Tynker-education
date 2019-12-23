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
const ImageStudent = () => {
    const {imgLink} = props;
    const [loadImageData, setLoadImageData] = React.useState(true)
    const handleLoadImage = () => {
      setLoadImageData(false)
    }
    return (
        <div>
            
        </div>
    )
}

export default ImageStudent
