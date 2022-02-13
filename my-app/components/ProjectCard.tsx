import Image from "next/image";
import ProjectSkillsList from "./ProjectSkillsList";
import DistanceImg1 from "../public/images/Screenshot (36).png";
import DistanceImg2 from "../public/images/Screenshot (35).png";
import presidentImg1 from "../public/images/Screenshot (44).png";
import presidentImg2 from "../public/images/Screenshot (43).png";
import CWwebsite1 from "../public/images/CW1.png";
import CWebsite2 from "../public/images/CW2.png";
import Wordament1 from "../public/images/W1.png";
import Wordament2 from "../public/images/W2.png";
import YoutubeImage1 from "../public/images/YT.png";
import YoutubeImage2 from "../public/images/YT2.png";
import Elpis1 from "../public/images/PE1.png";
import Elpis2 from "../public/images/PE2.png";
import styles from "../styles/ProjectCard.module.css";
import styles2 from "../styles/projectdescription.module.css";
import {
  dcParagraph,
  ayParagraph,
  cwParagraph,
  wParagraph,
  youtubeParagraph,
  ElpisParagraph,
} from "./Descriptions";
import LinkIcon from "@mui/icons-material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";

const elucidations = [
  dcParagraph,
  ayParagraph,
  cwParagraph,
  wParagraph,
  youtubeParagraph,
  ElpisParagraph,
];

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
  chromeBlocker?: boolean;
  projectElpis?: boolean;
  githubLink: string;
  hostingLink?: string;
}> = ({
  img,
  list,
  description,
  chromeBlocker,
  projectElpis,
  githubLink,
  hostingLink,
}) => {
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
        {chromeBlocker || projectElpis ? (
          <div className={styles.iconWrapper}>
            <a href={githubLink}>
              <GitHubIcon />
            </a>
          </div>
        ) : (
          <div className={styles.iconWrapper}>
            <a href={hostingLink}>
              <LinkIcon className={styles.link} />
            </a>
            <a href={githubLink}>
              <GitHubIcon />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

const ProjectCardContainer: React.FC = () => {
  return (
    <div className={styles.parentWrapper}>
      {/* <ProjectCard
        img={[Elpis1, Elpis2]}
        list={
          <ProjectSkillsList
            skills={[
              "HTML/CSS",
              "JavaScript",
              "React.js",
              "Semantic UI",
              "AWS",
              "Adobe XD",
            ]}
          />
        }
        description={
          <ProjectDescription
            header="Project Elpis App"
            elucidation={elucidations[5]}
          />
        }
        projectElpis={true}
      /> */}

      <ProjectCard
        img={[Elpis1, Elpis2]}
        list={
          <ProjectSkillsList
            skills={[
              "HTML/CSS",
              "JavaScript",
              "React.js",
              "Semantic UI",
              "AWS",
              "Adobe XD",
            ]}
          />
        }
        description={
          <ProjectDescription
            header="Project Elpis App"
            elucidation={elucidations[5]}
          />
        }
        projectElpis={true}
        githubLink="https://github.com/czhou578/Code-Samples-Project-Elpis"
      />
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
        githubLink="https://github.com/czhou578/DistanceCalc"
        hostingLink="https://distance-calculator-a905f.web.app/"
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
        githubLink="https://github.com/czhou578/AmericanScorecard"
        hostingLink="https://github.com/czhou578/AmericanScorecard"
      />
      <ProjectCard
        img={[CWwebsite1, CWebsite2]}
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
        githubLink="https://github.com/czhou578/CryptoWebsiteMockup"
        hostingLink="https://priceless-curie-d29ee9.netlify.app/"
      />

      <ProjectCard
        img={[Wordament1, Wordament2]}
        list={
          <ProjectSkillsList
            skills={["HTML/CSS", "TypeScript", "React.js", "Netlify"]}
          />
        }
        description={
          <ProjectDescription
            header="Wordament"
            elucidation={elucidations[3]}
          />
        }
        githubLink="https://github.com/czhou578/Wordament-v2"
        hostingLink="https://hopeful-johnson-a48af0.netlify.app/"
      />

      <ProjectCard
        img={[YoutubeImage1, YoutubeImage2]}
        list={
          <ProjectSkillsList skills={["VSCode", "Google Chrome API", "CSS"]} />
        }
        description={
          <ProjectDescription
            header="YouTube Blocker"
            elucidation={elucidations[4]}
          />
        }
        chromeBlocker={true}
        githubLink="https://github.com/czhou578/YouTubeBlocker"
      />
    </div>
  );
};

export default ProjectCardContainer;
