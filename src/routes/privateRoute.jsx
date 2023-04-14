import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children, isAuth, roles, isVisible }) => {
  //const location = useLocation();
  const token = localStorage.getItem("_token");
  const isAuthenticated = token === null || token === undefined ? false : true;
  const isRole = isAuthenticated && isAuth ? true : false;

  return isRole ? (
    children
  ) : isAuthenticated ? (
    children
  ) : isAuth ? (
    <Navigate to="/" />
  ) : (
    children
  );
};
