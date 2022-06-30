import React, { useEffect, useState } from "react";

const Neo = () => {
  const [loading, setLoading] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [camera, setCamera] = useState("NAVCAM");

  useEffect(() => {
    setLoading(true);

    const FetchMarsData = async () => {
      const key = "hUaQ4htFc7b07hk6RynOrGN4S6V5wJaTY1xcdDRJ";
      const params = new URLSearchParams({
        api_key: key,
        sol: 1000,
        camera: "NAVCAM",
      });
      const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?${params.toString()}`;

      const res = await fetch(url);
      const data = await res.json();

      setPhotos(data.photos.slice(0, 25));
      setLoading(false);
    };

    FetchMarsData();
  }, [camera]);

  const renderPhotos = () => {
    return (
      <>
        {photos.map((photo) => {
          // console.log(photo);
          return (
            <div key={photo.id}>
              <img src={photo.img_src} />
            </div>
          );
        })}
      </>
    );
  };

  return <>{loading ? <div>loading...</div> : renderPhotos()}</>;
};

export default Neo;
