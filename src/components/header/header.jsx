import React from "react";
import "./header.css";

const Header = () => {
    // const [deviceType, setDeviceType] = useState("laptop");

    // useEffect(() => {
    //     const checkDeviceType = () => {
    //         if (window.matchMedia("(max-width: 768px)").matches) {
    //             setDeviceType("mobile");
    //         } else if (window.matchMedia("(max-width: 1024px)").matches) {
    //             setDeviceType("tablet");
    //         } else {
    //             setDeviceType("laptop");
    //         }
    //     };

    //     checkDeviceType(); // Initial check
    //     window.addEventListener("resize", checkDeviceType);

    //     return () => {
    //         window.removeEventListener("resize", checkDeviceType);
    //     };
    // }, []);

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
                <button className="admin-login-btn">Admin Login</button>
            </div>
        </header>
    );
};

export default Header;
