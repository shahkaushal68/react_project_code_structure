import React from "react";
import { Button, Divider, Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { authTypes } from "../redux/constants";
import { doChangeEmail } from "../actions";
import UserTabs from "../components/dashboard/UserTabs";
import UserAdmin from "../components/dashboard/UserAdmin";
import HeaderAdmin from "../components/dashboard/HeaderAdmin";
import Sidebar from "../components/dashboard/Sidebar";

const EmailReset = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onFinish = async (values) => {
    console.log("Success:", values);
    // try {
    const resetemail = await doChangeEmail(values);
    console.log("resetemail", resetemail);
    if (resetemail?.status === 200) {
      //navigate("/dashboard");
      //navigate(0);
      navigate("/register-success");
      dispatch({
        type: authTypes.USER_ADD,
        payload: null,
      });
      localStorage.removeItem("_token");
    } else {
      toast.error(resetemail?.message);
    }
    // } catch (error) {
    //   //console.log("error", error);
    //   toast.error(error?.response?.data?.message);
    // }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const [form] = Form.useForm();
  return (
    <div className="dashboard_section">
      <Sidebar />
      <main>
        <HeaderAdmin />
        <UserAdmin />
        {/* main content*/}
        <div className="wrapper">
          <UserTabs />
          <div className="container">
            <div className="login-box">
              <Form
                form={form}
                layout="vertical"
                id="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <p>Change Email</p>

                <Form.Item
                  label="Enter Password"
                  name="password"
                  rules={[
                    { required: true, message: "Please enter your password!" },
                  ]}
                >
                  <Input.Password placeholder="Password" />
                </Form.Item>

                <Form.Item
                  label="Email"
                  name="newEmail"
                  rules={[
                    { required: true, message: "Please enter your email!" },
                  ]}
                >
                  <Input type="email" placeholder="Email" />
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                  >
                    Submit
                  </Button>
                </Form.Item>
                <Divider />
                <p className="user-auth-text">
                  Change Mind? <Link to="/dashboard">Dashboard</Link>
                </p>
              </Form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EmailReset;
