import { useState } from "react";
import { Mymap } from "./components/mymap/mymap";
import { TimeSlider } from "./components/timeSlider/timeSlider";

import "./App.css";
import { TimeDisplay } from "./components/timeDisplay/timeDisplay";
import useChangeYear from "./hooks/useChangeYear";

function App() {
    // const [year, setYear] = useState(1500);
    const [year, changeYear] = useChangeYear(1500);

    return (
        <>
            <Mymap />
            <TimeSlider year={year} changeYear={changeYear} />
            <TimeDisplay year={year} changeYear={changeYear} />
        </>
    );
}

export default App;
