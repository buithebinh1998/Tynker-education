import React,{useEffect} from "react";
import Introduce from "../component/Introduce/Introduce";
import GiaoVienContent from "../component/GiaoVien/GiaoVien";
import axios from "axios";

const GiaoVien = props => {
  const [data, setData] = React.useState([]);
  const [loading,setLoading] = React.useState(true);
  useEffect(() => {
    axios
      .get("http://tynkerserver.herokuapp.com/tynkerdhsp/teacher")
      .then(res => {setData(res.data)
        setLoading(false);
      })
      .catch(err => console.log(err));
  });
  return (
    <>
      <Introduce name="Giáo Viên" />
      <GiaoVienContent data = {data} loading = {loading}/>
    </>
  );
};

export default GiaoVien;
