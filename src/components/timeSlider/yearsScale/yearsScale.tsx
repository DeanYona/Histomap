import React from "react";
import "./yearsScale.css";

export const YearsScale = ({ year, thumbPosition }) => {

    

    for (let i = 0; i < 5; i++) {
        i
    }

    return (
        {}
        <p style={{ left: `${thumbPosition}px` }} className="years-scale">
            {Math.floor(year)}
        </p>
    );
};
