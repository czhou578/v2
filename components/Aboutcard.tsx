import { FC } from "react";
import styles from "../styles/aboutcard.module.css";
import Image from "next/image";
import profilePic from "../public/images/70.jpg";

const SkillsList: FC<{ header?: string; skillsList: string[] }> = ({
  header,
  skillsList,
}) => {
  return (
    <div>
      <h3 className={styles.skillsHeader}>{header}</h3>
      <ul className={styles.list}>
        {skillsList.map((element, key) => {
          return (
            <li key={key} className={styles.listElements}>
              {element}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const Aboutcard: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <h3>About me</h3>
      </div>
      <div className={styles.paragraphBox}>
        <pre className={styles.paragraph}>
          I have experience making cool designs for show. From websites to
          simple logo designs, I strive to bring some elements of the future
          into my creations. In addition, I have many years of experience
          writing online, allowing me to share my ideas and thinking to millions
          around the world. I am currently a student in college studying
          Computer Science. My dream is to be a part of the speahead of future
          innovation that will help the most pressing problems in this world.
          Style over substance, people over profits.
        </pre>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src={profilePic}
          alt="Pic of weather"
          height={230}
          width={230}
          className={styles.img}
        />
      </div>
      <div>
        <SkillsList
          header="Skills"
          skillsList={["React", "HTML", "CSS", "JavaScript(ES6)", "AWS"]}
        />
      </div>
    </div>
  );
};

export default Aboutcard;
