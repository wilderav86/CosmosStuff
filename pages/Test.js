import Image from "next/image";
import LinkCards from "../components/linkCard/LinkCards";
import Loading from "../components/loading/Loading";
import Navbar from "../components/navbar/Navbar";

import styles from "../styles/pages/Test.module.scss";

const Test = () => {
  const links = [
    {
      title: "Astronomy Picture of the Day",
      desc: "Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.",
      href: "/APOD",
      image: "/observatory.jpg",
      alt: "apod image",
    },
    {
      title: "Mars Rover Photos",
      desc: "Browse photos taken by the Perseverence Rover. Updated Daily!",
      href: "/MarsRover",
      image: "/marsRover.jpg",
      alt: "rover image",
    },
    {
      title: "International Space Station Tracker",
      desc: "Want to know where the ISS is right now?",
      href: "/Maps",
      image: "/iss.jpg",
      alt: "iss image",
    },
  ];

  return (
    <div className={styles.pageContainer}>
      <div
        className={styles.bgImage}
        style={{ height: "100vh", width: "100vw" }}
      >
        <Image
          className={styles.image}
          src="/missionControlCropped.jpg"
          alt="moble background"
          layout="fill"
          objectFit="cover"
          objectPosition="50% 50%"
        />
      </div>
      <div className={styles.linkCards}>
        <LinkCards links={links} />
      </div>
      <div>
        <Navbar />
      </div>
    </div>
  );
};

export default Test;
