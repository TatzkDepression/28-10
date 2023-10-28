import { render } from "@testing-library/react";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import Lottie from "lottie-react";
// import bgAnime from "../LoginPage/bgAnime.json";
export default function Header() {
  let navigate = useNavigate(); //dùng để điều hướng trang
  let { info } = useSelector((state) => state.userReducer);
  let handleLogout = () => {
    /**
     * 1. logout user ra
     * 2. xóa localStorage
     */
    //Cách 1:
    //navigate("/");
    // localStorage.removeItem("USER");
    // cách 2:
    window.location.href = "/";
    localStorage.clear(); //XÓA TOÀN BỘ localStorage
  };
  let renderUserNav = () => {
    if (info) {
      return (
        <>
          {/* <Lottie animationData={bgAnime} loop={true} /> */}
          <span>{info.hoTen}</span>
          <button onClick={handleLogout} className="btn-theme">
            Logout
          </button>
        </>
      );
    }
    return (
      <>
        <button
          onClick={() => {
            navigate("/login");
          }}
          className="btn-theme"
        >
          Login
        </button>
        <button
          onClick={() => {
            navigate("/login");
          }}
          className="btn-theme"
        >
          Register
        </button>
      </>
    );
  };
  return (
    <div className="shadow-lg">
      <div className="container flex justify-between items-center  h-20">
        <span
          onClick={() => {
            navigate("/");
          }}
          className="text-5xl text-red-500 cursor-pointer"
        >
          CyberGV
        </span>
        <nav>{renderUserNav()}</nav>
      </div>
    </div>
  );
}
