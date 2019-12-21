import React, { useEffect } from 'react'
import axios from 'axios'
import KhoaHocContent from '../component/KhoaHocContent/KhoaHocContent'
import Introduce from '../component/Introduce/Introduce'

const KhoaHoc = props => {
  const [data, setData] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  useEffect(() => {
    let isSubscribed = true
    axios
      .get('https://tynkerserver.herokuapp.com/tynkerdhsp/courses')
      .then(res => {
        if (isSubscribed) {
          setData(res.data)
          setLoading(false)
        }
      })
      .catch(err => console.log(err))
    return () => (isSubscribed = false)
  })

  return (
    <>
      <Introduce name="Khóa Học" />
      <KhoaHocContent data={data} loading={loading} />
    </>
  )
}

export default KhoaHoc
