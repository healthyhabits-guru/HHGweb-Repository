import React from "react";
import "./videoComp.css";

const VideoComp = () => {
    return (
        <div className="video-comp-container">
            <div className="iframe-wrapper">
                <iframe
                    src={`https://www.youtube.com/embed/UV0mhY2Dxr0?si=jkNrGgixa6uNLT9L`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="YouTube video"
                ></iframe>
            </div>
            <p className="video-description">
                This video provides valuable insights into modern web development trends and
                technologies. Learn how to adapt your skills and stay ahead in the industry.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vehicula
                eros a orci pretium, ut tincidunt magna tincidunt.
            </p>
        </div>
    );
};

export default VideoComp;
