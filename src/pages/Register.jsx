import React from "react";
import { Button, Divider, Form, Input } from "antd";

import "../style/login.css";

import authImage from "../assets/authImage.jpg";
import { Link } from "react-router-dom";
import { useRegisterHook } from "../hooks/auth/RegisterHook";
//import { useDispatch } from "react-redux";

const Register = () => {
  const { form, onFinish, onFinishFailed } = useRegisterHook();
  return (
    <>
      <div className="login-page">
        <div className="login-box">
          <div className="illustration-wrapper">
            <img src={authImage} alt="Login" />
          </div>
          <Form
            form={form}
            id="login-form"
            layout="vertical"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <p className="form-title">WelCome</p>
            <p>Register to the Dashboard</p>
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please enter your email!" }]}
            >
              <Input type="email" placeholder="Email" />
            </Form.Item>
            <div className="inputNote">
              We never share your email with anyone!
            </div>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please enter your password!" },
                { min: 8, message: "Password must be minimum 8 characters." },
                { max: 12, message: "Password must be Maximum 12 characters." },
                {
                  pattern:
                    "(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*., ?])",
                  message: `Please enter password in correct format`,
                },
              ]}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>
            <div className="inputNote">
              Password must be 8-12 characters, include at least one uppercase &
              lowercase letter, number and special character.
            </div>
            <Form.Item
              label="Confirm Password"
              name="confirm"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
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
                REGISTER
              </Button>
            </Form.Item>
            <Divider />
            <p className="user-auth-text">
              Already register? <Link to="/">Login</Link>
            </p>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Register;
