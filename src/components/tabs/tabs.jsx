import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from "react-router-dom";
import { selectTabsData } from "../../reduxModules/hhgSelectors";
import { updateSelectedTabId } from "../../reduxModules/hhgSlice";

import './tabs.css';

function Tabs() {
    const tabs = useSelector(selectTabsData);
    const [selectedTab, setSelectedTab] = useState(0);
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        if (location?.pathname === '/') {
            setSelectedTab(0);
            dispatch(updateSelectedTabId(1))
        }
        else if (location?.pathname === '/awareness') {
            setSelectedTab(1);
            dispatch(updateSelectedTabId(2))
        }
        else if (location?.pathname === '/inspiration') {
            setSelectedTab(2);
            dispatch(updateSelectedTabId(3))
        }
        else if (location?.pathname === '/entertainment') {
            setSelectedTab(3);
            dispatch(updateSelectedTabId(4))
        }
    }, [location]);

    const handleTabClick = (index, tab) => {
        setSelectedTab(index);
        if (tab.id === 1) {
            navigate("/");
        }
        else if (tab.id === 2) {
            navigate("/awareness");
        }
        else if (tab.id === 3) {
            navigate("/inspiration");
        }
        else if (tab.id === 4) {
            navigate("/entertainment");
        }
        dispatch(updateSelectedTabId(tab.id))
    };

    return (
        <div>
            <div className={'tab-container'}>
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className={`tab ${index === selectedTab ? "selected-tab" : ""}`}
                        onClick={() => handleTabClick(index, tab)}>
                        {tab.name}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Tabs;
