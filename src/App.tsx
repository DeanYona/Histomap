import { useState } from "react";
import { Mymap } from "./components/mymap/mymap";
import { TimeSlider } from "./components/timeSlider/timeSlider";

import "./App.css";
import { TimeDisplay } from "./components/timeDisplay/timeDisplay";

function App() {
    const [year, setYear] = useState(1500);

    return (
        <>
            <Mymap />
            <TimeSlider year={year} setYear={setYear} />
            <TimeDisplay year={year} />
        </>
    );
}

export default App;
