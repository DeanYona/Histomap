import { useState } from "react";
import { Mymap } from "./components/mymap/mymap";
import { TimeSlider } from "./components/timeSlider/timeSlider";

import "./App.css";

function App() {
    return (
        <>
            <Mymap />
            <TimeSlider />
        </>
    );
}

export default App;
