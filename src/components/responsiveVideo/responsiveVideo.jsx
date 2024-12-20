import React from "react";
import "./responsiveVideo.css";

const ResponsiveVideo = () => {
    return (
        <div className="video-container">
            <iframe
                src={`https://www.youtube.com/embed/7QUYD8-Ifss?si=DcGxeR5sv_SX65bq;`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default ResponsiveVideo;
