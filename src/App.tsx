import { useState } from "react";
import { Mymap } from "./components/mymap/mymap";
import { TimeSlider } from "./components/timeSlider/timeSlider";

import "./App.css";
import { TimeDisplay } from "./components/timeDisplay/timeDisplay";
import useChangeYear from "./hooks/useChangeYear";
import { AppStates } from "./components/appStates/appStates";

function App() {
    const [year, changeYear] = useChangeYear(1500);
    const [currentAppState, setCurrentAppState] = useState("Watch History");

    return (
        <>
            <Mymap />
            <AppStates
                currentAppState={currentAppState}
                setCurrentAppState={setCurrentAppState}
            />
            <TimeSlider year={year} changeYear={changeYear} />
            <TimeDisplay year={year} changeYear={changeYear} />
        </>
    );
}

export default App;
