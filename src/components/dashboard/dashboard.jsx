import React from "react";
import { useSelector } from 'react-redux';
import { selectSelectedTabId } from "../../reduxModules/hhgSelectors";
import Tabs from "../tabs/tabs";
import CardGrid from "../cardGrid/cardGrid";
import ResponsiveVideo from "../responsiveVideo/responsiveVideo";
import ImageCarouselAndVideo from "../imageCarouselAndVideo/imageCarouselAndVideo";

import './dashboard.css';
import ModalComp from "../modalComp/modalComp";

function Dashboard() {
    const selectedTabId = useSelector(selectSelectedTabId);

    return (
        <>
            <Tabs />
            {selectedTabId === 1 ? <><ImageCarouselAndVideo />
            <ModalComp/>
            <CardGrid />
            </> : <></>}
            {/* <ResponsiveVideo /> */}
        </>
    );
}

export default Dashboard;
