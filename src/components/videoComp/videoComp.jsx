import React from "react";
import "./videoComp.css";

const VideoComp = () => {
    return (
        <div className="iframe-wrapper">
            <iframe
                src={`https://www.youtube.com/embed/UV0mhY2Dxr0?si=jkNrGgixa6uNLT9L`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="YouTube video"
            ></iframe>
        </div>
    );
};

export default VideoComp;
