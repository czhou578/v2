import Image from "next/image";
import Link from "next/link";
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
import styles from "../styles/projectCard.module.css";
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
import loader from './ImageLoader'

const elucidations = [
  dcParagraph,
  ayParagraph,
  cwParagraph,
  wParagraph,
  youtubeParagraph,
  ElpisParagraph,
];

const prefix = "/v2"

// const myLoader = ({ src, width, quality }) => {
//   return `https://example.com/${src}?w=${width}&q=${quality || 75}` 
// }

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
        img={["images/distancecalc1.png", "/images/distancecalc2.png"]}
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
        img={["images/whitehouse1.png", "images/whitehouse2.png"]}
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
        img={["/images/CW1.png", "/images/CW2.png"]}
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
        img={["/images/W1.png", "/images/W2.png"]}
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
        img={["/images/YT.png", "/images/YT2.png"]}
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
