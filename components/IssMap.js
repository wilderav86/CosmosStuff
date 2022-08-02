import { useState, useEffect } from "react";
import Map, { Marker } from "react-map-gl";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import "mapbox-gl/dist/mapbox-gl.css";

import styles from "../styles/pages/Maps.module.scss";

const IssMap = () => {
  const [dotStream, setdotStream] = useState([]);

  const [viewState, setViewState] = useState({
    longitude: -100,
    latitude: 40,
    zoom: 0,
  });

  const [issData, setIssData] = useState({});
  const [loading, setLoading] = useState(true);

  const url = "https://api.wheretheiss.at/v1/satellites/25544";
  useEffect(() => {
    const fetchIssData = async () => {
      setLoading(true);
      const response = await fetch(url);
      const json = await response.json();
      setIssData(json);
      setdotStream((prevDotStream) => [
        ...prevDotStream,
        { lat: json.latitude, lon: json.longitude },
      ]);
      setLoading(false);
    };

    fetchIssData();

    const interval = setInterval(() => {
      fetchIssData();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const renderDotStream = dotStream.map((dot, key) => {
    return (
      <Marker longitude={dot.lon} latitude={dot.lat} key={key} anchor="bottom">
        <p style={{ color: "white" }}>.</p>
      </Marker>
    );
  });

  return (
    <div className={styles.container}>
      <div>
        <p>alt: {issData.altitude}</p>
        <p>speed: {issData.velocity} kph</p>
      </div>

      <Map
        {...viewState}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        style={{ width: "100vw", height: "100vh" }}
        mapStyle="mapbox://styles/mapbox/dark-v9"
        onMove={(evt) => setViewState(evt.viewState)}
      >
        {!loading && (
          <>
            <Marker
              key="marker"
              longitude={issData.longitude}
              latitude={issData.latitude}
              anchor="bottom"
            >
              <AnimatePresence exitBeforeEnter>
                <motion.div
                  key="issicon"
                  initial={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <Image
                    key="iss"
                    src="/ISS_01b.svg"
                    height="60"
                    width="60"
                    alt="ISS icon"
                  />
                </motion.div>
              </AnimatePresence>
            </Marker>
          </>
        )}

        {renderDotStream}
      </Map>
    </div>
  );
};

export default IssMap;
