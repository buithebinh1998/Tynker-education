import React from 'react';
import {dataKhoaHoc} from '../../data/dataKhoaHoc';

const KhoaHocContent = props => {
    const renderComponent = (item) => (
        <div className="col-md-4 d-flex ftco-animate">
        <div className="course align-self-stretch">
          <a href="/" className="img" style={{backgroundImage: `url(${item.imglink})`}} />
          <div className="text p-4">
            <p className="category"><span>{item.title}</span> <span className="price">{item.price}</span></p>
            <h3 className="mb-3" align="center"><a href="/">{item.name}</a></h3>
            <p align="justify">{item.description}</p>
            <p><a href="/" className="btn btn-primary">Bắt đầu khóa học!</a></p>
          </div>
        </div>
      </div>
    )
    const renderData = (data) => (data.map((item,idx)=> {
        return renderComponent(item)
    }))

    return(
      <>
          {renderData(dataKhoaHoc)}
      </>
    )
}

export default KhoaHocContent
