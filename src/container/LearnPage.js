import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import Introduce from '../component/Introduce/Introduce'
import Course from '../component/Courses/Courses'
import { connect } from 'react-redux'
import { C } from '../constants'

const KhoaHoc = props => {
  const [data, setData] = React.useState([])
  const [loading, setLoading] = React.useState(true)
  const { token } = props
  let redirect = !token ? <Redirect to= "/" /> : C.EMPTY_STRING
  
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
      {redirect}
      <Introduce name="Learn" />
      <Course data={data} loading={loading} />
    </>
  )
}
const mapStateToProps = (state, props) => {
  return {
    token: state.auth.token
  }
}

export default connect(mapStateToProps, null)(KhoaHoc)
