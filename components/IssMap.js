import { useState, useEffect } from "react";
import Map, { Marker } from "react-map-gl";
import Image from "next/image";
import "mapbox-gl/dist/mapbox-gl.css";

const IssMap = () => {
  const [viewState, setViewState] = useState({
    longitude: -100,
    latitude: 40,
    zoom: 0,
  });

  const url = "http://api.open-notify.org/iss-now.json";

  const [issLocation, setIssLocation] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchIssLocation = async () => {
      setLoading(true);
      const response = await fetch(url);
      const json = await response.json();
      setIssLocation(json);
      console.log(json);
      setLoading(false);
    };

    fetchIssLocation();

    const interval = setInterval(() => {
      fetchIssLocation();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      hello
      <Map
        {...viewState}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        style={{ width: "100vw", height: "100vh" }}
        mapStyle="mapbox://styles/mapbox/dark-v9"
        onMove={(evt) => setViewState(evt.viewState)}
      >
        {!loading && (
          <Marker
            longitude={issLocation.iss_position.longitude}
            latitude={issLocation.iss_position.latitude}
            anchor="bottom"
          >
            <Image src="/ISS_01b.svg" height="60" width="60" />
          </Marker>
        )}
      </Map>
    </div>
  );
};

export default IssMap;
