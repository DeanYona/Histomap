import React, { useState } from "react";
import { CURRENTYEAR, MINIMUMYEAR } from "../consts/consts";

export default function useChangeYear(defaultYear) {
    const [year, setYear] = useState(defaultYear);

    const changeYear = (newYear) => {
        // newYear = Number(newYear);
        if (newYear > CURRENTYEAR) {
            newYear = CURRENTYEAR;
        } else if (newYear < MINIMUMYEAR) {
            newYear = MINIMUMYEAR;
        }
        setYear(newYear);
    };

    return [year, changeYear];
}
