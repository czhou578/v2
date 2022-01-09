import { FC } from "react";
import styles from '../styles/headerbar.module.css'

const HeaderBar: FC = () => {
  return (
    <div className={styles.navbarWrapper}>
      <ul className="taskbar">
        <li className={styles.listItem}>
          <a href="#section-2">About Me</a>
        </li>
        <li className={styles.listItem}>
          <a href="#section-3">Experience</a>
        </li>
        <li className={styles.listItem}>
          <a href="#section-4">Projects</a>
        </li>
        <li className={styles.listItem}>
          <a href="#section-5">Designs</a>
        </li>
        <li className={styles.listItem}>
          <a href="#resume">Resume</a>
        </li>
      </ul>
    </div>
  )
}

export default HeaderBar