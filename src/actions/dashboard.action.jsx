import { axiosApi } from "../axiosApi";

export const doChangeEmail = async (data) => {
  try {
    const response = await axiosApi.post("/v1/user/changeEmail", data);
    //console.log("log Res", response);
    return response?.data;
  } catch (error) {
    const errMsg = error && error.response && error.response.data;
    //console.log("error", errMsg);
    return errMsg;
  }
};

// /v1/user/dashboard
export const doDashboard = async (data) => {
  try {
    const response = await axiosApi.post("/v1/user/dashboard", data);
    //console.log("log Res", response);
    return response?.data;
  } catch (error) {
    const errMsg = error && error.response && error.response.data;
    //console.log("error", errMsg);
    return errMsg;
  }
};
