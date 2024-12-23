import React from "react";
import Tabs from "../tabs/tabs";
import CardGrid from "../cardGrid/cardGrid";
import VideoComp from "../videoComp/videoComp";
import ImageCarouselAndVideo from "../imageCarouselAndVideo/imageCarouselAndVideo";
import ModalComp from "../modalComp/modalComp";
import CircularImageRow from "../circularImageRow/circularImageRow";

import './dashboard.css';

function Dashboard() {

    return (
        <>
            <Tabs />
            <ImageCarouselAndVideo />
            <ModalComp />
            <CardGrid />
            <div >
                <p className="video-wrapper">Devotional Video</p>
                <VideoComp />
            </div>
            <CircularImageRow />
        </>
    );
}

export default Dashboard;
