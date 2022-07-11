import { Link, useNavigate } from "react-router-dom";
import React, { useContext, useReducer, useState } from "react";
import { AppContext, fetchInfo } from "../Context/AppContext";
import addReducer from "../Context/AppContext";

const initVal = {
  isAuth: false,
  data: [],
  isError: false,
  token: ""
};
function Login() {
  // const {state, handleLogin, handleLogout} = useContext(AppContext);
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(addReducer, initVal);
  const [form, setForm] = useState({
    email: "",
    password: ""
  });
  const handleSubmit = (e) => {
    fetchInfo(dispatch);
    navigate("/dashboard");
    // e.preventDefault();
    // fetch(`https://reqres.in/api/login`, {
    //   method: "POST",
    //   headers:{
    //     "Content-Type" : "application/json",
    //   },
    //   body: JSON.stringify(form)
    // })
    // .then((res) => res.json())
    // .then((res) => {
    //   // console.log(res.token);
    //   // handleLogin(res.token);

    //   navigate("/dashboard");
    // })
    // .catch((err) => {
    //   console.log(err);
    // })
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };
  console.log(form);
  return (
    <div>
      <form data-testid="login-form" onSubmit={handleSubmit}>
        <div>
          <label>
            Email
            <input
              data-testid="email-input"
              type="email"
              placeholder="email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              data-testid="password-input"
              type="password"
              placeholder="password"
              name="password"
              value={form.password}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <input data-testid="form-submit" type="submit" value="SUBMIT" />
        </div>
      </form>
      <div>
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
}
export default Login;

// "email": "eve.holt@reqres.in",
// "password": "cityslicka"
