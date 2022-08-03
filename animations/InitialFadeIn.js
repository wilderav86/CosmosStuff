import { motion } from "framer-motion";

const InitialFadeIn = ({ children }) => {
  return (
    <motion.div
      key={children.key}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1, duration: 2 }}
      transition={{ duration: 0.4 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default InitialFadeIn;
