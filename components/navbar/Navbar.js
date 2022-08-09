import Link from "next/link";
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
      <div className={styles.link} key={key}>
        <Link href={navLink.href}>{navLink.title}</Link>
      </div>
    );
  });

  return <div className={styles.container}>{renderNavLinks}</div>;
};

export default Navbar;
