import React from "react";
import "../style/signUpSuccess.css";
import { Link } from "react-router-dom";
import { SmileOutlined } from "@ant-design/icons";

const SignUpSuccess = () => {
  return (
    <div className="thankyou-page">
      <div className="_header">
        <div className="thankyou-page-logo">
          <SmileOutlined />
        </div>
        <h1>Thank you for Registration!</h1>
      </div>
      <div className="_body">
        <div className="_box">
          <h2>
            <strong>Please check your email</strong> We’ve sent a message to
            your mail with a link to activate your account.
          </h2>
          <p>
            Thanks a bunch for filling that out. It means a lot to us, just like
            you do! We really appreciate you giving us a moment of your time
            today. Thanks for being you.
          </p>
        </div>
      </div>
      <div className="_footer">
        <p>Didn’t get an email? Check your spam folder!</p>
        <Link className="btn" to="/">
          Back to Login
        </Link>
      </div>
    </div>
  );
};

export default SignUpSuccess;
