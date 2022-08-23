import { GiHamburgerMenu } from "react-icons/gi";
import AnimateButton from "../../animations/AnimateButton";

import styles from "./Navbar.module.scss";
import classnames from "classnames"; //necessary for css transition to work with conditional classes in css modules.

const Hamburger = ({ renderNavLinks, expanded, setExpanded, hamburgerRef }) => {
  console.log("expanded", hamburgerRef);

  return (
    <div className={styles.hamburgerContainer}>
      <div className={styles.hamburger}>
        <AnimateButton>
          <GiHamburgerMenu
            className={styles.icon}
            size={30}
            onClick={() => setExpanded(!expanded)}
          />
        </AnimateButton>
      </div>
      <div
        className={[
          classnames(styles.linkContainer, {
            [styles.collapsed]: !expanded,
          }),
        ].join(" ")}
      >
        {renderNavLinks}
      </div>
    </div>
  );
};

export default Hamburger;
