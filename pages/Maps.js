import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import PageFadeIn from "../animations/PageFadein";
import { useUrl, useApi } from "../hooks";

const IssMap = dynamic(() => import("../components/IssMap"), {
  ssr: false,
});

const Maps = () => {
  //Fetch ISS location

  return (
    <div>
      <PageFadeIn>
        <IssMap />
      </PageFadeIn>
    </div>
  );
};

export default Maps;
