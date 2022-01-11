import React, { FC } from 'react';
import styles from '../styles/introduction.module.css'

const Introduction: FC = () => {
  return (
    <div className={styles.introContainer}>
      <h1>Hi, my name is </h1>
      <h2>Colin Zhou</h2>
      <div className={styles.introText}>
        <pre>
            "I'm a developer and hobbyist designer based in Issaquah, Washington with a desire to bridge the
            chasm between technical and non-technical. I have a passion for front end web development.
            I am currently looking for technical work opportunities for Summer 2022. "         
        </pre>
      </div>
    </div>
  )
}

export default Introduction