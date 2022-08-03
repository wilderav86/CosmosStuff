import Navbar from "../components/navbar/Navbar.js";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  //Do not render navbar on home page.
  const route = useRouter();

  return route.pathname === "/" ? (
    <>{children}</>
  ) : (
    <>
      <Navbar />
      {children}
    </>
  );
}
