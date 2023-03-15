import React, { useContext } from "react";
import classes from "./Header.module.css";
import {NavLink} from 'react-router-dom'
import HeaderCartButton from "./HeaderCartButton";
import AuthContext from "../store/auth-context";

const Header = (props) => {
const authCtx = useContext(AuthContext)

  const logoutHandler=(e)=>{
    e.preventDefault()
    authCtx.logout()
  }
  return (
    <div className={classes.headbar}>
      <div className={classes.header}>
        <div><NavLink  activeClassName="active" to="/home"> HOME</NavLink></div>
        <div><NavLink activeClassName="active" to="/store">STORE</NavLink></div>
        <div><NavLink activeClassName="active" to='/about'>ABOUT</NavLink></div>
        
        
        <div><NavLink activeClassName="active" to='/contact'>Contact Us</NavLink></div>
        <div><NavLink activeClassName="active" to='/login'>Login</NavLink></div>
        
      </div>
      <button onClick={logoutHandler}>Logout</button>

        <HeaderCartButton onShow={props.onShow}/>
    </div>
  );
};

export default Header;
