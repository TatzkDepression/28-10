import React, { useEffect, useState } from "react";
import { movieService } from "../../Service/Service";

import { ConfigProvider, Tabs } from "antd";
import moment from "moment/moment";
const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: "1",
    label: "Tab 1",
    children: "Content of Tab Pane 1",
  },
  {
    key: "2",
    label: "Tab 2",
    children: "Content of Tab Pane 2",
  },
  {
    key: "3",
    label: "Tab 3",
    children: "Content of Tab Pane 3",
  },
];
export default function TabMovie() {
  const [heThongRap, setHeThongRap] = useState([]);
  useEffect(() => {
    movieService
      .getMovieByTheater()
      .then((res) => {
        setHeThongRap(res.data.content);
        // console.log(res);
      })
      .catch((err) => {
        // console.log(err);
      });
  }, []);
  let renderHeThongRap = () => {
    return heThongRap.map((heThong, index) => {
      return {
        key: heThong.maHeThongRap,
        label: <img className="w-16" src={heThong.logo}></img>,
        children: (
          <Tabs
            style={{
              height: 500,
            }}
            tabPosition="left"
            items={heThong.lstCumRap.map((cumRap) => {
              return {
                key: cumRap.tenCumRap,
                label: (
                  <div className="text-left w-96 whitespace-normal">
                    <p>{cumRap.tenCumRap}</p>
                    <p>{cumRap.diaChi}</p>
                  </div>
                ),
                children: (
                  <div
                    style={{
                      height: 500,
                      overflowY: "scroll",
                    }}
                  >
                    {renderDanhSachPhim(cumRap)}
                  </div>
                ),
              };
            })}
          />
        ),
      };
    });
  };
  let renderDanhSachPhim = (cumRap) => {
    return cumRap.danhSachPhim.map((phim) => {
      return (
        <div className="flex gap-2 space-x-3 mb-2">
          <img className="w-20 h-32 object-cover  " src={phim.hinhAnh} alt="" />
          <div>
            <h3 className="font-medium">{phim.tenPhim}</h3>
            <div className="grid grid-cols-3 gap-3">
              {phim.lstLichChieuTheoPhim.splice(0, 6).map((lichChieu) => {
                return (
                  <span className="rounded  bg-red-500 px-2 py-1 text-white">
                    {moment(lichChieu.ngayChieuGioChieu).format(
                      "DD/MM/YYYY - HH:MM"
                    )}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <div className="py-20">
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#fb858",
          },
        }}
      >
        <Tabs
          style={{
            height: 500,
          }}
          tabPosition="left"
          defaultActiveKey="1"
          items={renderHeThongRap()}
          onChange={onChange}
        />
      </ConfigProvider>
    </div>
  );
}
