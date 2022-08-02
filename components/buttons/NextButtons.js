import AnimateButton from "../../animations/AnimateButton";
import styles from "./Buttons.module.scss";

const NextButtons = ({ increment, decrement, min, max, state, setState }) => {
  const handlePrevious = () => {
    console.log("min", min);
    if (state > min) {
      setState(decrement);
    }
  };

  const handleNext = () => {
    if (state < max) {
      setState(increment);
    }
  };

  console.log("state", state);

  return (
    <div className={styles.container}>
      <AnimateButton>
        <button
          className={styles.previous}
          onClick={handlePrevious}
          disabled={state <= min && true}
        >
          Previous
        </button>
      </AnimateButton>
      <AnimateButton>
        <button
          className={styles.next}
          onClick={handleNext}
          disabled={state >= max && true}
        >
          Next
        </button>
      </AnimateButton>
    </div>
  );
};

export default NextButtons;
