import styles from "../styles/education.module.css";

const Education: React.FC<{
  school: string;
  degreeLevel: string;
  date: string;
  activities?: string[];
  relevantClasses: string[];
}> = ({ school, degreeLevel, date, activities, relevantClasses }) => {
  return (
    <div className={styles.globalwrapper}>
      <div className={styles.degreedatewrapper}>
        <div>
          <div className={styles.school}>
            <h2>{school}</h2>
          </div>
          <div className={styles.degree}>
            <h3>{degreeLevel}</h3>
          </div>
        </div>
        <div className={styles.date}>
          <h3>{date}</h3>
        </div>
      </div>
      <div className={styles.activities}>
        <h4>Activities</h4>
        <ul>
          {activities
            ? activities.map((element, idx) => {
                return <li key={idx}>{element}</li>;
              })
            : null}
        </ul>
      </div>
      <div className={styles.classes}>
        <h4>Relevant Classes</h4>
        <ul>
          {relevantClasses
            ? relevantClasses.map((element, idx) => {
                return <li key={idx}>{element}</li>;
              })
            : null}
        </ul>
      </div>
    </div>
  );
};

export default Education;
