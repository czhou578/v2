import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/projectCard.module.css";
import styles2 from "../styles/projectdescription.module.css";
import {
  ayParagraph,
  cwParagraph,
  dcParagraph,
  ElpisParagraph,
  foodAppParagraph,
  wParagraph,
  youtubeParagraph,
} from "./Descriptions";
import ProjectSkillsList from "./ProjectSkillsList";

const elucidations = [
  dcParagraph,
  ayParagraph,
  cwParagraph,
  wParagraph,
  youtubeParagraph,
  ElpisParagraph,
  foodAppParagraph,
];

const prefix = "/v2";

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
  img: string[];
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
              <Image src={prefix + image} width={600} height={300} />
            </div>
          );
        })}
      </div>
      <div className={styles.explain}>
        {description}
        {list}
        {chromeBlocker || projectElpis ? (
          <div className={styles.iconWrapper}>
            <Link href={githubLink} scroll={false}>
              <a>
                <GitHubIcon />
              </a>
            </Link>
          </div>
        ) : hostingLink ? (
          <div className={styles.iconWrapper}>
            <Link href={hostingLink} scroll={false}>
              <a>
                <LinkIcon className={styles.link} />
              </a>
            </Link>
            <Link href={githubLink}>
              <a>
                <GitHubIcon />
              </a>
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
};

const ProjectCardContainer: React.FC = () => {
  return (
    <div className={styles.parentWrapper}>
      <ProjectCard
        img={["/images/Sapp.png", "/images/Sapp2.png"]}
        list={
          <ProjectSkillsList
            skills={[
              "HTML/CSS Modules",
              "Typescript",
              "React.js",
              "Semantic UI",
              "AWS",
              "Redux Toolkit",
            ]}
          />
        }
        description={
          <ProjectDescription
            header="StreetFoodLove Capstone Project"
            elucidation={elucidations[6]}
          />
        }
        githubLink="https://github.com/bcfoodapp/streetfoodlove"
        hostingLink="https://bcfoodapp.github.io/streetfoodlove/vendors/0be4c03e-130a-40fc-9993-8aa2ba08dbfc"
      />
      <ProjectCard
        img={["/images/PE1.png", "/images/PE2.png"]}
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
        img={["/images/W1.png", "/images/W2.png"]}
        list={
          <ProjectSkillsList
            skills={[
              "HTML/CSS Modules",
              "TypeScript",
              "React.js",
              "Express",
              "MySQL",
            ]}
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
        img={["/images/whitehouse1.png", "/images/whitehouse2.png"]}
        list={
          <ProjectSkillsList
            skills={[
              "HTML/CSS",
              "JavaScript",
              "React.js",
              "Firebase",
              "FEC / Google Civics API",
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
        img={["/images/distancecalc1.png", "/images/distancecalc2.png"]}
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
        img={["/images/CW1.png", "/images/CW2.png"]}
        list={
          <ProjectSkillsList
            skills={[
              "HTML/SASS",
              "JavaScript",
              "Bootstrap",
              "Figma",
              "Lunarcrush Crypto API",
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
        img={["/images/YT.png", "/images/YT2.png"]}
        list={<ProjectSkillsList skills={["Google Chrome API", "CSS"]} />}
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
