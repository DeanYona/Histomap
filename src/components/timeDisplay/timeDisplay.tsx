import React, { useState } from "react";
import "./timeDisplay.css";

export const TimeDisplay = ({ year }) => {
    // const [year, setYear] = useState();

    return (
        <div className="year-container">
            <h1>{year}</h1>
        </div>
    );
};
