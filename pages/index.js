import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

import { useApi, useUrl } from "../hooks";
import { useState, useEffect } from "react";

export default function Home() {
  // const roverInfoUrl = useUrl(
  //   "https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/",
  //   { api_key: "hUaQ4htFc7b07hk6RynOrGN4S6V5wJaTY1xcdDRJ" }
  // );
  // const url = useUrl(
  //   "https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/photos",
  //   {
  //     api_key: "hUaQ4htFc7b07hk6RynOrGN4S6V5wJaTY1xcdDRJ",
  //     sol: 50,
  //     camera: "NAVCAM_LEFT",
  //   }
  // );

  // const urls = [roverInfoUrl, url];

  // const [loading, setLoading] = useState(true);
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     console.log(urls.length);
  //     setLoading(true);
  //     Promise.all(
  //       urls.map((url) => {
  //         fetch(url)
  //           .then((res) => res.json())
  //           .then((json) => {
  //             setData(json);
  //           });
  //       })
  //     );

  //     setLoading(false);
  //   };

  //   fetchData();
  // }, []);
  // if (!loading) {
  //   console.log(data);
  // }

  return (
    <div className="app">
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
      <div>
        <Link href="/APOD">
          <a>Astronomy Pic of the Day</a>
        </Link>
      </div>
      <div>
        <Link href="/Neo">
          <a>Mars Rover Photos</a>
        </Link>
      </div>
    </div>
  );
}
