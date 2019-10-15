import React from "react";
import KhoaHocContent from "../component/KhoaHocContent/KhoaHocContent";
import Introduce from "../component/Introduce/Introduce";
const KhoaHoc = props => {

  return (
    <>
      <Introduce name="Khóa Học" />
      <KhoaHocContent/>
    </>
  );
};

export default KhoaHoc;
