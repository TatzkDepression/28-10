import { https } from "./Config";

export let userService = {
  login: (valueForm) => {
    return https.post("/api/QuanLyNguoiDung/DangNhap", valueForm);
  },
};
export let movieService = {
  getList: () => {
    return https.get("/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01");
  },
  getDetail: (id) => {
    return https.get(`/api/QuanLyPhim/LayThongTinPhim?maPhim=${id}`);
  },
  getMovieByTheater: () => {
    return https.get("/api/QuanLyRap/LayThongTinLichChieuHeThongRap");
  },
};
export let adminService = {
  getUserList: () => {
    return https.get("/api/QuanLyNguoiDung/LayDanhSachNguoiDung");
  },
};
