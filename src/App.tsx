import { useState } from "react";
import { Mymap } from "./components/mymap/mymap";
import { TimeSlider } from "./components/timeSlider/timeSlider";

import "./App.css";
import { TimeDisplay } from "./components/timeDisplay/timeDisplay";
import useChangeYear from "./hooks/useChangeYear";
import { Sidebar } from "./components/sidebar/sidebar";

function App() {
    const [year, changeYear] = useChangeYear(1500);
    const [currentAppState, setCurrentAppState] = useState("Watch History");

    return (
        <>
            <Mymap />
            <Sidebar
                currentAppState={currentAppState}
                setCurrentAppState={setCurrentAppState}
            />
            <TimeSlider year={year} changeYear={changeYear} />
            <TimeDisplay year={year} changeYear={changeYear} />
        </>
    );
}

export default App;
