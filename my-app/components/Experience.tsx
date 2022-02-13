import React, { useEffect } from "react";
import openCity from "../scripts/tab";

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
  const ref = React.useRef<HTMLButtonElement>(null);

  useEffect(() => {
    ref!.current!.click();
  });

  return (
    <>
      <div className={"tab"}>
        {headers.map((element, key) => {
          if (key === 0) {
            return (
              <button
                className={"tabLinks"}
                onClick={(e) => openCity(e, element)}
                key={key}
                ref={ref}
              >
                {element}
              </button>
            );
          } else {
            return (
              <button
                className={"tabLinks"}
                onClick={(e) => openCity(e, element)}
                key={key}
              >
                {element}
              </button>
            );
          }
        })}
      </div>

      {headers.map((header, key) => {
        return (
          <div className={"tabContent"} id={header} key={key}>
            <h3 key={key} className="experHeader">{header}</h3>
            <div>{lists[key]}</div>
          </div>
        );
      })}
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
    <div className="experience-container">
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
