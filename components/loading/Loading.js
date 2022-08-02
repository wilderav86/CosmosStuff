import PageFadeIn from "../../animations/PageFadein";
import styles from "./Loading.module.scss";

const Loading = () => {
  return (
    <PageFadeIn>
      <div className={styles.container}>
        <h1>Loading....</h1>
      </div>
    </PageFadeIn>
  );
};

export default Loading;
