import React, { useState } from "react";
import MarsSearch from "../components/MarsSearch";
import { useApi, useUrl } from "../hooks";
import Image from "next/image";

const Neo = () => {
  //Used for MarsSearch Dropdown component
  const [selectedCamera, setSelectedCamera] = useState("FRONT_HAZCAM_LEFT_A");

  //Used for MarsSearch Searchbar Component
  const defaultSol = 1;
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
    "Oops. It doesn't look like this camera was used on this sol.";

  return (
    <>
      <div>
        {loading ? (
          <div>loading...</div>
        ) : (
          <>
            <div>
              <MarsSearch
                selectedCamera={selectedCamera}
                setSelectedCamera={setSelectedCamera}
                sol={sol}
                setSol={setSol}
                loading={loading}
                roverData={roverData}
              />
              <div>
                <p>Maximum searchable Sol: {roverData.rover.max_sol}</p>
                <p>Current Sol: {sol}</p>
              </div>
            </div>
            <div>
              {!marsPhotos.photos.length ? (
                <div>{photoArrayEmpty}</div>
              ) : (
                marsPhotos.photos.map((photo) => {
                  return (
                    <div key={photo.id}>
                      <Image
                        loader={imageLoader}
                        src={photo.img_src}
                        alt="NASA Picture"
                        width={800}
                        height={800}
                      />
                    </div>
                  );
                })
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Neo;
