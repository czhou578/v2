import { FC } from "react";
import styles from "../styles/aboutcard.module.css"


const SkillsList: FC<{header?: string, skillsList: string[]}> = ({header, skillsList}) => {
  return (
    <div>
      <h3>{header}</h3>
      <ul>
        {skillsList.map((element, key) => {
          <li key={key}>{element}</li>
        })}
      </ul>
    </div>
  )
} 

const Aboutcard: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <h3>About me</h3>
      </div>
      <div>
        <pre>This is colin speaking</pre>
      </div>
      <div>
        <SkillsList header="Skills" skillsList={["JavaScript", "HTML", "CSS", "AWS", "React"]} />
      </div>
    </div>
  );
};

export default Aboutcard
