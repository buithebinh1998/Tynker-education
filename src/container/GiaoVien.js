import React, { useEffect } from 'react'
import axios from 'axios'
import Introduce from '../component/Introduce/Introduce'
import GiaoVienContent from '../component/GiaoVien/GiaoVien'

const GiaoVien = () => {
  const [data, setData] = React.useState([])
  const [loading, setLoading] = React.useState(true)
  useEffect(() => {
    let isSubscribed = true
    axios
      .get('https://tynkerserver.herokuapp.com/tynkerdhsp/teacher')
      .then(res => {
        if (isSubscribed) {
          setData(res.data)
          setLoading(false)
        }
      })
      .catch(err => console.log(err))
    return () => (isSubscribed = false)
  }, [])

  // useEffect(()=> {
  //   return ()=>{}
  // },[])
  return (
    <>
      <Introduce name="Giáo Viên" />
      <GiaoVienContent data={data} loading={loading} />
    </>
  )
}

export default GiaoVien
