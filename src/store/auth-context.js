import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  email:()=>{},
  emailid:'',
  logout:()=>{}
});

export const AuthContextProvider = (props) => {
  const initialState = localStorage.getItem("token");
  const [token, setToken] = useState(initialState);
  const [email,setEmail] = useState('')
  const userisLoggedIn = !!token;
  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };

  const logoutHandler=()=>{
    localStorage.clear()
    setToken(null)
  }

  const emailHandler=(email)=>{
    const clean = email.replace(/[^a-zA-Z0-9]/g,'')
    setEmail(clean)
  }
  const values = {
    token: token,
    isLoggedIn: userisLoggedIn,
    login: loginHandler,
    email:emailHandler,
    emailid:email,
    logout:logoutHandler
  };
  return (
    <AuthContext.Provider value={values}>{props.children}</AuthContext.Provider>
  );
};

export default AuthContext;