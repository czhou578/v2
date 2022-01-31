import { useEffect } from "react";
import styles from "../styles/experience.module.css";
import openCity from '../scripts/tab'

const headers = [
  "Project Elpis Intern",
  "Endevre Technologies",
  "Self-Employed",
  "Quora",
  "Upwork Freelancer",
  "Writing Tutor",
];

const Experience: React.FC<{ headers: string[]; lists: JSX.Element[] }> = ({
  headers,
  lists,
}) => {


  return (
    <>
      <div className={styles.tab}>
        {headers.map((element, key) => {
          return (
            <button
              className={styles.tabLinks}
              onClick={(e) => openCity(e, element)}
              key={key}
            >
              {element}
            </button>
          );
        })}
      </div>

      <div>
        {headers.map((header, key) => {
          return (
            <div className={styles.tabContent} id={header}>
              <h3 key={key}>{header}</h3>
              <div>{lists[key]}</div>
            </div>
          );
        })}
      </div>

      {/* <div id="London" className={styles.tabContent}>
        <h3>London</h3>
        <p>London is the capital city of England.</p>
      </div>

      <div id="Paris" className={styles.tabContent}>
        <h3>Paris</h3>
        <p>Paris is the capital of France.</p>
      </div>

      <div id="Tokyo" className={styles.tabContent}>
        <h3>Tokyo</h3>
        <p>Tokyo is the capital of Japan.</p>
      </div> */}
    </>
  );
};

const ExperienceList: React.FC<{ elements: string[] }> = ({ elements }) => {
  return (
    <div>
      <ul>
        {elements.map((element, key) => {
          return <li key={key}>{element}</li>;
        })}
      </ul>
    </div>
  );
};

const ExperienceContainer: React.FC = () => {
  return (
    <div>
      <Experience
        headers={headers}
        lists={[
          <ExperienceList
            elements={[
              `Designed / helped develop a serverless web app that would be used by New York public school 
              teachers to monitor and track the academic progress of at-risk high school students.`,

              `Made final design choices for UI components.`,

              `Worked as a front end developer to implement UI components in code.`,
            ]}
          />,
          <ExperienceList
            elements={[
              `Promoted company products across multiple online domains.`,

              `Secured sponsorships with various hackathon events.`,

              `Designed company websites and page layouts for products.`,
            ]}
          />,
          <ExperienceList
            elements={[
              `Created websites and designs for fun.`,

              `Created Google Chrome extension to block YouTube recommendations.`,

              `Created a replica of the popular Microsoft Wordament game.`,
            ]}
          />,
          <ExperienceList
            elements={[
              `Writing about history, and other topics, with over 25 million answer views.`,

              `Managing own blog about Technology, over 30k followers.`,

              `Admin user of multiple blogs about finance, interesting information.`,
            ]}
          />,
          <ExperienceList
            elements={[
              `Assisted clients with publishing articles on Quora.`,

              `Utilized communication skills to deliver clients work on time.`,

              `Used outreach abilities on Quora to drive traffic to client's websites.`,
            ]}
          />,
          <ExperienceList
            elements={[
              `Helped tutor Cupertino High School sophomores with improving their writing.`,

              `Assisted Bellevue College classmates with their research papers.`,

              `Coordinated with high school/college teachers with tutoring progress.`,
            ]}
          />,
        ]}
      />
    </div>
  );
};

export default ExperienceContainer;
