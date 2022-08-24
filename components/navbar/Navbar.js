import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import AnimateButton from "../../animations/AnimateButton";
import Hamburger from "./Hamburger";
import styles from "./Navbar.module.scss";
import { useDetectOutsideClick } from "../../hooks";
import classnames from "classnames";

const Navbar = () => {
  const navRef = useRef(null);
  const [expanded, setExpanded] = useDetectOutsideClick(navRef, false);

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
      title: "James Webb Telescope",
      href: "/JamesWebb",
    },
  ];

  const renderNavLinks = navLinks.map((navLink, key) => {
    return (
      <div key={key} className={styles.link} onClick={() => setExpanded(false)}>
        <AnimateButton>
          <Link href={navLink.href}>{navLink.title}</Link>
        </AnimateButton>
      </div>
    );
  });
  // visible ? styles.container : styles.collapsed
  return (
    <nav className={styles.container} ref={navRef}>
      <div className={styles.desktopLinks}>{renderNavLinks}</div>
      <Hamburger
        renderNavLinks={renderNavLinks}
        expanded={expanded}
        setExpanded={setExpanded}
      />
    </nav>
  );
};

export default Navbar;
