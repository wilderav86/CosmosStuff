import React, { useEffect, useState } from "react";
import MarsSearch from "../components/MarsSearch";
import { useApi, useUrl } from "../hooks";
import moment from "moment";
import Image from "next/image";

const Neo = () => {
  //Used for MarsSearch Dropdown component
  const [selectedCamera, setSelectedCamera] = useState("NAVCAM_LEFT");
  console.log(selectedCamera);

  //Used for MarsSearch Searchbar Component

  const [sol, setSol] = useState(1);
  //Fetch parameters
  const key = "hUaQ4htFc7b07hk6RynOrGN4S6V5wJaTY1xcdDRJ";

  const camera = "NAVCAM_LEFT";

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

  console.log("neodata", data);
  const [marsPhotos, roverData] = data;

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
              <div>Current Sol: {sol}</div>
            </div>
            <div>
              {marsPhotos.photos.map((photo) => {
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
              })}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Neo;
