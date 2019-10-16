import React, { useEffect,useContext } from "react";
import KhoaHocContent from "../component/KhoaHocContent/KhoaHocContent";
import axios from "axios";
import Introduce from "../component/Introduce/Introduce";

import CourseContextProvider from '../contexts/CourseContext';
import {CourseContext} from '../contexts/CourseContext';
const KhoaHoc = props => {
  
  console.log(useContext(CourseContext))
  const {courses} = React.useContext(CourseContext);
  const [loading, setLoading] = React.useState(true);
  if(courses){
    setLoading(false);
  }
  // useEffect(() => {
  //   axios
  //     .get("http://tynkerserver.herokuapp.com/tynkerdhsp/courses")
  //     .then(res => {
  //       setData(res.data);
  //       setLoading(false);
  //     })
  //     .catch(err => console.log(err));
  // });
  console.log(courses)
  return (
    <CourseContextProvider>
      <Introduce name="Khóa Học" />
      <KhoaHocContent data={courses} loading={loading} />
    </CourseContextProvider>
  );
};

export default KhoaHoc;
