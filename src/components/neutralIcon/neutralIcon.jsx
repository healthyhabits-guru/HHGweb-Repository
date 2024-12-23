import React from "react";

function NeutralIcon() {
    return (
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="black" strokeWidth="2" />
            <circle cx="9" cy="9" r="1" fill="black" />
            <circle cx="15" cy="9" r="1" fill="black" />
            <line x1="8" y1="15" x2="16" y2="15" stroke="black" strokeWidth="2" strokeLinecap="round" />
        </svg>
    );
}

export default NeutralIcon;
