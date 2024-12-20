import React from "react";
import { useSelector } from 'react-redux';
import { selectSelectedTabId } from "../../reduxModules/hhgSelectors";
import Tabs from "../tabs/tabs";
import CardGrid from "../cardGrid/cardGrid";
import ImageCarouselAndVideo from "../imageCarouselAndVideo/imageCarouselAndVideo";
import ModalComp from "../modalComp/modalComp";
import CircularImageRow from "../circularImageRow/circularImageRow";

import './dashboard.css';

function Dashboard() {
    const selectedTabId = useSelector(selectSelectedTabId);

    return (
        <>
            <Tabs />
            {selectedTabId === 1 ? <><ImageCarouselAndVideo />
                <ModalComp />
                <CardGrid />
                <CircularImageRow />
            </> : <></>}
        </>
    );
}

export default Dashboard;
