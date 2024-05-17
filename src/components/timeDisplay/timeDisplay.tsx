import React, { useState } from "react";
import "./timeDisplay.css";

export const TimeDisplay = ({ year }) => {
    // const [year, setYear] = useState();

    return (
        <div className="year-container">
            <h1>{Math.floor(year)}</h1>
        </div>
    );
};
