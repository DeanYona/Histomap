import React, { ChangeEvent, useState } from "react";
import Map, { ViewStateChangeEvent } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "./mymap.css";

interface Viewport {
    latitude: number;
    longitude: number;
    width: string;
    height: string;
    zoom: number;
}

export const Mymap = () => {
    let [viewport, setViewport] = useState({
        latitude: 37.23434,
        longitude: 23.234234,
        width: "100vw",
        height: "100vh",
        zoom: 8,
    });

    const handleMove = (event: ViewStateChangeEvent) => {
        setViewport(event.viewport);
    };

    return (
        <>
            <Map
                {...viewport}
                mapboxAccessToken={
                    "pk.eyJ1IjoiZGVhbnlvbmEiLCJhIjoiY2x3OWdjOWRiMDJ0ZDJpbThoazM5c3l0cSJ9.oJLFinSWR_XL5SRjT2EkFg"
                }
                mapStyle={"mapbox://styles/deanyona/clvskzmbn00oz01pcedh9h259"}
                onMove={handleMove}
            ></Map>
        </>
    );
};
