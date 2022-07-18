import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import moment from "moment";
import { useUrl, useApi } from "../hooks";
import Image from "next/image";

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
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h2>Astronomy Pic of the Day</h2>
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
    </>
  );
};

export default APOD;
