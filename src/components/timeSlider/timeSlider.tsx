import React, { FC, useState } from "react";
import "./timeSlider.css";

interface TimeSlider {
    min: string;
    max: string;
    step: string;
    onChange: string;
}

export const TimeSlider: FC<TimeSlider> = ({ min, max, step, onChange }) => {
    const [value, setValue] = useState(20);

    const handleSliderChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <div className="time-slider">
            <input
                type="range"
                min={min}
                max={max}
                value={value}
                className="slider"
                id="myRange"
                onChange={handleSliderChange}
            />
        </div>
    );
};
