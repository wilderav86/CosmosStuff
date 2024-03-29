import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/pages/Home.module.scss";
import LinkCards from "../components/linkCard/LinkCards";
import PageFadeIn from "../animations/PageFadein";
import InitialFadeIn from "../animations/InitialFadeIn";

export default function Home() {
  const links = [
    {
      title: "Astronomy Picture of the Day",
      desc: "Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.",
      href: "/APOD",
      image: "/observatory.jpg",
      alt: "apod image",
      id: "APOD",
    },
    {
      title: "Mars Rover Photos",
      desc: "Browse photos taken by the Perseverence Rover. Updated Daily!",
      href: "/MarsRover",
      image: "/marsRover.jpg",
      alt: "rover image",
      id: "MarsRover",
    },
    {
      title: "International Space Station Tracker",
      desc: "Want to know where the ISS is right now?",
      href: "/Maps",
      image: "/iss.jpg",
      alt: "iss image",
      id: "Maps",
    },

    {
      title: "James Webb Space Telescope",
      desc: "Raw images from the JWST",
      href: "/JamesWebb",
      image: "/JWST.webP",
      alt: "JWST image",
      id: "JWST",
    },
  ];

  return (
    <div className={styles.pageContainer}>
      {/* <InitialFadeIn> */}
      <div className={styles.app}>
        <div className={styles.bannerContainer}>
          <div>
            <Image
              className={styles.bgImage}
              src="/homeBG.jpg"
              alt="cosmos background"
              layout="fill"
              objectFit="cover"
              blurDataURL="/homeBG.jpg"
              placeholder="blur"
              quality={60}
              priority
            />
          </div>
          <div className={styles.bannerText}>
            <h1 className={styles.header}>SPACE JUNK</h1>
            <h2 className={styles.description}>
              an aggregate of cool cosmos info
            </h2>
          </div>
        </div>
        <div className={styles.body}>
          <div className={styles.titleText}>
            <LinkCards links={links} />
          </div>
        </div>
      </div>{" "}
      {/* </InitialFadeIn> */}
    </div>
  );
}
