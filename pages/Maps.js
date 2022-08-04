import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import PageFadeIn from "../animations/PageFadein";
import { useUrl, useApi } from "../hooks";
import styles from "../styles/pages/Maps.module.scss";

const IssMap = dynamic(() => import("../components/IssMap"), {
  ssr: false,
});

const Maps = () => {
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.title}> Space Station Tracker</h1>

      <IssMap />
    </div>
  );
};

export default Maps;
