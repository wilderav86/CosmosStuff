import Layout from "../components/Layout";
import { AnimatePresence } from "framer-motion";
import "../styles/globals.css";
import InitialFadeIn from "../animations/InitialFadeIn";

function MyApp({ Component, pageProps, router }) {
  return (
    <div className="mainbgColor">
      <Layout>
        <AnimatePresence>
          <InitialFadeIn>
            <Component {...pageProps} key={router.route} />
          </InitialFadeIn>
        </AnimatePresence>
      </Layout>
    </div>
  );
}

export default MyApp;
