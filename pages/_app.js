import Layout from "../components/Layout";
import { AnimatePresence } from "framer-motion";
import "../styles/globals.css";

function MyApp({ Component, pageProps, router }) {
  return (
    <Layout>
      {/* <div className="mainbgColor"> */}
      <AnimatePresence>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
      {/* </div> */}
    </Layout>
  );
}

export default MyApp;
