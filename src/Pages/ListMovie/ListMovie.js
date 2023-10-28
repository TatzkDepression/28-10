import React, { useEffect, useState } from "react";
import { movieService } from "../Service/Service";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import { NavLink, useParams } from "react-router-dom";

export default function ListMovie() {
  const [list, setList] = useState([]);
  useEffect(() => {
    movieService
      .getList()
      .then((res) => {
        // console.log(res);
        setList(res.data.content);
      })
      .catch((err) => {
        // console.log(err);
      });
  }, []);
  let renderList = () => {
    return list.map(({ hinhAnh, tenPhim, moTa, maPhim }, index) => {
      return (
        <Card
          key={index}
          hoverable
          style={{
            width: 240,
          }}
          cover={
            <img className="object-cover h-40" alt="example" src={hinhAnh} />
          }
        >
          <Meta title={tenPhim} />
          <NavLink
            className="mt-2 h-10 leading-10 text-center w-full rounded bg-red-600 text-white block "
            to={`/detail/${maPhim}`}
          >
            Xem Phim
          </NavLink>
        </Card>
      );
    });
  };

  return <div className="grid grid-cols-5 gap-10 pt-20">{renderList()}</div>;
}
// card antd
