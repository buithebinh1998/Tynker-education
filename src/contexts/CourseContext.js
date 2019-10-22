import React, { createContext, useReducer, useEffect } from "react";
import axios from "axios";
import { courseReducer } from "../reducer/courses.reducers";
export const CourseContext = createContext({});

const CourseContextProvider = props => {
 
  const [dataAPI, setData] = React.useState([]);
  const [data, dispatch] = useReducer(courseReducer, [], () => {
    return dataAPI ? dataAPI : [];
  });

  useEffect( () => {
     axios
      .get("http://tynkerserver.herokuapp.com/tynkerdhsp/courses")
      .then(res => {
        setData(res);
      })
      .catch(err => console.log(err));
      dispatch({type: 'SET',payload : dataAPI})
    }
  );
  // console.log(data);

  return (
    <CourseContext.Provider value={{data,dispatch}}>
      {props.children}
    </CourseContext.Provider>
  );
};

export default CourseContextProvider;