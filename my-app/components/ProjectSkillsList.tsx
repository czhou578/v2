import styles from "../styles/skillsList.module.css";

const ProjectSkillsList: React.FC<{ skills: string[] }> = ({ skills }) => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {skills.map((element, key) => {
          return (
            <li key={key} className={styles.listElement}>
              {element}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProjectSkillsList;
