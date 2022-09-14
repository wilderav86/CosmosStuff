import Image from "next/image";
import { useEffect, useState } from "react";
import Zoom from "react-medium-image-zoom";
import AnimateButton from "../animations/AnimateButton";
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

  console.log("data", data);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.headerContainer}>
        <h2 className={styles.title}>JAMES WEBB SPACE TELESCOPE</h2>
        <p className={styles.pageInfo}>
          The James Webb Space Telescope (JWST) is a space telescope designed
          primarily to conduct infrared astronomy. As the largest optical
          telescope in space, its high infrared resolution and sensitivity allow
          it to view objects too early, distant, or faint for the Hubble Space
          Telescope. This is expected to enable a broad range of investigations
          across the fields of astronomy and cosmology, such as observation of
          the first stars and the formation of the first galaxies, and detailed
          atmospheric characterization of potentially habitable exoplanets.{" "}
          <span className={styles.link}>
            <a href="https://webbtelescope.org/">Learn More</a>
          </span>
        </p>
      </div>
      <h2 className={styles.page}>Current Page: {page}</h2>
      <div className={styles.buttonContainer}>
        <AnimateButton>
          <button
            className={styles.btn}
            disabled={page === 1}
            onClick={() => setPage((page -= 1))}
          >
            Back
          </button>
        </AnimateButton>

        <AnimateButton>
          <button className={styles.btn} onClick={() => setPage((page += 1))}>
            Next
          </button>
        </AnimateButton>
      </div>

      {loading ? (
        <Loading />
      ) : (
        <div className={styles.imagesContainer}>
          {data.body.map((image, key) => {
            console.log("image", image);
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
