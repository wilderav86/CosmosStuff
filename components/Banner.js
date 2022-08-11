const Banner = () => {
  return (
    <div className={styles.bannerContainer}>
      <div>
        <Image
          className={styles.bgImage}
          src="/homeBG.jpg"
          alt="cosmos background"
          layout="fill"
          objectFit="cover"
          blurDataURL="/homeBG.jpg"
          placeholder="blur"
          quality={60}
          priority
        />
      </div>
      <div className={styles.bannerText}>
        <h1 className={styles.header}>COSMOS STUFF</h1>
        <h2 className={styles.description}>an aggregate of cool space info</h2>
      </div>
    </div>
  );
};
