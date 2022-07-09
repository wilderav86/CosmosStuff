import React, { useEffect, useState } from "react";
import MarsSearchDropDown from "../components/MarsSearchDropDown";
import { useApi, useUrl } from "../hooks";
import moment from "moment";

const Neo = () => {
  const [selectedCamera, setSelectedCamera] = useState("MAST");

  const defaultDate = moment().format("YYYY-MM-DD");
  const [searchDate, setSearchDate] = useState(defaultDate);

  const key = "hUaQ4htFc7b07hk6RynOrGN4S6V5wJaTY1xcdDRJ";
  const sol = 2;
  const camera = selectedCamera;

  const roverInfoUrl = useUrl(
    "https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/",
    { api_key: key }
  );

  const { roverInfo } = useApi(roverInfoUrl);
  console.log(roverInfo);

  const url = useUrl(
    "https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/photos",
    { api_key: key, sol: sol, camera: selectedCamera }
  );

  const { data, loading, setLoading } = useApi(url, camera);

  // useEffect(() => {
  //   setLoading(true);

  //   const FetchMarsData = async () => {
  //     const key = "hUaQ4htFc7b07hk6RynOrGN4S6V5wJaTY1xcdDRJ";
  //     const params = new URLSearchParams({
  //       api_key: key,
  //       sol: 1500,
  //       camera: "MAST",
  //     });
  //     const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?${params.toString()}`;

  //     const res = await fetch(url);
  //     const data = await res.json();

  //     setPhotos(data.photos.slice(0, 25));
  //     setLoading(false);
  //   };

  //   FetchMarsData();
  // }, [camera]);

  // const renderPhotos = data.map((photo) => {
  //   // console.log(photo);
  //   return (
  //     <div key={photo.id}>
  //       <img src={photo.img_src} />
  //     </div>
  //   );
  // });

  return (
    <>
      {loading ? (
        <div>loading...</div>
      ) : (
        <div>
          <MarsSearchDropDown
            selected={selectedCamera}
            setSelected={setSelectedCamera}
          />

          {data.photos.map((photo) => {
            return (
              <div key={photo.id}>
                <img src={photo.img_src} />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Neo;
