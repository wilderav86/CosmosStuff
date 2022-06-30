import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
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