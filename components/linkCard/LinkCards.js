import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./LinkCards.module.scss";
import AnimateButton from "../../animations/AnimateButton";

const LinkCards = ({ links }) => {
  //animations

  const animateContainer = {
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
    visible: {
      opacity: 1,
      transition: {
        type: "spring",
        mass: 0.35,
        stiffness: 75,
        duration: 0.8,
        staggerChildren: 0.15,
      },
    },
  };

  const animateHeader = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animateItem = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  const renderLinks = links.map((link, key) => {
    console.log("id", link.id);
    return (
      <Link href={link.href} key={key} passHref>
        <motion.div className={styles.link} variants={animateItem}>
          <AnimateButton>
            <div id={link.id} className={styles.btn}>
              <div className={styles.titleContainer}>
                <a className={styles.title}>{link.title}</a>
              </div>
              <div className={styles.descContainer}>
                <p className={styles.desc}>{link.desc}</p>
                <Image
                  className={styles.cardImage}
                  src={link.image}
                  alt={link.alt}
                  layout="fill"
                  objectFit="cover"
                  blurDataURL={link.image}
                  placeholder="blur"
                  quality={40}
                />
              </div>
            </div>
          </AnimateButton>
        </motion.div>
      </Link>
    );
  });

  return (
    <motion.div
      className={styles.links}
      initial="hidden"
      animate="visible"
      variants={animateContainer}
    >
      {renderLinks}
    </motion.div>
  );
};

export default LinkCards;
