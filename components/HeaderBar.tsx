import Link from "next/link";
import { FC } from "react";
import styles from "../styles/headerbar.module.css";

const HeaderBar: FC = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <svg
            width="85"
            height="85"
            viewBox="0 0 126 105"
            fill="none"
            xmlns="https://www.w3.org/2000/svg"
          >
            <path
              d="M123 7H7V54.1446H123L7 98H123"
              stroke="url(#paint0_linear)"
              stroke-width="13"
            />
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="65"
                y1="7"
                x2="65"
                y2="175.843"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#39D4DE" />
                <stop offset="1" stop-color="#AA23B6" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className={styles.navBarLinks}>
          <ul className={styles.taskbar}>
            <li className={styles.listItem}>
              <Link href="#div-1" scroll={false}>
                <a>About Me</a>
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link href="#div-2" scroll={false}>
                <a>Experience</a>
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link href="#div-3" scroll={false}>
                <a>Projects</a>
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link href="#div-4" scroll={false}>
                <a>Designs</a>
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link href="/v2/resume/resume.pdf" scroll={false}>
                <a target="_blank">Resume</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default HeaderBar;
