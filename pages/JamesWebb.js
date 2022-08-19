import Image from "next/image";
import { useEffect, useState } from "react";
import Zoom from "react-medium-image-zoom";

import { useApi, useUrl } from "../hooks";
import { headers } from "../next.config";

import styles from "../styles/pages/JamesWebb.module.scss";

const JamesWebb = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const url = "https://api.jwstapi.com/all/type/jpg?page=100&perPage=10";
  const headers = new Headers({
    "X-API-KEY": "353254d5-cf72-4648-b977-ba098e7f3a19",
  });

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch(url, { headers });
      const json = await response.json();

      setData(json);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className={styles.pageContainer}>
      {loading ? (
        <div>loading</div>
      ) : (
        data.body.map((image, key) => {
          console.log("image", image.location);
          return (
            <Zoom key={key}>
              <div className={styles.imageContainer}>
                <Image src={image.location} layout="fill" objectFit="contain" />
              </div>{" "}
            </Zoom>
          );
        })
      )}
    </div>
  );
};

export default JamesWebb;
