import Navbar from "../navbar/Navbar";
import Image from "next/image";
import LinkCards from "../linkCard/LinkCards";

import styles from "../../styles/pages/Test.module.scss";

const DesktopLayout = () => {
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
  ];

  return (
    <div className={styles.pageContainer}>
      <div
        className={styles.bgImage}
        style={{ height: "100vh", width: "130vw" }}
      >
        <Image
          className={styles.image}
          src="/missionControlLG.jpg"
          alt="desktop background"
          layout="fill"
          objectFit="cover"
          objectPosition="50% 50%"
          priority
        />
      </div>
      <div className={styles.linkCards}>
        <LinkCards links={links} />
      </div>
      <div className={styles.navbarContainer}>
        <Navbar />
      </div>
    </div>
  );
};

export default DesktopLayout;
