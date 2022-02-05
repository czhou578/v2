import { ImageProps } from "next/image";
import Image from "next/image";
import ProjectSkillsList from "./ProjectSkillsList";
import DistanceImg1 from "../public/images/Screenshot (36).png";
import DistanceImg2 from "../public/images/Screenshot (35).png";
import presidentImg1 from "../public/images/Screenshot (44).png";
import presidentImg2 from "../public/images/Screenshot (43).png";
import styles from "../styles/ProjectCard.module.css";
import styles2 from "../styles/projectdescription.module.css";

const test = [
  `Using the React.js framework, I created a distance tracker that uses an external API to take two cities in the United States, and calculate their distance and the travel time in minutes. After each request, the data will be logged in an external form, which I took from Material UI.`
]

const ProjectDescription: React.FC<{ elucidation: string; header: string }> = ({
  elucidation,
  header,
}) => {
  return (
    <div className={styles2.textwrap}>
      <h3 className={styles2.headers}>{header}</h3>
      {/* {elucidation} */}
      <p className={styles2.projDescript}>{elucidation}</p>
    </div>
  );
};

const ProjectCard: React.FC<{
  img: StaticImageData[];
  list: JSX.Element;
  description: JSX.Element;
}> = ({ img, list, description }) => {
  return (
    <div className={styles.container}>
      <div className={styles.photos}>
        {img.map((image, key) => {
          return (
            <div key={key} className={styles.imgWrapper}>
              <Image src={image} width={600} height={300} alt="" />
            </div>
          );
        })}
      </div>
      <div className={styles.explain}>
        {description}
        {list}
      </div>
    </div>
  );
};

const ProjectCardContainer: React.FC = () => {
  return (
    <div className={styles.parentWrapper}>
      <ProjectCard
        img={[DistanceImg1, DistanceImg2]}
        list={
          <ProjectSkillsList
            skills={[
              "HTML/CSS",
              "JavaScript",
              "React.js",
              "Material UI",
              "React Router",
              "Firebase",
            ]}
          />
        }
        description={
          <ProjectDescription
            header="DistanceCalc"
            elucidation={test[0]}
          />
        }
      />
      <ProjectCard
        img={[presidentImg1, presidentImg2]}
        list={
          <ProjectSkillsList
            skills={[
              "HTML/CSS",
              "JavaScript",
              "React.js",
              "Victory.js",
              "Firebase",
            ]}
          />
        }
        description={
          <ProjectDescription
            header="Whitehouse.gov 2025"
            elucidation={`This project was a playground for me to practice my designing skills while imagining
         what a future of the whitehouse.gov website would look like if Andrew Yang got elected as the
         US President in 2024.`}
          />
        }
      />
    </div>
  );
};

export default ProjectCardContainer;
