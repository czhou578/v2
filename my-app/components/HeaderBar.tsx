import { FC } from "react";
import styles from '../styles/headerbar.module.css'
import resume from '../public/images/resume.pdf'

const HeaderBar: FC = () => {
  return (
    <div className={styles.navbarWrapper}>
      <div className={styles.logo}>
        <svg width="85" height="85" viewBox="0 0 126 105" fill="none" xmlns="https://www.w3.org/2000/svg">
          <path d="M123 7H7V54.1446H123L7 98H123" stroke="url(#paint0_linear)" stroke-width="13"/>
          <defs>
          <linearGradient id="paint0_linear" x1="65" y1="7" x2="65" y2="175.843" gradientUnits="userSpaceOnUse">
          <stop stop-color="#39D4DE"/>
          <stop offset="1" stop-color="#AA23B6"/>
          </linearGradient>
          </defs>
        </svg>
      </div>
      <ul className={styles.taskbar}>
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
          <a href={resume} target="_blank">Resume</a>
        </li>
      </ul>
    </div>
  )
}

export default HeaderBar