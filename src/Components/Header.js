import React, {useState} from "react";
import {LOGO_URL} from "../Utils/constants";


const Header = () => {
    const [btnLogin, setBtnLogin] = useState("Login");
    return (<div className="header">
            <div className="logo-container">
                <img className="logo" alt="logo-url"
                     src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
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