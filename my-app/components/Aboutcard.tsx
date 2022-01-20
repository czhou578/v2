import { FC } from "react";
import styles from "../styles/aboutcard.module.css"
import Image from "next/image";
import profilePic from '../public/images/70.jpg'


const SkillsList: FC<{header?: string, skillsList: string[]}> = ({header, skillsList}) => {
  return (
    <div>
      <h3>{header}</h3>
      <ul className={styles.list}>
        {skillsList.map((element, key) => {
          return <li key={key} className={styles.listElements}>{element}</li>
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
      <div className={styles.imgContainer}>
        <Image src={profilePic} alt="Pic of weather" height={250} width={250} className={styles.img}/>
      </div>
      <div>
        <SkillsList header="Skills" skillsList={["JavaScript", "HTML", "CSS", "AWS", "React"]} />
      </div>
    </div>
  );
};

export default Aboutcard
