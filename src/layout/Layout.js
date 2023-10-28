import React from "react";
import Header from "../Pages/Component/Header";
import Footer from "../Pages/Component/Footer/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen  flex flex-col ">
      <Header />
      <div className="flex-grow ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
