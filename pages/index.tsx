import type { NextPage } from "next";
import Head from "next/head";
import Script from "next/script";
import Aboutcard, { SkillsList } from "../components/Aboutcard";
import DesignsContainer from "../components/DesignsContainer";
import Education from "../components/Education";
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
          <div className={styles.intro}>
            <Introduction />
          </div>
          <div className={styles.svgContainer}>
            <Design />
            <Programmer />
          </div>
          <div className={styles.aboutCard} id="div-1">
            <Aboutcard />
          </div>
          <div className={styles.education} id="div-2">
            <h2 className={styles.educationHeader}>Education</h2>
            <Education
              school="University of Illinois Urbana-Champaign"
              degreeLevel="Master of Computer Science"
              date="August 2022 - Present"
              activities={["CS 411 Project Team Captain"]}
              relevantClasses={[
                "User-Interface Design,",
                "Databases,",
                "Advanced Data Management",
              ]}
            />
            <Education
              school="Bellevue College"
              degreeLevel="Bachelor of Science in Computer Science"
              date="September 2019 - June 2022"
              activities={["CS Student Advisory Board Treasurer"]}
              relevantClasses={[
                "Algorithms,",
                "Cloud Computing,",
                "Software Engineering,",
                "Data Structures,",
                "Computer Networks,",
                "Operating Systems,",
                "Linear Algebra,",
                "Discrete Math",
              ]}
            />
            <Education
              school="Cupertino High School"
              degreeLevel="High School Diploma"
              date="August 2015 - June 2019"
              activities={[
                "Speech and Debate Club Member,",
                "Sophomore English Tutor",
              ]}
              relevantClasses={[
                "AP Computer Science A,",
                "AP Statistics,",
                "AP Physics C: Mechanics,",
                "AP Chemistry,",
                "AP United States History",
              ]}
            />
          </div>
          <div className={styles.skillsList}>
            <SkillsList
              techList={[
                "React",
                "HTML",
                "CSS",
                "TypeScript",
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
                "Git",
                "Scrum",
                "Agile",
                "Speaking",
                "Writing",
              ]}
              learningList={[
                "Containerization",
                "CI/CD pipeline",
                "Optimizing Performance",
                "Next.js",
                "Prototyping",
                "Unit Testing",
                "Responsive Design",
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
          <div className={styles.moreProjects}>
            <h2 className={styles.moreProjHeader}>Noteworthy Projects</h2>
            <NoteWorthyProjects />
          </div>
          <div className={styles.designs} id="div-5">
            {/* <h2 className={styles.designHeader}>My Designs</h2> */}
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
