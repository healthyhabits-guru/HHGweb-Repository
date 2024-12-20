import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { selectTabsData } from "../../reduxModules/hhgSelectors";
import { updateSelectedTabId } from "../../reduxModules/hhgSlice";

import './tabs.css';

function Tabs() {
    const tabs = useSelector(selectTabsData);
    const [selectedTab, setSelectedTab] = useState(0);
    const dispatch = useDispatch();

    return (
        <div>
            <div className={'tab-container'}>
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className={`tab ${index === selectedTab ? "selected-tab" : ""}`}
                        onClick={() => {
                            setSelectedTab(index);
                            dispatch(updateSelectedTabId(tab.id))
                        }}>
                        {tab.name}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Tabs;
