import React from "react";

const PDCardSkills: React.FC<{ elements: string[] }> = ({ elements }) => {
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

export default PDCardSkills;
