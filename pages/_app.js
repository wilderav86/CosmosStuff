import Layout from "../components/Layout";
import { AnimatePresence } from "framer-motion";
import "../styles/globals.css";
import PageFadeIn from "../animations/PageFadein";

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AnimatePresence>
  );
}

export default MyApp;
