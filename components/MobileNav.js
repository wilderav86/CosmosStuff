import styles from "../components/navbar/Navbar.module.scss";

const MobileNav = () => {
  const navLinks = [
    {
      title: "Astronomy Pic of the Day",
      href: "#APOD",
    },
    {
      title: "Mars Rover Photos",
      href: "#MarsRover",
    },
    {
      title: "ISS Tracker",
      href: "#Maps",
    },

    {
      title: "Test",
      href: "#Test",
    },
  ];

  const renderNavLinks = navLinks.map((navLink, key) => {
    console.log(navLink.href);
    return (
      <div className={styles.link} key={key}>
        <a href={navLink.href}>{navLink.title}</a>
      </div>
    );
  });

  return <div className={styles.container}>{renderNavLinks}</div>;
};

export default MobileNav;
