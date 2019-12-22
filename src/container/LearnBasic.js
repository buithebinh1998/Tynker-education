import React, { useEffect } from 'react'
import axios from 'axios'
import Introduce from '../component/Introduce/Introduce'
import LearnBasic from '../component/Courses/LearnBasic/LearnBasic'
import { connect } from 'react-redux'

const KhoaHocBasic = props => {
  const [data, setData] = React.useState([])
  const [loading, setLoading] = React.useState(true)
  const { page } = props
  useEffect(() => {
    let isSubscribed = true
    axios
      .get('http://tynkerserver.herokuapp.com/tynkerdhsp/courses')
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
      <Introduce name="Learn" />
      <LearnBasic data={data} loading={loading} page={page} />
    </>
  )
}
const mapStateToProps = (state, props) => {
  return {
    page: state.pages.find(page => page.id === props.match.params.id)
  }
}
export default connect(mapStateToProps, null)(KhoaHocBasic)
