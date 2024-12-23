import React, { useState, useEffect } from "react";
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
        const tabName = location?.pathname?.split("/")[1];
        if (tabName === '') {
            setSelectedTab(0);
            dispatch(updateSelectedTabId(1))
        }
        else if (tabName === 'awareness') {
            setSelectedTab(1);
            dispatch(updateSelectedTabId(2))
        }
        else if (tabName === 'inspiration') {
            setSelectedTab(2);
            dispatch(updateSelectedTabId(3))
        }
        else if (tabName === 'entertainment') {
            setSelectedTab(3);
            dispatch(updateSelectedTabId(4))
        }
    }, [dispatch, location]);

    const handleTabClick = (index, tab) => {
        setSelectedTab(index);
        if (tab.id === 1) {
            navigate("/", { replace: true });
        }
        else if (tab.id === 2) {
            navigate("/awareness", { replace: true });
        }
        else if (tab.id === 3) {
            navigate("/inspiration", { replace: true });
        }
        else if (tab.id === 4) {
            navigate("/entertainment", { replace: true });
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
