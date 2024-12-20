import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { updateModalOpenStatus } from "../../reduxModules/hhgSlice";
import { selectOneMinuteVideosData } from "../../reduxModules/hhgSelectors";

import "./circularImageRow.css";

const CircularImageRow = () => {
    const dispatch = useDispatch();
    const images = useSelector(selectOneMinuteVideosData);

    const handleCircleImageClick = () => {
        dispatch(updateModalOpenStatus(true));
    }

    return (
        <div className="image-row-wrapper">
            <h2 className="image-row-title">1min Videos</h2>
            <div className="image-row-container">
                {images.map((image, index) => (
                    <div className="image-item" key={index}>
                        <img src={image.src} alt={`Video ${index + 1}`} onClick={handleCircleImageClick} />
                        <p>{image.caption}</p>
                        <p>{image.subtitle}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CircularImageRow;
