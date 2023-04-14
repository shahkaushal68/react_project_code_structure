import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { verifyEmail } from "../redux/actions/authAction";
import { Alert, Spin } from "antd";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setAuthHeader } from "../axiosApi";

const VerifyEmail = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const search = useLocation().search;
  const token = new URLSearchParams(search).get("verityToken");
  //console.log("token", token);

  useEffect(() => {
    const fetchAndSendToken = async (token) => {
      setLoading(true);

      const result = await verifyEmail(token);
      console.log("result", result);
      if (result?.status === 200) {
        setLoading(false);

        localStorage.setItem("_token", result?.data?.token);
        await setAuthHeader(`Bearer ${result?.data?.token}`);
        navigate("/dashboard");
        //navigate(0);

        toast.success("Email successfully verified!");
      } else {
        setLoading(false);
        navigate("/");
        toast.error(result?.message);
      }
      //console.log("result", result);
    };
    fetchAndSendToken(token);
  }, [token, navigate, dispatch]);

  return (
    <div className="container">
      <div className="row verify_email_page">
        <div className="verify_email_loader">
          {loading && (
            <Spin tip="Loading...">
              <Alert
                message="Alert message title"
                description="Further details about the context of this alert."
                type="info"
              />
            </Spin>
          )}
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
