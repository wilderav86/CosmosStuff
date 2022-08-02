import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "react";

const PageFadeIn = ({ children }) => {
  console.log(children);

  return (
    <motion.div
      key={children.key}
      initial={{ opacity: 0, x: -200 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        type: "linear",
        // type: "spring",
        // mass: 0.35,
        // stiffness: 75,
        // duration: 1.5,
      }}
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1, duration: 2 }}
      // transition={{ duration: 0.4 }}
      exit={{ opacity: 0, x: 200 }}
    >
      {children}
    </motion.div>
  );
};

export default PageFadeIn;
