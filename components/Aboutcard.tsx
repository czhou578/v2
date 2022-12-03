import Image from "next/image";
import { FC } from "react";
import portrait from "../public/images/portrait.jpg";
import styles from "../styles/aboutcard.module.css";

export const SkillsList: FC<{
  header?: string;
  techList: string[];
  toolsList: string[];
  learningList: string[];
}> = ({ header, techList, toolsList, learningList }) => {
  return (
    <div className={styles.skillsWrapper}>
      <h3 style={{ color: "#e6c6f5", fontSize: "1.8rem" }}>Skills</h3>
      <div className={styles.listings}>
        <div>
          <h4
            style={{
              color: "lightblue",
              fontSize: "1rem",
              // marginLeft: "-15px",
            }}
          >
            Technologies:
          </h4>
          <ul className={styles.list}>
            {techList.map((element, key) => {
              return (
                <li key={key} className={styles.listElements}>
                  {element}
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <h4
            style={{
              color: "lightblue",
              fontSize: "1rem",
              // marginLeft: "-15px",
            }}
          >
            Tools:
          </h4>
          <ul className={styles.list}>
            {toolsList.map((element, key) => {
              return (
                <li key={key} className={styles.listElements}>
                  {element}
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <h4
            style={{
              color: "lightblue",
              fontSize: "1rem",
              // marginLeft: "-15px",
            }}
          >
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
        </div>
      </div>
    </div>
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
            I am a UIUC CS Masters student. My passion is in web development,
            using my knowledge of front end technologies to architect websites
            for various for-good causes. As someone with experience in designing
            logos and simple designs, I strive to bring some elements of the
            future into my creations. In addition, I have many years of
            experience writing online, allowing me to share my ideas and
            thinking to millions around the world. My dream is to be able to
            help design and architect platforms that would help problem solvers
            communicate their solutions to a pressing problem to the world.
          </pre>
        </div>
        <div className={styles.imgContainer}>
          <Image
            src={portrait}
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
