import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";
import { FC } from "react";
import styles from "../styles/noteworthyprojects.module.css";

const Classwork: FC = () => {
  return (
    <div className={styles.container}>
      <ClassworkProjectCard
        header="Web Programming (Winter 2022)"
        githubLink="https://github.com/czhou578/CS-380-Work"
        description="Work that I did for Bellevue College's Web Programming class"
        techUsed={["HTML, CSS, JS, React"]}
      />
      <ClassworkProjectCard
        header="Internet of Things (Winter 2022)"
        githubLink="https://github.com/czhou578/IoT-work"
        description="Code that I wrote for Bellevue College's IoT class"
        techUsed={["C++, C"]}
      />
      <ClassworkProjectCard
        header="Operating Systems (Fall 2021)"
        githubLink="https://github.com/czhou578/CS360-Work"
        description="Code that I wrote for Bellevue College's Operating Systems class"
        techUsed={["C"]}
      />
      <ClassworkProjectCard
        header="Data Structures / Databases (Fall 2020)"
        githubLink="https://github.com/czhou578/Fall-2020-Work"
        description="Data Structures and databases work from Bellevue College"
        techUsed={["Java, C++"]}
      />
      <ClassworkProjectCard
        header="Programming Languages (Winter 2021)"
        githubLink="https://github.com/czhou578/Winter-2021-Quarter-Work"
        description="Work from mainly my Programming Languages class at Bellevue College"
        techUsed={["Java, Python"]}
      />
      <ClassworkProjectCard
        header="Fundamentals of CS II (Winter 2020)"
        githubLink="https://github.com/czhou578/CS-211-Work"
        description="Work from my second ever CS class at Bellevue College"
        techUsed={["Java"]}
      />
    </div>
  );
};

const ClassworkProjectCard: React.FC<{
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

export default Classwork;
