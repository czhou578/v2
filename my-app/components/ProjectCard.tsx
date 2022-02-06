import { ImageProps } from "next/image";
import Image from "next/image";
import ProjectSkillsList from "./ProjectSkillsList";
import DistanceImg1 from "../public/images/Screenshot (36).png";
import DistanceImg2 from "../public/images/Screenshot (35).png";
import presidentImg1 from "../public/images/Screenshot (44).png";
import presidentImg2 from "../public/images/Screenshot (43).png";
import styles from "../styles/ProjectCard.module.css";
import styles2 from "../styles/projectdescription.module.css";
import { dcParagraph, ayParagraph, cwParagraph, wParagraph, youtubeParagraph, UIParagraph } from "./Descriptions";

const elucidations = [
  dcParagraph,
  ayParagraph,
  cwParagraph,
  wParagraph,
  youtubeParagraph,
  UIParagraph
]


const ProjectDescription: React.FC<{ elucidation: string; header: string }> = ({
  elucidation,
  header,
}) => {
  return (
    <>
      <h3 className={styles2.headers}>{header}</h3>
      {elucidation}
    </>
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
            elucidation={elucidations[0]}
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
            elucidation={elucidations[1]}
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
              "Bootstrap",
              "Figma",
              "Firebase",
            ]}
          />
        }
        description={
          <ProjectDescription
            header="Crypto Website"
            elucidation={elucidations[2]}
          />
        }
      />

      <ProjectCard
        img={[presidentImg1, presidentImg2]}
        list={
          <ProjectSkillsList
            skills={[
              "HTML/CSS",
              "TypeScript",
              "React.js",
              "Netlify",
            ]}
          />
        }
        description={
          <ProjectDescription
            header="Wordament"
            elucidation={elucidations[3]}
          />
        }
      />

      <ProjectCard
        img={[presidentImg1, presidentImg2]}
        list={
          <ProjectSkillsList
            skills={[
              "VSCode",
              "Google Chrome API",
              "CSS"
            ]}
          />
        }
        description={
          <ProjectDescription
            header="Crypto Website"
            elucidation={elucidations[4]}
          />
        }
      />
      <ProjectCard
        img={[presidentImg1, presidentImg2]}
        list={
          <ProjectSkillsList
            skills={[
              "Figma",
              "Dribbble",
              "Google Images of Futuristic Designs",
            ]}
          />
        }
        description={
          <ProjectDescription
            header="Self Made Designs"
            elucidation={elucidations[5]}
          />
        }
      />

    </div>
  );
};

export default ProjectCardContainer;
