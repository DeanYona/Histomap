import React, { ChangeEvent, FC, useEffect, useState } from "react";
import "./timeSlider.css";

interface TimeSlider {
    min: string;
    max: string;
    step: string;
    onChange: string;
}

export const TimeSlider: FC<TimeSlider> = ({ year, setYear }) => {
    const DEFAULT_VALUE = 50;
    const [sliderValue, setSliderValue] = useState(DEFAULT_VALUE);

    const lerp = (start, end, t) => {
        return start * (1 - t) + end * t;
    };

    const updateYearsRate = (sliderAmount) => {
        let yearsRate = 0;

        const positiveRatePoints = [
            { threshold: 10, rate: 0.02 },
            { threshold: 20, rate: 0.1 },
            { threshold: 30, rate: 1 },
            { threshold: 50, rate: 10 },
        ];

        const negativeRatePoints = positiveRatePoints.map((value) => ({
            threshold: value.threshold,
            rate: -value.rate,
        }));

        const findRate = (amount, rates) => {
            for (let i = 0; i < rates.length; i++) {
                if (amount <= rates[i].threshold) {
                    return rates[i].rate;
                }
            }
            return 0;
        };

        if (sliderAmount > 0) {
            return findRate(sliderAmount, positiveRatePoints);
        } else if (sliderAmount < 0) {
            return findRate(-sliderAmount, negativeRatePoints);
        } else {
            return 0;
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (sliderValue !== DEFAULT_VALUE) {
                let sliderAmount = sliderValue - DEFAULT_VALUE;
                // console.log(sliderAmount);
                // console.log(updateYearsRate(sliderAmount));
                setYear((prevYear) => prevYear + updateYearsRate(sliderAmount));
            }
        }, 10);
        return () => clearInterval(interval);
    }, [sliderValue]);

    const handleSliderChange = (e) => {
        let newValue = e.target.value;
        setSliderValue(newValue);
    };

    const handleMouseUup = (e) => {
        setSliderValue(DEFAULT_VALUE);
    };

    return (
        <div className="time-slider">
            <input
                type="range"
                min={0}
                max={100}
                value={sliderValue}
                className="slider"
                id="myRange"
                onChange={handleSliderChange}
                onMouseUp={handleMouseUup}
            />
        </div>
    );
};
