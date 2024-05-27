import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import MapGL, {
    ViewStateChangeEvent,
    Source,
    Layer,
    MapRef,
} from "react-map-gl";
import mapboxgl from "mapbox-gl";
import MapboxDraw from "@mapbox/mapbox-gl-draw";
import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";
import "./mymap.css";

interface Viewport {
    latitude: number;
    longitude: number;
    width: string;
    height: string;
    zoom: number;
}

const countryBorders = {
    type: "FeatureCollection",
    features: [
        {
            type: "Feature",
            properties: {},
            geometry: {
                coordinates: [
                    [
                        [1.1612059641871042, 43.93449362169372],
                        [1.4242367484028478, 41.51123790015512],
                        [7.207857930996909, 39.44053786017298],
                        [7.69174960438346, 43.75420135156912],
                        [5.4680287259353975, 46.281310142326134],
                        [1.1612059641871042, 43.93449362169372],
                    ],
                ],
                type: "Polygon",
            },
            id: 1,
        },
    ],
};

export const Mymap: React.FC = () => {
    let [viewport, setViewport] = useState<Viewport>({
        latitude: 37.23434,
        longitude: 23.234234,
        width: "100vw",
        height: "100vh",
        zoom: 8,
    });
    const mapRef = useRef<MapRef>(null);

    const handleMove = (event: ViewStateChangeEvent) => {
        setViewport(event.viewport);
    };

    return (
        <>
            <MapGL
                {...viewport}
                mapboxAccessToken={
                    "pk.eyJ1IjoiZGVhbnlvbmEiLCJhIjoiY2x3OWdjOWRiMDJ0ZDJpbThoazM5c3l0cSJ9.oJLFinSWR_XL5SRjT2EkFg"
                }
                mapStyle={"mapbox://styles/deanyona/clvskzmbn00oz01pcedh9h259"}
                onMove={handleMove}
                ref={mapRef}
            >
                {/* <Source
                    id="country-borders"
                    type="geojson"
                    data={countryBorders}
                >
                    <Layer
                        id="border-layer"
                        type="line"
                        paint={{
                            "line-color": "#FF0000",
                            "line-width": 2,
                        }}
                    />
                </Source> */}
            </MapGL>
        </>
    );
};
