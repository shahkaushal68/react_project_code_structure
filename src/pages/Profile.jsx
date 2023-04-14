import React from "react";
import "../style/profile.css";
import { Card, Button, Form, Input, DatePicker } from "antd";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";
import { authTypes } from "../redux/constants";
import { doDashboard } from "../actions";
import Sidebar from "../components/dashboard/Sidebar";
import HeaderAdmin from "../components/dashboard/HeaderAdmin";
import UserAdmin from "../components/dashboard/UserAdmin";
import UserTabs from "../components/dashboard/UserTabs";

//import moment from "moment";

const Profile = () => {
  const { user = {} } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  //console.log("user", user);

  const onFinish = async (values) => {
    form.resetFields();
    try {
      //console.log("Success:", values);
      let newVal = {
        ...user,
        ...values,
      };
      //console.log("new Val", newVal);
      const userDetails = await doDashboard(values);
      //console.log("userDetails", userDetails);
      if (userDetails?.status === 200) {
        dispatch({
          type: authTypes.USER_ADD,
          payload: newVal,
        });
        toast.success("User Profile Edit successfully!");
      }
    } catch (error) {
      console.log("error", error);
      toast.error(error.message);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  // eslint-disable-next-line arrow-body-style
  const disabledDate = (current) => {
    return current && current.valueOf() > Date.now();
  };

  const [form] = Form.useForm();

  return (
    <div className="dashboard_section">
      <Sidebar />
      <main>
        <HeaderAdmin />
        <UserAdmin />
        {/* main content*/}
        <div className="wrapper">
          <UserTabs />
          <div className="container">
            <div className="row userDetails">
              <Card>
                <div className="userProfileSection">
                  <div>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h4 className="text-right">Profile Settings</h4>
                    </div>

                    <Form
                      form={form}
                      layout="vertical"
                      onFinish={onFinish}
                      onFinishFailed={onFinishFailed}
                      autoComplete="off"
                      fields={[
                        {
                          name: ["firstName"],
                          value: user?.firstName || "",
                        },
                        {
                          name: ["lastName"],
                          value: user?.lastName || "",
                        },
                        {
                          name: ["streetAddress"],
                          value: user?.streetAddress || "",
                        },
                        {
                          name: ["city"],
                          value: user?.city || "",
                        },
                        {
                          name: ["state"],
                          value: user?.state || "",
                        },
                        {
                          name: ["zipCode"],
                          value: user?.zipCode || "",
                        },
                        {
                          name: ["phoneNumber"],
                          value: user?.phoneNumber || "",
                        },
                        {
                          name: ["driverLicenseId"],
                          value: user?.driverLicenseId || "",
                        },
                        {
                          name: ["driverLicenseState"],
                          value: user?.driverLicenseState || "",
                        },
                        {
                          name: ["birthDate"],
                          value: user?.birthDate
                            ? dayjs(user?.birthDate, "YYYY/MM/DD HH:mm:ss")
                            : "",
                        },
                        {
                          name: ["lastFourDigitOfSsn"],
                          value: user?.lastFourDigitOfSsn || "",
                        },
                      ]}
                    >
                      <div className="inLineFields">
                        <div className="sameLine">
                          <Form.Item
                            label="First name"
                            name="firstName"
                            rules={[
                              {
                                required: true,
                                message: "Please enter your firstname!",
                              },
                            ]}
                          >
                            <Input
                              type="text"
                              name="firstName"
                              placeholder="Enter First Name"
                            />
                          </Form.Item>
                        </div>
                        <div className="sameLine">
                          <Form.Item
                            label="Last name"
                            name="lastName"
                            rules={[
                              {
                                required: true,
                                message: "Please enter your lastname!",
                              },
                            ]}
                          >
                            <Input
                              type="text"
                              name="lastName"
                              placeholder="Enter Last Name"
                            />
                          </Form.Item>
                        </div>
                      </div>
                      <Form.Item
                        label="Street Address"
                        name="streetAddress"
                        rules={[
                          {
                            required: true,
                            message: "Please enter address!",
                          },
                        ]}
                      >
                        <Input
                          type="text"
                          name="streetAddress"
                          placeholder="Enter street Address"
                        />
                      </Form.Item>
                      <div className="inLineFields">
                        <div className="sameLine">
                          <Form.Item
                            label="City"
                            name="city"
                            rules={[
                              {
                                required: true,
                                message: "Please enter city!",
                              },
                            ]}
                          >
                            <Input
                              type="text"
                              name="city"
                              placeholder="Enter city"
                            />
                          </Form.Item>
                        </div>
                        <div className="sameLine">
                          <Form.Item
                            label="State"
                            name="state"
                            rules={[
                              {
                                required: true,
                                message: "Please enter state!",
                              },
                            ]}
                          >
                            <Input
                              type="text"
                              name="state"
                              placeholder="Enter state"
                            />
                          </Form.Item>
                        </div>
                      </div>
                      <div className="inLineFields">
                        <div className="sameLine">
                          <Form.Item
                            label="Zip Code"
                            name="zipCode"
                            rules={[
                              {
                                required: true,
                                message: "Please enter Zip code!",
                              },
                            ]}
                          >
                            <Input
                              type="text"
                              name="zipCode"
                              placeholder="Enter zip code"
                            />
                          </Form.Item>
                        </div>
                        <div className="sameLine">
                          <Form.Item
                            label="Phone Number"
                            name="phoneNumber"
                            rules={[
                              {
                                required: true,
                                message: "Please enter Phone Number!",
                              },
                            ]}
                          >
                            <Input
                              type="text"
                              name="phoneNumber"
                              placeholder="Enter Phone"
                            />
                          </Form.Item>
                        </div>
                      </div>
                      <div className="inLineFields">
                        <div className="sameLine">
                          <Form.Item
                            label="Driver License Id"
                            name="driverLicenseId"
                            rules={[
                              {
                                required: true,
                                message: "Please enter Driver License Id!",
                              },
                            ]}
                          >
                            <Input
                              type="text"
                              name="driverLicenseId"
                              placeholder="Enter Driver LicenseId"
                            />
                          </Form.Item>
                        </div>
                        <div className="sameLine">
                          <Form.Item
                            label="Driver License State"
                            name="driverLicenseState"
                            rules={[
                              {
                                required: true,
                                message: "Please enter driver license state!",
                              },
                            ]}
                          >
                            <Input
                              type="text"
                              name="driverLicenseState"
                              placeholder="Enter Driver License State"
                            />
                          </Form.Item>
                        </div>
                      </div>
                      <div className="inLineFields">
                        <div className="sameLine">
                          <Form.Item
                            label="Birth Date"
                            name="birthDate"
                            rules={[
                              {
                                required: true,
                                message: "Please Select Birth date!",
                              },
                              {
                                validator(_, birthDate) {
                                  //console.log(birthDate);
                                  var today = new Date();
                                  var date = new Date(birthDate);
                                  var age =
                                    today.getFullYear() - date.getFullYear();
                                  if (age < 18) {
                                    return Promise.reject(
                                      new Error("Must be 18+")
                                    );
                                  }
                                  return Promise.resolve();
                                },
                              },
                            ]}
                          >
                            <DatePicker
                              //onChange={onChange}
                              disabledDate={disabledDate}
                              format="YYYY-MM-DD HH:mm:ss"
                              value={
                                dayjs(user?.birthDate, "YYYY/MM/DD HH:mm:ss") ||
                                ""
                              }
                            />
                          </Form.Item>
                        </div>
                        <div className="sameLine">
                          <Form.Item
                            label="Last 4 digits of SSN"
                            name="lastFourDigitOfSsn"
                            rules={[
                              {
                                required: true,
                                message: "Please enter 4 digit of SSN",
                              },
                              {
                                min: 4,
                                message: "Enter only last 4 digits!",
                              },
                              {
                                max: 4,
                                message: "Enter only last 4 digits!",
                              },
                            ]}
                          >
                            <Input
                              type="number"
                              name="lastFourDigitOfSsn"
                              placeholder="Enter Ssn"
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
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
