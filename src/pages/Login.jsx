import React from "react";
import { Button, Divider, Form, Input } from "antd";
import authImage from "../assets/authImage.jpg";
import { Link } from "react-router-dom";
import "../style/login.css";
import { useLoginHook } from "../hooks/auth/loginHook";

const Login = () => {
  const { form, onFinish, onFinishFailed } = useLoginHook();
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
          >
            <p className="form-title">Imperium</p>
            <p>Login to the Dashboard</p>
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please enter your email!" }]}
            >
              <Input type="email" placeholder="Email" />
            </Form.Item>

            <Form.Item
              label="Passowrd"
              name="password"
              rules={[
                { required: true, message: "Please enter your password!" },
              ]}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                LOGIN
              </Button>
            </Form.Item>
            {/* <p className="user-auth-text">
              <Link to="/forgot-password">Forgot Password</Link>
            </p> */}
            <Divider />

            <p className="user-auth-text">
              You haven't register yet? <Link to="/register">Register</Link>
            </p>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Login;
