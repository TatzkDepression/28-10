// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import { Toaster } from "react-hot-toast";
import DetailPage from "./Pages/DetailPage/DetailPage";
import Layout from "./layout/Layout";
import Spinner from "./Pages/Component/Spinner/Spinner";
import AdminLayout from "./layout/AdminLayout";
import UserPage from "./Pages/UserPage/UserPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Toaster position="top-center" reverseOrder={false} />
        <Spinner />
        <Routes>
          {/* user root */}
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/detail/:id" element={<DetailPage />} />
          </Route>
          {/* admin root */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="users" element={<UserPage />}></Route>
          </Route>
          <Route path="/Login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
// template
