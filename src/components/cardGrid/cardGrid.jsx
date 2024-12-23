import React from "react";
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { selectHomeTabCardData } from "../../reduxModules/hhgSelectors";

import "./cardGrid.css";

const CardGrid = () => {
    const cards = useSelector(selectHomeTabCardData);
    const navigate = useNavigate();

    const handleCardClick = (card) => {
        navigate(`/${card.type}/${card.id}`, { replace: true });
    }

    return (
        <div className="card-grid">
            {cards.map((card, index) => (
                <div className="card" key={index} onClick={() => handleCardClick(card)}>
                    <div className="card-left">
                        <img src={card.image} alt={card.title} className="card-image" />
                    </div>
                    <div className="card-right">
                        <h3 className="card-title">{card.title}</h3>
                        <p className="card-description">{card.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CardGrid;
