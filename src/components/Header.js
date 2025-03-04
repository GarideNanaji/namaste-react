import { useState } from "react";
import { LOGO_URL } from "../utilis/constants";
import { Link } from "react-router";

const Header = () => {
    const [btnName,setBtnName] = useState("Login") 
    return(
    <div className="header">
        <div className="logo-container">
            <img className="logo"src={LOGO_URL}/>
        </div>
        <div className="nav-items">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/">Cart</Link></li>
                <button className="btnLogin" onClick={() =>{
                     btnName === "Login" ? setBtnName("Logout"): setBtnName("Login") }}><h4>{btnName}</h4></button>
            </ul>
        </div>
    </div>
)};

export default Header;