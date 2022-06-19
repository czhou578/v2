import type { NextPage } from "next";
import Head from "next/head";
import Script from "next/script";
import Aboutcard, { SkillsList } from "../components/Aboutcard";
import DesignsContainer from "../components/DesignsContainer";
import ExperienceContainer from "../components/Experience";
import HeaderBar from "../components/HeaderBar";
import Introduction from "../components/Introduction";
import MediaLinks from "../components/MediaLinks";
import NoteWorthyProjects from "../components/NoteWorthyProjects";
import ProjectCardContainer from "../components/ProjectCard";
import Design from "../public/svgs/Design";
import Programmer from "../public/svgs/Programmer";
import styles from "../styles/index.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title> Colin Zhou </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className={styles.main}>
        <HeaderBar />
        <section>
          <div>
            <Introduction />
          </div>
          <div className={styles.svgContainer}>
            <Design />
            <Programmer />
          </div>
          <div className={styles.aboutCard} id="div-1">
            <Aboutcard />
          </div>
          <div className={styles.skillsList} id="div-2">
            <SkillsList
              header="Skills"
              techList={[
                "React",
                "HTML",
                "CSS",
                "Typescript",
                "JavaScript(ES6)",
                "Redux",
                "Webpack",
                "AWS",
                "SQL",
              ]}
              toolsList={[
                "Googling",
                "VSCode",
                "Jira",
                "Wireframes",
                "Github",
                "Scrum",
                "Agile",
                "Speaking",
                "Writing",
              ]}
              learningList={[
                "GraphQL",
                "CI/CD pipeline",
                "Optimizing Performance",
                "Next.js",
                "Prototyping",
                "Unit Testing",
              ]}
            />
          </div>
          <div className={styles.experience} id="div-3">
            <h2 className={styles.expHeader}>Experience</h2>
            <ExperienceContainer />
          </div>
          <div className={styles.projects} id="div-4">
            <h2 className={styles.expHeader}>My Projects</h2>
            <ProjectCardContainer />
          </div>
          <div className={styles.moreProjects} id="div-5">
            <h2 className={styles.moreProjHeader}>Noteworthy Projects</h2>
            <NoteWorthyProjects />
          </div>
          <div className={styles.designs} id="div-6">
            <h2 className={styles.designHeader}>My Designs</h2>
            <DesignsContainer />
          </div>
          <div className={styles.icons}>
            <h2>Where to reach me!</h2>
            <MediaLinks />
          </div>
        </section>
        <div id="progressBar"></div>
        <Script src="rollingBar/headerbar.js" type="text/javascript" />
      </main>
      <footer className={styles.footer}>
        <div>
          <i>all work &copy; Colin Zhou 2020-present - all rights reserved</i>
        </div>
      </footer>
    </div>
  );
};

export default Home;