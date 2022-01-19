import { FC } from "react";
import styles from "aboutcard.module.css";

const Aboutcard: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <h3>About me</h3>
      </div>
      <div>
        <pre>This is colin speaking</pre>
      </div>
    </div>
  );
};
