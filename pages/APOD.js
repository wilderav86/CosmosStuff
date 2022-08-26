import React, { useState } from "react";
import SearchBar from "../components/searchbar/SearchBar";
import moment from "moment";
import { useUrl, useApi } from "../hooks";
import Image from "next/image";
import styles from "../styles/pages/Apod.module.scss";
import Loading from "../components/loading/Loading";
import Zoom from "react-medium-image-zoom";
// import "react-medium-image-zoom/dist/styles.css";

const APOD = () => {
  const defaultDate = moment().format("YYYY-MM-DD");

  const [searchDate, setSearchDate] = useState(defaultDate);

  //Fetch Data
  const url = useUrl("https://api.nasa.gov/planetary/apod", {
    api_key: "hUaQ4htFc7b07hk6RynOrGN4S6V5wJaTY1xcdDRJ",
    date: searchDate,
  });

  const { loading, setLoading, data } = useApi(url, [searchDate]);

  //SearchBar props

  const maxDate = new Date().toISOString().slice(0, 10);
  const minDate = new Date(1995, 6, 16).toISOString().slice(0, 10);

  const valid = searchDate >= minDate && searchDate <= maxDate;

  //Next/Image loader
  const imageLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  return (
    <>
      <div className={styles.pageContainer}>
        {loading ? (
          <Loading />
        ) : (
          <div className={styles.container} key="apod">
            <h2 className={styles.title}>ASTRONOMY PICTURE OF THE DAY</h2>
            <p className={styles.pageInfo}>
              Each day a different image or photograph of our fascinating
              universe is featured, along with a brief explanation written by a
              professional astronomer. Enter a date in the searchbar to find
              previous images.
            </p>
            <SearchBar
              searchTerm={searchDate}
              setSearchTerm={setSearchDate}
              setLoading={setLoading}
              defaultTerm={defaultDate}
              loading={loading}
              min={minDate}
              max={maxDate}
              valid={valid}
              invalidMessage={`Please choose a date between ${minDate} and ${maxDate}`}
              type={"date"}
            />
            <h3 className={styles.photoTitle}>{data.title}</h3>
            <h4>{data.date}</h4>
            <Zoom>
              <div className={styles.imageContainer}>
                <Image
                  loader={imageLoader}
                  src={data.url}
                  alt="NASA Picture"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </Zoom>

            <div className={styles.explanationContainer}>
              <p>{data.explanation}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default APOD;
