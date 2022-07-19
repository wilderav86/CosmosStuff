import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="app">
      <Head>
        <link
          href="https://api.tiles.mapbox.com/mapbox-gl-js/v<YOUR_MAPBOX_VERSION>/mapbox-gl.css"
          rel="stylesheet"
        />
      </Head>
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
      <div>
        <Link href="/Maps">
          <a>Maps</a>
        </Link>
      </div>
    </div>
  );
}
