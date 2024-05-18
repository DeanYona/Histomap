import React, { useState } from "react";
import "./sidebar.css";

export const Sidebar = ({ currentAppState, setCurrentAppState }) => {
    const [isSidebar, setIsSidebar] = useState(false);

    const appStates = ["Watch History", "Create History"];

    const handleMouseEnter = () => {
        setIsSidebar(true);
    };

    const handleMouseLeave = () => {
        setIsSidebar(false);
    };

    return (
        <>
            <div
                className="app-states"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <button>{currentAppState}</button>
                {isSidebar ? (
                    <button>
                        {appStates.filter((state) => state != currentAppState)}
                    </button>
                ) : null}
            </div>
            {/* <div
                className="sidebar-container"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {isSidebar ? (
                    <div className={`sidebar  ${isSidebar ? "visible" : ""}`}>
                        {appStates.map((state, index) => (
                            <button key={index}>{state}</button>
                        ))}
                    </div>
                ) : (
                    <div className="sidebar-arrow"></div>
                )}
            </div> */}
        </>
    );
};
