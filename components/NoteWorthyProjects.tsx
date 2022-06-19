import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";
import { FC } from "react";
import styles from "../styles/noteworthyprojects.module.css";

const NoteWorthyProjects: FC = () => {
  return (
    <div className={styles.container}>
      <NoteWorthyProjectCard
        header="Morsecode Binary Tree"
        githubLink="https://github.com/czhou578/MorseCodeBinaryTree"
        description="Decoding morse code using binary trees, written in Java. This was for a class project."
        techUsed={["Java"]}
      />
      <NoteWorthyProjectCard
        header="Personal Website V1"
        githubLink="https://github.com/czhou578/Personal-Website"
        description="This is the very first version of my personal website, which I'm a little embarassed to look at."
        techUsed={["HTML CSS JS"]}
      />
    </div>
  );
};

const NoteWorthyProjectCard: React.FC<{
  header: string;
  githubLink: string;
  description: string;
  techUsed: string[];
}> = ({ header, githubLink, techUsed, description }) => {
  return (
    <div className={styles.wrapper}>
      <h3>{header}</h3>
      <p>{description}</p>
      <div className={styles.listicon}>
        <ul className={styles.list}>
          {techUsed.map((element, key) => {
            return <li key={key}>{element}</li>;
          })}
        </ul>
        <Link href={githubLink}>
          <a className={styles.link}>
            <GitHubIcon />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default NoteWorthyProjects;
