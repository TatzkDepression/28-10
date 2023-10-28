import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieService } from "../Service/Service";
import { Progress, Rate } from "antd";

export default function DetailPage() {
  let { id } = useParams();
  const [detail, setdetail] = useState();
  //useState([]) hoặc thêm ? vào
  // ví dụ detail?.hinhAnh
  useEffect(() => {
    movieService
      .getDetail(id)
      .then((res) => {
        console.log(res);
        setdetail(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="container flex items-center">
      {/* {detail.hinhAnh && <img src={detail.hinhAnh} alt="" />} */}
      <img className="mt-2 h-40" src={detail?.hinhAnh} alt="" />
      <Progress
        className=""
        strokeWidth={20}
        strokeColor={"red"}
        format={(number) => {
          return <p className="animate-bounce">{number / 10} Điểm</p>;
        }}
        type="circle"
        percent={detail?.danhGia * 10}
      />
      <Rate disabled value={detail?.danhGia} count={10} />
    </div>
  );
}
