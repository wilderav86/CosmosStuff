import Image from "next/image";
import { useEffect, useState } from "react";
import Zoom from "react-medium-image-zoom";
import Loading from "../components/loading/Loading";

import { useApi, useUrl } from "../hooks";
import { headers } from "../next.config";

import styles from "../styles/pages/JamesWebb.module.scss";

const JamesWebb = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  //fetch suffix list
  // const url = "https://api.jwstapi.com/suffix/list";

  //
  // const url = "https://api.jwstapi.com/all/suffix/_cal?page=1&perPage=10";

  //fetch by jpg
  const url = `https://api.jwstapi.com/all/type/jpg?page=${page}&perPage=10`;
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
  }, [page]);

  console.log(data);

  return (
    <div className={styles.pageContainer}>
      <button onClick={() => setPage((page -= 1))}>Back</button>
      <button onClick={() => setPage((page += 1))}>Next</button>
      {loading ? (
        <Loading />
      ) : (
        <div className={styles.imagesContainer}>
          {data.body.map((image, key) => {
            // console.log("image", image);
            return (
              <Zoom key={key}>
                <div className={styles.imageContainer}>
                  <Image
                    src={image.location}
                    height={260}
                    width={250}
                    layout="responsive"
                    objectFit="contain"
                  />
                </div>{" "}
              </Zoom>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default JamesWebb;
