import React from "react";
import UIDesign1 from "../public/images/UIDesign1.png";
import UIDesign2 from "../public/images/UIDesign2.png";
import UIDesign3 from "../public/images/UIDesign3.png";
import UIDesign4 from "../public/images/UIDesign4.png";
import ElpisUI1 from "../public/images/ElpisUI1.png";
import ElpisUI2 from "../public/images/ElpisUI2.png";
import BCollege1 from "../public/images/BC1.png";
import BCollege2 from "../public/images/BC2.png";
import FoodApp1 from "../public/images/FoodApp1.png";
import FoodApp2 from "../public/images/FoodApp2.png";
import Image from "next/image";
import styles from "../styles/designContainer.module.css";
import { BCCollege1Descrip, BCCollege2Descrip, elpisUI1Descrip, elpisUI2Descrip, foodApp1Descrip, foodApp2Descrip, uidesign1Descrip, uidesign2Descrip, uidesign3Descrip, uidesign4Descrip, } from "./DesignDescriptions";

const DesignCard: React.FC<{ img: StaticImageData, description: string }> = ({ img, description }) => {
  return (
    <div className={styles.wrapper}>
      <Image
        src={img}
        alt="Image"
        width="600px"
        height="500px"
        objectFit="contain"
      />
      <p className={styles.description}>
        {description}
      </p>
    </div>
  );
};

const DesignsContainer: React.FC = () => {
  return (
    <div className={styles.designContainer}>
      <div className={styles.foodWrapper}>
        <DesignCard img={FoodApp1} description={foodApp1Descrip}/>
        <DesignCard img={FoodApp2} description={foodApp2Descrip}/>
      </div>
      <div className={styles.elpisWrapper}>
        <DesignCard img={ElpisUI1} description={elpisUI1Descrip}/>
        <DesignCard img={ElpisUI2} description={elpisUI2Descrip}/>
      </div>
      <div className={styles.uiWrapper}>
        <DesignCard img={UIDesign1} description={uidesign1Descrip}/>
        <DesignCard img={UIDesign2} description={uidesign2Descrip}/>
        <DesignCard img={UIDesign3} description={uidesign3Descrip}/>
        <DesignCard img={UIDesign4} description={uidesign4Descrip}/>
      </div>
      <div className={styles.bcWrapper}>
        <DesignCard img={BCollege1} description={BCCollege1Descrip}/>
        <DesignCard img={BCollege2} description={BCCollege2Descrip}/>
      </div>
    </div>
  );
};

export default DesignsContainer;
