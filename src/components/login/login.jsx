import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./login.css";

const Login = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLoginBtnClick = (event) => {
        event.preventDefault();
        if (email === '') {
            toast.error("Email is required!", {
                position: "top-left",
                autoClose: 3000,
            });
        }
        else if (!(emailRegex.test(email))) {
            toast.error("Email is invalid!", {
                position: "top-left",
                autoClose: 3000,
            });
        }
        else if (password === '') {
            toast.error("Password is required!", {
                position: "top-left",
                autoClose: 3000,
            });
        }
        else {
            toast.success("Login successful!", {
                position: "top-left",
                autoClose: 3000,
            });
        }
    };

    return (
        <div className="login-container">
            <form className="login-form" noValidate>
                <h2 className="form-title">Login</h2>
                <div className="form-group">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="form-input"
                        value={email}
                        placeholder="Enter your email"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="form-input"
                        value={password}
                        placeholder="Enter your password"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="form-button" onClick={handleLoginBtnClick}>
                    Login
                </button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Login;
