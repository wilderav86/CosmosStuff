import Navbar from "../components/navbar/Navbar.js";

export default function Layout({ children }) {
  console.log(children);
  const name = children.type.name;

  //Do not render navbar on home page.

  // return (
  //   <>
  //     <Navbar />
  //     <main>{children}</main>
  //   </>
  // );

  return name === "Home" ? (
    <>{children}</>
  ) : (
    <>
      <Navbar />
      {children}
    </>
  );
}
