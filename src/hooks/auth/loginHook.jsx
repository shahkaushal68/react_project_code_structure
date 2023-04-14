import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { doLogin, getAuthUserDetails } from "../../actions";
import { setAuthHeader } from "../../axiosApi";
import { useEffect } from "react";
import { Form } from "antd";
import { authTypes } from "../../redux/constants";
import { toast } from "react-toastify";

export const useLoginHook = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onFinish = async (values) => {
    //console.log("Success:", values);
    const loginResponse = await doLogin({
      email: values?.email,
      password: values?.password,
    });
    //console.log("loginResponse", loginResponse);
    if (loginResponse?.status === 200) {
      //console.log("loginUser", loginUser);
      localStorage.setItem("_token", loginResponse?.data?.token);

      await setAuthHeader(`Bearer ${loginResponse?.data?.token}`);
      await getUserDetails();
      navigate("/dashboard");
      //navigate(0);
      toast.success("Login Successfully!");
    } else {
      toast.error(loginResponse?.message);
    }
  };

  const getUserDetails = async () => {
    try {
      const res = await getAuthUserDetails("/v1/user/user-Details");
      //console.log("res", res);
      if (res?.status === 200) {
        //console.log("res", res);
        dispatch({
          type: authTypes.USER_ADD,
          payload: res?.data,
        });
      } else {
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    const token = localStorage.getItem("_token");
    token && navigate("/dashboard");
  }, [navigate]);

  return { form, onFinish, onFinishFailed };
};
