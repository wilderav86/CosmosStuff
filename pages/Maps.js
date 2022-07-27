import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { useUrl, useApi } from "../hooks";

const IssMap = dynamic(() => import("../components/IssMap"), {
  ssr: false,
});

const Maps = () => {
  //Fetch ISS location

  return (
    <div>
      {" "}
      <IssMap />
    </div>
  );
};

export default Maps;
