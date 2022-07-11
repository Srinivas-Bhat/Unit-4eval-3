import React, { createContext, useReducer, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

// dont change the name
export const AppContext = createContext();

// dont change the name

export const loginSuccess = { type: "LOGIN_SUCCESS" };
export const logoutSuccess = { type: "LOGOUT_SUCCESS" };

export const fetchInfo = (dispatch) => {
  fetch(`https://reqres.in/api/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify()
  })
    .then((res) => res.json())
    .then((res) => {
      // console.log(res.token);
      // handleLogin(res.token);
      dispatch({ ...loginSuccess, payload: res.token });
    })
    .catch((err) => {
      console.log(err);
      dispatch(logoutSuccess);
    });
};

export const appReducer = (state, action) => {
  // write code
  switch (action.type) {
    case "lOGIN_SUCCESS": {
      return {
        // fill here
        isAuth: true,
        token: action.token
      };
    }
    case "LOGOUT_SUCCESS": {
      return {
        ...state,
        isAuth: false,
        token: null
      };
    }
    default: {
      return state;
    }
  }
};

function AppContextProvider({ children }) {
  // you need to use context
  // fix code here
  const [state, setState] = useState({
    isAuth: false,
    token: null
  });
  const handleLogin = (token) => {
    setState({
      ...state,
      isAuth: true,
      token: token
    });
  };
  const handleLogout = () => {
    setState({
      ...state,
      isAuth: false,
      token: null
    });
  };

  return (
    <AppContext.Provider value={{ state, handleLogin, handleLogout }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
