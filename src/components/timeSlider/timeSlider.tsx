import React, { ChangeEvent, FC, useState } from "react";
import "./timeSlider.css";

interface TimeSlider {
    min: string;
    max: string;
    step: string;
    onChange: string;
}

export const TimeSlider: FC<TimeSlider> = ({ year, setYear }) => {
    const [value, setValue] = useState(20);

    const handleSliderChange = (e) => {
        setValue(e.target.value);
        setYear(value);
        // setValue
    };

    return (
        <div className="time-slider">
            <input
                type="range"
                min={-3000}
                max={2024}
                value={value}
                className="slider"
                id="myRange"
                onChange={handleSliderChange}
            />
        </div>
    );
};
