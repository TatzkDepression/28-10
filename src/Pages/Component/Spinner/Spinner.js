import React from "react";
import { useSelector } from "react-redux";
import { PacmanLoader } from "react-spinners";

export default function Spinner() {
  let { isLoading } = useSelector((state) => state.spinnerReducer);
  return isLoading ? (
    <div className="h-screen bg-black fixed w-screen z-10 flex justify-center items-center">
      <PacmanLoader color="#36d7b7" size={100} speedMultiplier={1} />
    </div>
  ) : (
    <></>
  );
}
