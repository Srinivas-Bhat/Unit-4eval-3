import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import React from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  // fix code here
  const { state } = useContext(AppContext);
  if (!state.isAuth) {
    return <Navigate to="/login" />;
  }
  return children;
}

export default PrivateRoute;
