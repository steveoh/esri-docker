import "@arcgis/core/assets/esri/themes/light/main.css";
import MapView from "@arcgis/core/views/MapView";
import WebMap from "@arcgis/core/WebMap";
import Graphic from "@arcgis/core/Graphic";
import Polygon from "@arcgis/core/geometry/Polygon";
import Viewpoint from "@arcgis/core/Viewpoint";
import { useRef, useState, useEffect } from "react";

function Map() {
  const mapDiv = useRef(null);
  const webMap = useRef(null);
  const mapView = useRef(null);

  // set up map effect
  useEffect(() => {
    if (mapDiv.current) {
      webMap.current = new WebMap({
        portalItem: {
          id: "80c26c2104694bbab7408a4db4ed3382",
        },
      });

      mapView.current = new MapView({
        container: mapDiv.current,
        map: webMap.current,
      });
    }

    return () => {
      mapView.current.destroy();
      webMap.current.destroy();
    };
  }, []);

  return <div style={{ width: "100%", height: "500px" }} ref={mapDiv}></div>;
}

export default Map;
