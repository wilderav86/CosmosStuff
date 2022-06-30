import axios from "axios";
import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import moment from "moment";

const APOD = () => {
  const [loading, setLoading] = useState(true);
  const [apodData, setApodData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const defaultDate = moment().format("YYYY-MM-DD");

  const key = "hUaQ4htFc7b07hk6RynOrGN4S6V5wJaTY1xcdDRJ";
  const params = new URLSearchParams({
    api_key: key,
    ...(searchTerm ? { date: searchTerm } : { date: defaultDate }),
  });
  const url = `https://api.nasa.gov/planetary/apod?${params.toString()}`;

  //Whenever searchTerm changes, get api data. If search term is empty, date param = today, otherwise date param = searchTerm.
  useEffect(() => {
    const fetchApodData = async () => {
      setLoading(true);

      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setApodData(data);

      setLoading(false);
    };

    fetchApodData();
    // axios
    //   .get("https://api.nasa.gov/planetary/apod", {
    //     params: {
    //       api_key: key,
    //       ...(searchTerm ? { date: searchTerm } : { date: defaultDate }),
    //     },
    //   })
    //   .then((response) => {
    //     setApodData(response.data);

    //
    //   console.log("requested");
    // });
  }, [searchTerm]);

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h2>Astronomy Pic of the Day</h2>
          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            setLoading={setLoading}
            defaultDate={defaultDate}
            loading={loading}
          />
          <h3>{apodData.title}</h3>
          <h4>{apodData.date}</h4>
          <img src={apodData.url} />
          <p>{apodData.explanation}</p>
        </div>
      )}
    </>
  );
};

export default APOD;
