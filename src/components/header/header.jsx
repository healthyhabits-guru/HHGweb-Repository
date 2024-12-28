import React from "react";
import { useNavigate } from "react-router-dom";
import "./header.css";

const Header = () => {
    const navigate = useNavigate();

    return (
        <header className="header">
            <div className="header-left">
                <img
                    src="https://via.placeholder.com/800x400?text=Image+1"
                    alt="Logo"
                    className="header-logo"
                />
                <h1 className="header-title">ఆరోగ్యకరమైన అలవాట్లు</h1>
            </div>
            <div className="header-right">
                <button className="admin-login-btn" onClick={() => navigate('/login')}>Admin Login</button>
            </div>
        </header>
    );
};

export default Header;
