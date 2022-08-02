import { motion } from "framer-motion";

const AnimateButton = ({ children }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.9 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimateButton;
