import React from "react";
import { Button, Divider, Form, Input } from "antd";
import { Link } from "react-router-dom";

const NewPassword = () => {
  //const navigate = useNavigate();
  const onFinish = async (values) => {
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
          <p>Enter New Password</p>

          <Form.Item
            label="Enter Password"
            name="password"
            rules={[{ required: true, message: "Please enter your password!" }]}
          >
            <Input.Password placeholder="Password" />
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
        </Form>
      </div>
    </div>
  );
};

export default NewPassword;
