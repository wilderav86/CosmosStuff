import Image from "next/image";
import DesktopLayout from "../components/desktopLayout/DesktopLayout";
import LinkCards from "../components/linkCard/LinkCards";
import Loading from "../components/loading/Loading";
import MobileLayout from "../components/mobileLayout/MobileLayout";
import MobileNav from "../components/MobileNav";
import Navbar from "../components/navbar/Navbar";

import styles from "../styles/pages/Test.module.scss";

const Test = () => {
  return (
    <>
      <MobileLayout />
      <DesktopLayout />
    </>
  );
};

export default Test;
