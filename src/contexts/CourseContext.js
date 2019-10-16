import React, { createContext, useReducer, useEffect } from "react";
import axios from "axios";
import { courseReducer } from "../reducer/courses.reducers";
export const CourseContext = createContext({
  data: []
});

const CourseContextProvider = props => {
 
  const [data, setData] = React.useState([]);
  const [course, dispatch] = useReducer(courseReducer, [], () => {
    return data ? data : [];
  });

  useEffect(() => {
    axios
      .get("http://tynkerserver.herokuapp.com/tynkerdhsp/courses")
      .then(res => {
        setData(res);
        console.log(data)
      })
      .catch(err => console.log(err));
  },[course]);

  return (
    <CourseContext.Provider value={{data}}>
      {props.children}
    </CourseContext.Provider>
  );
};

export default CourseContextProvider;