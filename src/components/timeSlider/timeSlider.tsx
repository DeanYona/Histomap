import React, {
    ChangeEvent,
    FC,
    useCallback,
    useEffect,
    useState,
} from "react";
import "./timeSlider.css";

interface TimeSlider {
    year: number;
    changeYear: (newYear: number) => void;
}

export const TimeSlider: FC<TimeSlider> = ({ year, changeYear }) => {
    const DEFAULT_VALUE = 50;
    const [sliderValue, setSliderValue] = useState(DEFAULT_VALUE);
    const [isDragging, setIsDragging] = useState(false);

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

    const updateYearContinuously = useCallback(() => {
        let sliderAmount = sliderValue - DEFAULT_VALUE;
        let newYear = year + updateYearsRate(sliderAmount);
        changeYear(newYear);
    }, [sliderValue, year, changeYear]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (sliderValue !== DEFAULT_VALUE) {
                // let sliderAmount = sliderValue - DEFAULT_VALUE;
                // let yearsAmount = updateYearsRate(sliderAmount);
                // let newYear = year + yearsAmount;
                // // console.log(yearsAmount);
                // // console.log(updateYearsRate(sliderAmount));
                // changeYear(newYear);
                updateYearContinuously(sliderValue);
            }
        }, 10);
        return () => clearInterval(interval);
    }, [sliderValue, updateYearContinuously]);

    const handleSliderChange = (e) => {
        let newValue = parseInt(e.target.value);
        setSliderValue(newValue);
        setIsDragging(true);
    };

    const handleMouseUp = (e) => {
        setSliderValue(DEFAULT_VALUE);
        setIsDragging(false);
    };

    return (
        <div className="time-slider">
            <input
                type="range"
                min={0}
                max={100}
                value={sliderValue}
                className={isDragging ? "slider dragging" : "slider"}
                id="myRange"
                onChange={handleSliderChange}
                onMouseUp={handleMouseUp}
            />
        </div>
    );
};
