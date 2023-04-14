import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAuthUserDetails } from "../../actions";
import { authTypes } from "../../redux/constants";

export const useDashboardHook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getUserDetails();
  }, []);

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
};
