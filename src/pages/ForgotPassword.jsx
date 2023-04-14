import React from "react";
import { Button, Divider, Form, Input } from "antd";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const [form] = Form.useForm();
  return (
    <div className="login-page">
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
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please enter your email!" }]}
          >
            <Input type="email" placeholder="Email" />
          </Form.Item>
          <div className="inputNote">
            Enter your register email! We will send link for change Password!
          </div>

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
            Remember your Password? <Link to="/">Login</Link>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default ForgotPassword;
