import { useNavigate } from "react-router-dom";
import { doRegister } from "../../actions";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { Form } from "antd";

export const useRegisterHook = () => {
  const navigate = useNavigate();

  //const navigate = useNavigate();
  const onFinish = async (values) => {
    //console.log("Success:", values);
    const registerResponse = await doRegister({
      email: values?.email,
      password: values?.password,
    });
    //console.log("registerRes", registerResponse);
    if (registerResponse?.status === 200) {
      navigate("/register-success");
      form.resetFields();
    } else {
      toast.error(registerResponse?.message);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    const token = localStorage.getItem("_token");
    token && navigate("/dashboard");
  }, [navigate]);

  const [form] = Form.useForm();
  return { form, onFinish, onFinishFailed };
};
