import React from "react";
import { Button, Checkbox, Form, Input, message } from "antd";
import { userService } from "../Service/Service";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SET_INFO } from "../../Redux/constant/user";
import Lottie from "lottie-react";
import bgAnime from "./bgAnime.json";
const LoginPage = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const onFinish = (values) => {
    userService
      .login(values)
      .then((res) => {
        dispatch({
          type: SET_INFO,
          payload: res.data.content,
        });
        localStorage.setItem("USER", JSON.stringify(res.data.content));
        console.log(res);
        setTimeout(() => {
          navigate("/");
        }, 2000);
        toast.success("Đăng nhập thành công");
      })
      .catch((err) => {
        console.log(err);
        toast.error(
          "Thật vô nghĩa! biết trước có kết quả như vậy thì đừng bấm ĐĂNG NHẬP"
        );
      });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="h-screen flex justify-center items-center bg-orange-500">
      <div className="w-1/2 h-full">
        <Lottie animationData={bgAnime} loop={true} />
      </div>
      <div className="w-1/2 p-10 bg-white rounded">
        <Form
          layout="vertical"
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 24,
          }}
          //   style={{
          //     maxWidth: 600,
          //   }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="taikhoan"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="matkhau"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              // offset: 8,
              span: 24,
            }}
          >
            <Button
              className="bg-orange-500 hover:bg-orange-300 text-black"
              type="primary"
              htmlType="submit"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default LoginPage;
