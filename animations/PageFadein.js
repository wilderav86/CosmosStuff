import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "react";

const PageFadeIn = ({ children }) => {
  console.log("children", children);

  return (
    <motion.div
      key={children.props.children}
      initial={{ x: -3000 }}
      animate={{ x: 0 }}
      transition={{
        // type: "linear",
        type: "spring",
        mass: 0.35,
        stiffness: 75,
        duration: 1.5,
      }}
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1, duration: 2 }}
      // transition={{ duration: 0.4 }}
      exit={{ x: 3000 }}
    >
      {children}
    </motion.div>
  );
};

export default PageFadeIn;
