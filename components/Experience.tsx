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
            <h3 key={key} className="experHeader">
              {header}
            </h3>
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
      <ul className="expElement">
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
              `Designed / developed a serverless web app that would be used by New York public school 
              teachers to monitor and track the academic progress of at-risk high school students.`,

              `Made final design choices for UI components.`,

              `Used React to implement UI components on the frontend and AWS for storing media and files 
              on the backend.`,
            ]}
          />,
          <ExperienceList
            elements={[
              `Promoted company products through emails, and by giving presentations at events.`,

              `Secured sponsorships with various hackathon events.`,

              `Designed company websites and page layouts for products.`,
            ]}
          />,
          <ExperienceList
            elements={[
              `Created websites and designs for fun using various frontend technologies like React,
              UI frameworks like Semantic UI, and Typescript.`,

              `Used the Google Chrome API to create a Google Chrome extension to block YouTube recommendations.`,

              `Developed a replica of the popular Microsoft Wordament game using Typescript, and React.`,
            ]}
          />,
          <ExperienceList
            elements={[
              `Writing about history, and other topics, with over 25 million answer views since 2017.`,

              `Managing own blog about futuristic technology, over 30k followers.`,

              `Admin and moderator of multiple blogs about finance and interesting information.`,
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

              `Assisted Bellevue College classmates online and in-person with their research papers.`,

              `Coordinated with high school/college teachers with tutoring progress.`,
            ]}
          />,
        ]}
      />
    </div>
  );
};

export default ExperienceContainer;
