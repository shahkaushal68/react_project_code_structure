import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { authTypes } from "./redux/constants";
import { routeList } from "./routes";
import { getAuthUserDetails } from "./actions/auth.action";
import { ProtectedRoute } from "./routes/privateRoute";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("_token");
    if (token) {
      const getUserDetails = async () => {
        try {
          const res = await getAuthUserDetails();
          if (res?.status === 200) {
            dispatch({
              type: authTypes.USER_ADD,
              payload: res?.data,
            });
          }
          //console.log("res", res);
        } catch (error) {
          console.log("error", error);
        }
      };
      getUserDetails();
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {routeList &&
          routeList?.map((routeItem, routeIndex) => {
            return (
              <Route
                key={`routeIndex${routeIndex}`}
                path={routeItem.path}
                element={
                  <ProtectedRoute
                    isAuth={routeItem.isAuth}
                    roles={routeItem.accessRoles}
                    isVisible={routeItem?.isVisible}
                  >
                    {routeItem.element}
                  </ProtectedRoute>
                }
              />
            );
          })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
