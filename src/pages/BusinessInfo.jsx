import React from "react";
import "../style/profile.css";
import { Card, Button, Form, Input } from "antd";
import Sidebar from "../components/dashboard/Sidebar";
import { toast } from "react-toastify";
import { doDashboard } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import { authTypes } from "../redux/constants";

//import moment from "moment";

const BusinessInfo = () => {
  const { user = {} } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  //console.log("user", user);

  const onFinish = async (values) => {
    form.resetFields();
    //console.log("Success:", values);

    try {
      let newVal = {
        ...user,
        ...values,
      };
      //console.log("Success:", newVal);
      const userDetails = await doDashboard(values);
      //console.log("userDetails", userDetails);
      if (userDetails?.status === 200) {
        dispatch({
          type: authTypes.USER_ADD,
          payload: newVal,
        });
        toast.success("Successully Added!");
      }
      //console.log("userDetails", businessDetails);
    } catch (error) {
      //console.log("error", error);
      toast.error(error.message);
    }
  };
  const onFinishFailed = (errorInfo) => {
    //console.log("Failed:", errorInfo);
  };
  const [form] = Form.useForm();

  return (
    <div className="dashboard_section">
      <Sidebar />
      <main>
        <Card>
          <div className="userProfileSection">
            <div>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Business Info</h4>
              </div>

              <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item label="Business Name" name="businessName">
                  <Input
                    type="text"
                    name="businessName"
                    placeholder="Enter Name"
                  />
                </Form.Item>
                <Form.Item
                  label="Business Address"
                  name="businessStreetAddress"
                >
                  <Input
                    type="text"
                    name="businessStreetAddress"
                    placeholder="Enter Business Address"
                  />
                </Form.Item>
                <div className="inLineFields">
                  <div className="sameLine">
                    <Form.Item label="Business City" name="businessCity">
                      <Input
                        type="text"
                        name="businessCity"
                        placeholder="Enter Business city"
                      />
                    </Form.Item>
                  </div>
                  <div className="sameLine">
                    <Form.Item label="Business State" name="businessState">
                      <Input
                        type="text"
                        name="businessState"
                        placeholder="Enter Business State"
                      />
                    </Form.Item>
                  </div>
                </div>

                <div className="inLineFields">
                  <div className="sameLine">
                    <Form.Item label="Business ZipCode" name="businessZipCode">
                      <Input
                        type="text"
                        name="businessZipCode"
                        placeholder="Enter Zip code"
                      />
                    </Form.Item>
                  </div>
                  <div className="sameLine">
                    <Form.Item label="BIN/EIN #" name="binEin">
                      <Input
                        type="text"
                        name="binEin"
                        placeholder="Enter binEin"
                      />
                    </Form.Item>
                  </div>
                </div>
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default BusinessInfo;
