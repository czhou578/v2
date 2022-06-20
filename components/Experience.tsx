import Image from "next/image";
import React, { useEffect } from "react";
import BellevueCollegeLogo from "../public/images/BellevueCollegeLogo.png";
import CHSLogo from "../public/images/CupertinoHighLogo.jpg";
import EndevreLogo from "../public/images/endevreLogo.jpg";
import IOIntel from "../public/images/IO_Intelligence.jpg";
import PencilLogo from "../public/images/pencil.jpg";
import QuoraLogo from "../public/images/QuoraLogo.png";
import SelfEmployedLogo from "../public/images/SelfEmployedLogo.jpg";
import UpworkLogo from "../public/images/upworkLogo.png";
import openCity from "../scripts/tab";

const headers = [
  "IOIntelligence",
  "Project Elpis Intern",
  "Endevre Technologies",
  "Bellevue College CS SAB",
  "Self-Employed",
  "Quora",
  "Upwork Freelancer",
  "Writing Tutor",
];

const timeStamps = [
  "07/2022 - 08/2022",
  "06/2021 - 09/2021",
  "06/2017 - present",
  "08/2021 - 06/2022",
  "08/2020 - present",
  "08/2017 - 03/2020",
  "06/2019 - 08/2019",
  "08/2017 - 02/2018",
];

const Experience: React.FC<{
  headers: string[];
  lists: JSX.Element[];
}> = ({ headers, lists }) => {
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

const ExperienceList: React.FC<{
  logo: StaticImageData;
  elements: string[];
  timeStampsIndex: number;
}> = ({ logo, elements, timeStampsIndex }) => {
  return (
    <div className="listWrapper">
      <Image
        src={logo}
        alt="Image"
        width="150px"
        height="150px"
        objectFit="contain"
        className="expImage"
      />
      <ul className="expElement">
        {elements.map((element, key) => {
          return <li key={key}>{element}</li>;
        })}
      </ul>
      <div className="times">
        <h3>{timeStamps[timeStampsIndex]}</h3>
      </div>
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
            timeStampsIndex={0}
            elements={[`Coming Soon!`]}
            logo={IOIntel}
          />,
          <ExperienceList
            timeStampsIndex={1}
            elements={[
              `Designed / developed a serverless web app that would be used by New York public school 
              teachers to monitor and track the academic progress of at-risk high school students.`,

              `Made final design choices for UI components.`,

              `Used React to implement UI components on the frontend and AWS for storing media and files 
              on the backend.`,
            ]}
            logo={PencilLogo}
          />,
          <ExperienceList
            timeStampsIndex={2}
            elements={[
              `Promoted company products through emails, and by giving presentations at events.`,

              `Secured sponsorships with various hackathon events.`,

              `Designed company websites and page layouts for products.`,
            ]}
            logo={EndevreLogo}
          />,
          <ExperienceList
            timeStampsIndex={3}
            elements={[
              `Met with faculty and fellow board members to discuss how to grow Bellevue College CS (currently at 150 students).`,

              `Helped facilitate constructive communication between faculty and students with regards to curriculum and structure
              of classes.`,

              `Planned out budget, totaling around $1000, for usage by the CS department for the 2023 school year. Managed and kept
              records of all expenses that were spent by Bellevue College CS board members.`,
            ]}
            logo={BellevueCollegeLogo}
          />,
          <ExperienceList
            timeStampsIndex={4}
            elements={[
              `Created websites and designs for fun using various frontend technologies like React,
              UI frameworks like Semantic UI, and Typescript.`,

              `Used the Google Chrome API to create a Google Chrome extension to block YouTube recommendations.`,

              `Developed a replica of the popular Microsoft Wordament game using Typescript, and React.`,
            ]}
            logo={SelfEmployedLogo}
          />,
          <ExperienceList
            timeStampsIndex={5}
            elements={[
              `Writing about history, and other topics, with over 25 million answer views since 2017.`,

              `Managing own blog about futuristic technology, over 30k followers.`,

              `Admin and moderator of multiple blogs about finance and interesting information.`,
            ]}
            logo={QuoraLogo}
          />,
          <ExperienceList
            timeStampsIndex={6}
            elements={[
              `Assisted clients with publishing articles on Quora.`,

              `Utilized communication skills to deliver clients work on time.`,

              `Used outreach abilities on Quora to drive traffic to client's websites.`,
            ]}
            logo={UpworkLogo}
          />,
          <ExperienceList
            timeStampsIndex={7}
            elements={[
              `Helped tutor Cupertino High School sophomores with improving their writing.`,

              `Assisted Bellevue College classmates online and in-person with their research papers.`,

              `Coordinated with high school/college teachers with tutoring progress.`,
            ]}
            logo={CHSLogo}
          />,
        ]}
      />
    </div>
  );
};

export default ExperienceContainer;
