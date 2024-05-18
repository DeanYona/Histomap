import React, { useRef, useState } from "react";
import "./timeDisplay.css";



export const TimeDisplay = ({ year, changeYear }) => {
    const editableTextRef = useRef(null);

    const handleInput = (e) => {
        let newYear = Number(e.target.innerText);
        changeYear(newYear);
    };

    return (
        <div className="year-container">
            <h1
                ref={editableTextRef}
                contentEditable={true}
                onInput={handleInput}
                suppressContentEditableWarning={true}
            >
                {Math.floor(year)}
            </h1>
        </div>
    );
};
