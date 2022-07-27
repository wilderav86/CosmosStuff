import Link from "next/link";
import styles from "./LinkCards.module.scss";

const LinkCards = ({ links }) => {
  console.log(links);

  const renderLinks = links.map((link, key) => {
    return (
      <div className={styles.link} key={key}>
        <Link href={link.href}>
          <button className={styles.btn}>
            <a className={styles.title}>{link.title}</a>
            <p className={styles.desc}>{link.desc}</p>
          </button>
        </Link>
      </div>
    );
  });

  return <div className={styles.links}>{renderLinks}</div>;
};

export default LinkCards;
