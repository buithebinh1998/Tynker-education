import React from "react";
import Introduce from "../component/Introduce/Introduce";
import GiaoVienContent from "../component/GiaoVien/GiaoVien";
const GiaoVien = props => {
  return (
    <>
      <Introduce name="Giáo Viên" />
      <GiaoVienContent />
    </>
  );
};

export default GiaoVien;
