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
        description="This is the very first version of my personal website, using basic front end technologies."
        techUsed={["HTML, CSS, JS"]}
      />
      <NoteWorthyProjectCard
        header="Wordament V1"
        githubLink="https://github.com/czhou578/Wordament"
        description="This is the very first version of Wordament, using basic web technologies."
        techUsed={["HTML, CSS, JS"]}
      />
      <NoteWorthyProjectCard
        header="Doctors Orders"
        githubLink="https://github.com/deekshacheruku/DoctorsOrders"
        description="An Android app to help doctors and family track the medicine schedules of elderly patients."
        techUsed={["Java"]}
      />
      <NoteWorthyProjectCard
        header="Country Database"
        githubLink="https://github.com/cs411-alawini/fa22-cs411-Q-team044-OurSQL"
        description="A web app that allows for querying various data about all the countries of the world."
        techUsed={["JS, React"]}
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
