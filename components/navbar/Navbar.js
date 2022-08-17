import Link from "next/link";
import { useState } from "react";
import AnimateButton from "../../animations/AnimateButton";
import Hamburger from "./Hamburger";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const navLinks = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Astronomy Pic of the Day",
      href: "/APOD",
    },
    {
      title: "Mars Rover Photos",
      href: "/MarsRover",
    },
    {
      title: "ISS Tracker",
      href: "/Maps",
    },

    {
      title: "Test",
      href: "/Test",
    },
  ];

  const renderNavLinks = navLinks.map((navLink, key) => {
    return (
      <AnimateButton key={key}>
        <div className={styles.link}>
          <Link href={navLink.href}>{navLink.title}</Link>
        </div>
      </AnimateButton>
    );
  });

  return (
    <nav className={styles.container}>
      <div className={styles.desktopLinks}>{renderNavLinks}</div>

      {/* <div className={styles.hamburger}> */}
      <Hamburger renderNavLinks={renderNavLinks} />
      {/* </div> */}
    </nav>
  );
};

export default Navbar;
