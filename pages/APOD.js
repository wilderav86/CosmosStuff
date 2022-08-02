import React, { useState } from "react";
import SearchBar from "../components/searchbar/SearchBar";
import moment from "moment";
import { useUrl, useApi } from "../hooks";
import Image from "next/image";
import styles from "../styles/pages/Apod.module.scss";
import NextButtons from "../components/buttons/NextButtons";
import PageFadeIn from "../animations/PageFadein";

const APOD = () => {
  const defaultDate = moment().format("YYYY-MM-DD");
  console.log("moment format", defaultDate);

  /////////////////////////////////////////////////////////////////////
  //why does new Date() give me tomorrows date
  const tempdefaultDate = new Date();

  console.log("tempdefaultDate", tempdefaultDate);

  console.log("to string", tempdefaultDate.toISOString().slice(0, 10));

  // const date = new Date();

  // date.setDate(date.getDate() + 1);

  // console.log("+1", date);

  ////////////////////////////////////////////////////////////////////////

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

  // const maxDate = new Date();
  // const minDate = new Date(1995, 6, 16);
  const valid = searchDate >= minDate && searchDate <= maxDate;

  //Next/Image loader
  const imageLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  return (
    <>
      <PageFadeIn>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className={styles.container}>
            <h2 className={styles.title}>ASTRONOMY PICTURE OF THE DAY</h2>
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
            {/* <NextButtons
            increment={searchDate.setDate(searchDate.getDate() + 1)}
            decrement={searchDate.setDate(searchDate.getDate() - 1)}
            min={minDate}
            max={maxDate}
            state={searchDate}
            setState={setSearchDate}
          /> */}
            <h3>{data.title}</h3>
            <h4>{data.date}</h4>
            {/* <img src={data.url} /> */}
            <Image
              loader={imageLoader}
              src={data.url}
              alt="NASA Picture"
              width={800}
              height={800}
            />
            <p>{data.explanation}</p>
          </div>
        )}
      </PageFadeIn>
    </>
  );
};

export default APOD;
