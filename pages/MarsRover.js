import React, { useState } from "react";
import MarsSearch from "../components/MarsSearch";
import Loading from "../components/loading/Loading";
import { useApi, useUrl } from "../hooks";
import Image from "next/image";
import Zoom from "react-medium-image-zoom";

import styles from "../styles/pages/MarsRover.module.scss";
import PageFadeIn from "../animations/PageFadein";

const MarsRover = () => {
  //Used for MarsSearch Dropdown component
  const [selectedCamera, setSelectedCamera] = useState("NAVCAM_LEFT");

  //Used for MarsSearch Searchbar Component
  const defaultSol = 535;
  const [sol, setSol] = useState(defaultSol);

  //Fetch parameters
  const key = "hUaQ4htFc7b07hk6RynOrGN4S6V5wJaTY1xcdDRJ";

  const roverInfoUrl = useUrl(
    "https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/",
    { api_key: "hUaQ4htFc7b07hk6RynOrGN4S6V5wJaTY1xcdDRJ" }
  );
  const photosUrl = useUrl(
    "https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/photos",
    { api_key: key, sol: sol, camera: selectedCamera }
  );

  //Fetch Data
  const { data, loading, setLoading } = useApi(
    [photosUrl, roverInfoUrl],
    [selectedCamera, sol]
  );

  //Next Image Loader
  const imageLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  const [marsPhotos, roverData] = data;
  console.log(roverData);
  //Photo error handling
  const photoArrayEmpty =
    "Oops. It doesn't look like this camera was used on this sol. Choose a different camera, or enter a different sol.";

  const pageInfo =
    "Photos are organized by the sol (Martian rotation or day) on which they were taken, counting up from the rover's landing date. Choose a camera from the dropdown below and enter a sol. *Note: For some sol's, there is no data from certain cameras.";

  return (
    <>
      <div className={styles.pageContainer}>
        {loading && <Loading />}
        {!loading && (
          <div className={styles.container}>
            {/* <PageFadeIn> */}
            <h2 className={styles.title}>MARS PERSEVERENCE ROVER PHOTOS</h2>
            <p className={styles.pageInfo}>{pageInfo}</p>
            <div>
              <MarsSearch
                selectedCamera={selectedCamera}
                setSelectedCamera={setSelectedCamera}
                sol={sol}
                setSol={setSol}
                loading={loading}
                roverData={roverData}
              />
              <div className={styles.solInfo}>
                <p>Maximum searchable Sol: {roverData.rover.max_sol}</p>
                <p>Current Sol: {sol}</p>
              </div>
            </div>

            <div className={styles.photoContainer}>
              {!marsPhotos.photos.length ? (
                <div>{photoArrayEmpty}</div>
              ) : (
                marsPhotos.photos.map((photo) => {
                  return (
                    <Zoom key={photo.id}>
                      <div className={styles.imageContainer}>
                        <Image
                          loader={imageLoader}
                          src={photo.img_src}
                          alt="NASA Picture"
                          layout="fill"
                          objectFit="contain"
                        />
                      </div>
                    </Zoom>
                  );
                })
              )}
            </div>
            {/* </PageFadeIn> */}
          </div>
        )}
      </div>{" "}
    </>
  );
};

export default MarsRover;
