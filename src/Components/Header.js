import React, {useState} from "react";
import {LOGO_URL} from "../Utils/constants";
import {Link} from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";


const Header = () => {
    const [btnLogin, setBtnLogin] = useState("Login");
    const onlineStatus = useOnlineStatus();
    return (<div className="header">
            <div className="logo-container">
                <img className="logo" alt="logo-url"
                     src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Online Status: {onlineStatus === true ? "✅" : "🔴"}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li>Cart</li>
                    <button className="login" onClick={() => {
                        btnLogin === "Login" ? setBtnLogin("Logout") : setBtnLogin("Login")
                    }}>{btnLogin}
                    </button>
                </ul>
            </div>
        </div>
    )
}

export default Header;