import Image from "next/image";
import Link from "next/link";
import styles from "./LinkCards.module.scss";

const LinkCards = ({ links }) => {
  console.log(links);

  const renderLinks = links.map((link, key) => {
    return (
      <div className={styles.link} key={key}>
        <Link href={link.href}>
          <div className={styles.btn}>
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
                blurDataURL={link.image}
                placeholder="blur"
                quality={40}
              />
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return <div className={styles.links}>{renderLinks}</div>;
};

export default LinkCards;
