import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { useUrl, useApi } from "../hooks";

const IssMap = dynamic(() => import("../components/IssMap"), {
  ssr: false,
});

const Maps = () => {
  //Fetch ISS location
  // const url = "http://api.open-notify.org/iss-now.json";

  // const [issLocation, setIssLocation] = useState({});
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const fetchIssLocation = async () => {
  //     setLoading(true);
  //     const response = await fetch(url);
  //     const json = await response.json();
  //     setIssLocation(json);
  //     console.log(json);
  //     setLoading(false);
  //   };

  //   fetchIssLocation();

  //   const interval = setInterval(() => {
  //     fetchIssLocation();
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div>
      {" "}
      <IssMap />
    </div>
  );
};

export default Maps;
