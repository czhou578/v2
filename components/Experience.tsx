import Image from "next/image";
import React from "react";
import styles from "../styles/experience.module.css";

const Experience: React.FC<{
  companyLogo: StaticImageData;
  companyName: string;
  position: string;
  date: string;
  location: string;
  description: string[];
}> = ({ companyLogo, companyName, position, date, location, description }) => {
  return (
    <div style={{ width: "90%", marginTop: "20px" }} className={styles.wrapper}>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          columnGap: "3px",
          flexBasis: "1px",
        }}
      >
        <div>
          <Image
            height="100px"
            width="100px"
            src={companyLogo}
            objectFit="contain"
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "20px",
            flexBasis: "900px",
          }}
        >
          <div>
            <span style={{ display: "block" }}>{position}</span>
            <span style={{ display: "block" }}>{companyName}</span>
            <span style={{ display: "block" }}>{date}</span>
            <span style={{ display: "block" }}>{location}</span>
          </div>
          <div>
            {description.map((element, key) => {
              return (
                <div>
                  {/* {element} */}
                  <p key={key}>{element}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
