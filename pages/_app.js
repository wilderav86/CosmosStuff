import Layout from "../components/Layout";
import { AnimatePresence } from "framer-motion";
import "../styles/globals.css";
import "../styles/components/Zoom.scss";
import InitialFadeIn from "../animations/InitialFadeIn";

function handleExitComplete() {
  if (typeof window !== "undefined") {
    window.scrollTo({ top: 0 });
  }
}

function MyApp({ Component, pageProps, router }) {
  return (
    <div className="mainbgColor">
      <Layout>
        <AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
          <InitialFadeIn>
            <Component {...pageProps} key={router.asPath} />
          </InitialFadeIn>
        </AnimatePresence>
      </Layout>
    </div>
  );
}

export default MyApp;
