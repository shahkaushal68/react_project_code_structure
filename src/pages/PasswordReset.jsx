import React from "react";
import { Button, Divider, Form, Input } from "antd";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { doResetPassword } from "../actions";
import UserTabs from "../components/dashboard/UserTabs";
import UserAdmin from "../components/dashboard/UserAdmin";
import HeaderAdmin from "../components/dashboard/HeaderAdmin";
import Sidebar from "../components/dashboard/Sidebar";

const PasswordReset = () => {
  const onFinish = async (values) => {
    const resetPass = await doResetPassword({
      oldPassword: values?.oldPassword,
      newPassword: values?.newPassword,
    });
    console.log("resetPassword", resetPass);
    if (resetPass?.status === 200) {
      localStorage.setItem("_token", resetPass?.data?.token);
      toast.success("Password successfully reset!");
      form.resetFields();
    } else {
      toast.error(resetPass?.message);
    }
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
                <p>Password reset</p>
                <Form.Item
                  label="Current Password"
                  name="oldPassword"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your current password!",
                    },
                  ]}
                >
                  <Input.Password placeholder="Current Password" />
                </Form.Item>

                <Form.Item
                  label="New Password"
                  name="newPassword"
                  rules={[
                    { required: true, message: "Please enter your password!" },
                    {
                      min: 8,
                      message: "Password must be minimum 8 characters.",
                    },
                    {
                      max: 12,
                      message: "Password must be Maximum 12 characters.",
                    },
                    {
                      pattern:
                        "(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*., ?])",
                      message: `Please enter password in correct format`,
                    },
                  ]}
                >
                  <Input.Password placeholder="Password" />
                </Form.Item>

                <Form.Item
                  label="Reenter New Password"
                  name="confirm"
                  dependencies={["newPassword"]}
                  hasFeedback
                  rules={[
                    {
                      required: true,
                      message: "Please confirm your password!",
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("newPassword") === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          new Error(
                            "The two passwords that you entered do not match!"
                          )
                        );
                      },
                    }),
                  ]}
                >
                  <Input.Password />
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

export default PasswordReset;
