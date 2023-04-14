import { axiosApi } from "../axiosApi";

export const doLogin = async (data) => {
  //console.log("do login data", data);
  try {
    const response = await axiosApi.post("/v1/user/login", data);
    //console.log("log Res", response);
    return response?.data;
  } catch (error) {
    const errMsg = error && error.response && error.response.data;
    //console.log("error", errMsg);
    return errMsg;
  }
};

export const doRegister = async (data) => {
  try {
    const response = await axiosApi.post("/v1/user/register", data);
    return response?.data;
  } catch (error) {
    const errMsg = error && error.response && error.response.data;
    return errMsg;
  }
};

export const getAuthUserDetails = async () => {
  try {
    const response = await axiosApi.get("/v1/user/user-details");
    //console.log("log Res", response);
    return response?.data;
  } catch (error) {
    const errMsg = error && error.response && error.response.data;
    return errMsg;
  }
};

export const doVerifyToken = async (data) => {
  try {
    const response = await axiosApi.post("/v1/user/verifyToken", data);
    console.log("log Res", response);
    //const { data } = response?.data;
    localStorage.setItem("_token", `${response?.data?.token}`);
    return response?.data;
  } catch (error) {
    console.log("error", error);
    const errMsg = error && error.response && error.response.data;
    return errMsg;
  }
};

// resetPassword
export const doResetPassword = async (data) => {
  try {
    const response = await axiosApi.post("/v1/user/resetPassword", data);
    console.log("log Res", response);
    return response?.data;
  } catch (error) {
    console.log("error", error);
    const errMsg = error && error.response && error.response.data;
    return errMsg;
  }
};
