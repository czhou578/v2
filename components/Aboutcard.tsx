import Image from "next/image";
import { FC } from "react";
import profilePic from "../public/images/70.jpg";
import styles from "../styles/aboutcard.module.css";

export const SkillsList: FC<{
  header?: string;
  techList: string[];
  toolsList: string[];
  learningList: string[];
}> = ({ header, techList, toolsList, learningList }) => {
  return (
    <>
      <h3 className={styles.skillsHeader}>{header}</h3>
      <h4 style={{ color: "lightblue", fontSize: "1rem" }}>Technologies:</h4>
      <ul className={styles.list}>
        {techList.map((element, key) => {
          return (
            <li key={key} className={styles.listElements}>
              {element}
            </li>
          );
        })}
      </ul>
      <h4 style={{ color: "lightblue", fontSize: "1rem" }}>Tools:</h4>
      <ul className={styles.list}>
        {toolsList.map((element, key) => {
          return (
            <li key={key} className={styles.listElements}>
              {element}
            </li>
          );
        })}
      </ul>
      <h4 style={{ color: "lightblue", fontSize: "1rem" }}>
        Currently Learning:
      </h4>
      <ul className={styles.list}>
        {learningList.map((element, key) => {
          return (
            <li key={key} className={styles.listElements}>
              {element}
            </li>
          );
        })}
      </ul>
    </>
  );
};

const Aboutcard: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <h3>About me</h3>
      </div>
      <div className={styles.paragraphpic}>
        <div className={styles.paragraphBox}>
          <pre className={styles.paragraph}>
            I have experience making cool designs for show. From websites to
            simple logo designs, I strive to bring some elements of the future
            into my creations. In addition, I have many years of experience
            writing online, allowing me to share my ideas and thinking to
            millions around the world. I am currently an incoming UIUC CS
            Masters student. My dream is to be able to help design and architect
            platforms that would help problem solvers communicate their
            solutions to a pressing problem to the world.
          </pre>
        </div>
        <div className={styles.imgContainer}>
          <Image
            src={profilePic}
            alt="Pic of weather"
            height={200}
            width={200}
            className={styles.img}
          />
        </div>
      </div>
    </div>
  );
};

export default Aboutcard;
