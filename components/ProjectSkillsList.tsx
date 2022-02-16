import styles from "../styles/skillsList.module.css";

const ProjectSkillsList: React.FC<{ skills: string[] }> = ({ skills }) => {
  return (
    <ul className={styles.list}>
      {skills.map((element, key) => {
        return (
          <li key={key} className={styles.listElement}>
            {element}
          </li>
        );
      })}
    </ul>
  );
};

export default ProjectSkillsList;
