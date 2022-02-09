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

const DesignCard: React.FC<{ img: StaticImageData }> = ({ img }) => {
  return (
    <div className={styles.wrapper}>
      <Image src={img} alt="Image" width="6 00px" height="500px" objectFit="contain"/>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta, perferendis veritatis itaque aliquid sunt provident.</p>
    </div>
  );
};

const DesignsContainer: React.FC = () => {
  return (
    <div className={styles.designContainer}>
      <div className={styles.foodWrapper}>
        <DesignCard img={FoodApp1} />
        <DesignCard img={FoodApp2} />
      </div>
      <div className={styles.elpisWrapper}>
        <DesignCard img={ElpisUI1} />
        <DesignCard img={ElpisUI2} />
      </div>
      <div className={styles.uiWrapper}>
        <p></p>
        <DesignCard img={UIDesign1} />
        <DesignCard img={UIDesign2} />
        <DesignCard img={UIDesign3} />
        <DesignCard img={UIDesign4} />
      </div>
      <div className={styles.bcWrapper}>
        <DesignCard img={BCollege1} />
        <DesignCard img={BCollege2} />
      </div>
    </div>
  );
};

export default DesignsContainer;
