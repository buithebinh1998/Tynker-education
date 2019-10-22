import React, { useEffect} from "react";
import WhatYouLearn from "../component/Courses/CoursesContent";
import axios from "axios";
import Introduce from "../component/Introduce/Introduce";

const KhoaHoc = props => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    let isSubscribed = true;
    axios
      .get("http://tynkerserver.herokuapp.com/tynkerdhsp/courses")
      .then(res => {
        if (isSubscribed) {
          setData(res.data);
          setLoading(false);
        }
      })
      .catch(err => console.log(err));
    return () => (isSubscribed = false);
  });
  
  return (
    <>
      <Introduce name="Learn" />
      <WhatYouLearn data={data} loading={loading} />
    </>
  );
};

export default KhoaHoc;
