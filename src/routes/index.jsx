import Login from "../pages/Login";
import Register from "../pages/Register";
import PasswordReset from "../pages/PasswordReset";
import PageNotFound from "../pages/PageNotFound";
import Profile from "../pages/Profile";
import VerifyEmail from "../pages/VerifyEmail";
import ForgotPassword from "../pages/ForgotPassword";

import EmailReset from "../pages/EmailReset";
import NewPassword from "../pages/NewPassword";
import SignUpSuccess from "../pages/SignUpSuccess";
import DashBoard from "../pages/DashBoard";
import BusinessInfo from "../pages/BusinessInfo";

export const routeList = [
  {
    index: 0,
    path: "/",
    element: <Login />,
    isVisible: false,
    isAuth: false,
    accessRoles: [],
  },
  {
    index: 1,
    path: "/dashboard",
    element: <DashBoard />,
    isVisible: false,
    isAuth: true,
    accessRoles: [],
  },
  {
    index: 2,
    path: "/dashboard/resetPassword",
    element: <PasswordReset />,
    isVisible: false,
    isAuth: true,
    accessRoles: [],
  },
  {
    index: 3,
    path: "/dashboard/profile",
    element: <Profile />,
    isVisible: false,
    isAuth: false,
    accessRoles: [],
  },
  {
    index: 4,
    path: "/dashboard/resetEmail",
    element: <EmailReset />,
    isVisible: false,
    isAuth: false,
    accessRoles: [],
  },
  {
    index: 5,
    path: "/new-password",
    element: <NewPassword />,
    isVisible: false,
    isAuth: false,
    accessRoles: [],
  },
  {
    index: 6,
    path: "/verify-email",
    element: <VerifyEmail />,
    isVisible: false,
    isAuth: false,
    accessRoles: [],
  },
  {
    index: 7,
    path: "/register",
    element: <Register />,
    isVisible: false,
    isAuth: false,
    accessRoles: [],
  },
  {
    index: 8,
    path: "/register-success",
    element: <SignUpSuccess />,
    isVisible: false,
    isAuth: false,
    accessRoles: [],
  },
  {
    index: 9,
    path: "/forgot-password",
    element: <ForgotPassword />,
    isVisible: false,
    isAuth: false,
    accessRoles: [],
  },
  {
    index: 10,
    path: "/business",
    element: <BusinessInfo />,
    isVisible: false,
    isAuth: true,
    accessRoles: [],
  },
  {
    index: 11,
    path: "*",
    element: <PageNotFound />,
    isVisible: false,
    isAuth: false,
    accessRoles: [],
  },
];
