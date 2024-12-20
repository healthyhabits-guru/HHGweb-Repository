import React from "react";
import "./header.css";

const Header = () => {
    return (
        <header className="header">
            <div className="header-left">
                <img
                    src="https://via.placeholder.com/800x400?text=Image+1"
                    alt="Logo"
                    className="header-logo"
                />
                <h1 className="header-title">Website Title</h1>
            </div>
            <div className="header-right">
                <button className="admin-login-btn">Admin Login</button>
            </div>
        </header>
    );
};

export default Header;
