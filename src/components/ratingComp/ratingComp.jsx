import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectEmojisData, selectFeedback } from '../../reduxModules/hhgSelectors';
import { updateFeedback } from '../../reduxModules/hhgSlice';

import './ratingComp.css';

const RatingComp = () => {
    const [selectedFeedback, setSelectedFeedback] = useState(null);
    const emojis = useSelector(selectEmojisData);
    const feedbackValue = useSelector(selectFeedback);
    const dispatch = useDispatch();

    const handleFeedbackClick = (index, item) => {
        setSelectedFeedback(index);
        dispatch(updateFeedback(item.id));
    };

    return (
        <div className="emoji-feedback-container">
            <h2>How was your experience?</h2>
            <div className="emoji-list">
                {emojis.map((item, index) => (
                    <button
                        key={index} 
                        disabled={feedbackValue !== 0}
                        className={`emoji-button ${selectedFeedback === index ? "selected" : ""
                            }`}
                        onClick={() => handleFeedbackClick(index, item)}
                    >
                        <span role="img" aria-label={item.label}>
                            {item.emoji}
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default RatingComp;