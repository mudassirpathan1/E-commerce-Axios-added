import React, { useContext, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../store/auth-context";
import "./Login.css";

const Login = () => {
  const emailInputRef = useRef("");
  const passwordInputRef = useRef("");
  const [isLogin, setIsLogin] = useState(true);
  const authCtx = useContext(AuthContext);

  const switchHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
  const history = useHistory();
  const submitHandler = (e) => {
    e.preventDefault();
    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDW2V-IWOx4GO9rM2bB-0tFWAAeZY4WZ1o";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDW2V-IWOx4GO9rM2bB-0tFWAAeZY4WZ1o";
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: emailInputRef.current.value,
        password: passwordInputRef.current.value,
        returnSecureToken: true,
      }),
      headers: {
        "content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errormessage = "Authentication Failed";
            throw new Error(errormessage);
          });
        }
      })
      .then((data) => {
        console.log(data.idToken);
        authCtx.login(data.idToken);
        authCtx.email(emailInputRef.current.value);
        history.replace("/store");
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <div className="login-box">
      <form onSubmit={submitHandler} className="login-form">
        <h1>User Login</h1>
        <label htmlFor="email">Email Id</label>
        <input id="email" type="email" ref={emailInputRef} />
        <label htmlFor="password">Password</label>
        <input id="password" type="password" ref={passwordInputRef} />
        <button className="login-btn">
          {isLogin ? "Login" : "create new account"}
        </button>
        <button type="button" className="switch-btn" onClick={switchHandler}>
          {isLogin ? "Create ne account" : "Login with existing account"}
        </button>
      </form>
    </div>
  );
};

export default Login;
