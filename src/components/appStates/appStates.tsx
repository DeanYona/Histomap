import React, { useState } from "react";
import "./appStates.css";

export const AppStates = ({ currentAppState, setCurrentAppState }) => {
    const [isAppStates, setIsAppStates] = useState(false);

    const appStates = ["Watch History", "Create History"];
    const otherState = appStates.filter((state) => state != currentAppState);

    const handleMouseEnter = () => {
        setIsAppStates(true);
    };

    const handleMouseLeave = () => {
        setIsAppStates(false);
    };

    return (
        <>
            <div
                className="app-states"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <button>{currentAppState}</button>
                {isAppStates ? <button>{otherState}</button> : null}
            </div>
        </>
    );
};
