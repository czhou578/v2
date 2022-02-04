import React, { FC } from 'react';
import styles from '../styles/introduction.module.css';

const Introduction: FC = () => {
  return (
    <div className={styles.introContainer}>
      <h1>Hi, my name is </h1>
      <h2>Colin Zhou</h2>
      <h3>
        <div className={styles.c1}>
          <div className={styles.description}>
            I&apos;m a developer and hobbyist designer based in Issaquah, Washington.
          </div>
        </div>
        <br></br>
        <div className={styles.c2}>
          <div className={styles.description2}>
            I have a passion for front end web development. Currently looking
            for technical work opportunities for Summer 2022...
          </div>
        </div>
      </h3>
    </div>
  );
};

export default Introduction;
