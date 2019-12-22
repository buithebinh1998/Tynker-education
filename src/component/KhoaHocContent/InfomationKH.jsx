import React from 'react'
import { NavLink } from 'react-router-dom'
import {C} from '../../constants/index'
import ContentLoader from 'react-content-loader'
const MyLoader = () => (
  <ContentLoader
    height={600}
    speed={1}
    primaryColor="rgba(0,0,0,0.06)"
    secondaryColor="#ecebeb"
    animate={true}
  >
    <rect x="0" y="0" rx="4" ry="4" width="100%" height="70%" />
    <rect x="0" y="430" rx="4" ry="4" width="50%" height="3%" />
    <rect x="80" y="460" rx="4" ry="4" width="50%" height="3%" />
    <rect x="0" y="490" rx="4" ry="4" width="100%" height="10" />
    <rect x="0" y="510" rx="4" ry="4" width="100%" height="10" />
    <rect x="0" y="530" rx="4" ry="4" width="100%" height="10" />
    <rect x="0" y="550" rx="4" ry="4" width="100%" height="10" />
    <rect x="0" y="570" rx="4" ry="4" width="100%" height="10" />
    <rect x="0" y="590" rx="4" ry="4" width="100%" height="10" />
  </ContentLoader>
)
const InfomationKH = props => { 
  const { item, idx, loading } = props
  const [loadImageKH, setLoadImageKH] = React.useState(true)
  const handleLoadImage = () => {
    setLoadImageKH(false)
  }
  return (
    <div className="col-md-4 d-flex ftco-animate" key={idx}>
        
      <div className="course">
      {loading || loadImageKH ? <MyLoader /> : C.EMPTY_STRING}
        <img
          alt={item.imgLink}
          className={`${loadImageKH? "hide-img" : "show-img"}`}
          src={`https://drive.google.com/uc?export=view&id=${item.imgLink}`}
          onLoad={handleLoadImage}
        />{' '}
        {!loading && !loadImageKH ? (
          <div className="text p-4">
            <p className="category">
              <span>{item.title}</span>{' '}
              <span className="price">{item.price}</span>
            </p>
            <h3 className="mb-3" align="center">
              <NavLink to="/">{item.name}</NavLink>
            </h3>
            <p align="justify">{item.description}</p>
          </div>
        ) : (
          C.EMPTY_STRING
        )}
      </div>
    </div>
  )
}

export default InfomationKH
