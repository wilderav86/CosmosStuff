import InitialFadeIn from "../../animations/InitialFadeIn";
import styles from "./Loading.module.scss";

const Loading = () => {
  return (
    <InitialFadeIn>
      <div className={styles.container}>
        <h1 className={styles.header}>Loading....</h1>
      </div>
    </InitialFadeIn>
  );
};

export default Loading;
