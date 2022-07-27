import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/pages/Home.module.scss";
import LinkCards from "../components/linkCard/LinkCards";

export default function Home() {
  const links = [
    {
      title: "Astronomy Picture of the Day",
      desc: "Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.",
      href: "/APOD",
    },
    {
      title: "Mars Rover Photos",
      desc: "Browse photos taken by the Perseverence Rover. Updated Daily!",
      href: "/Neo",
    },
    {
      title: "International Space Station Tracker",
      desc: "Want to know where the ISS is right now?",
      href: "/Maps",
    },
  ];

  return (
    <div className={styles.app}>
      <div className={styles.flexColumn}>
        <Image
          className={styles.bgImage}
          src="/homeBG.jpg"
          alt="cosmos background"
          layout="fill"
          priority
        />

        <div className={styles.titleText}>
          <h1 className={styles.header}>COSMOS STUFF</h1>
          <h2 className={styles.description}>
            an aggregate of cool space info
          </h2>
          <h4>what would you like to see?</h4>
          <LinkCards links={links} />
          {/* <div className={styles.pageLinks}>

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
          </div> */}
        </div>
      </div>
    </div>
  );
}
