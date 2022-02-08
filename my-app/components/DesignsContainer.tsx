import React from "react";
import UIDesign1 from "../public/images/UIDesign1.png";
import UIDesign2 from "../public/images/UIDesign2.png";
import UIDesign3 from "../public/images/UIDesign3.png";
import UIDesign4 from "../public/images/UIDesign4.png";
import ElpisUI1 from "../public/images/ElpisUI1.png";
import ElpisUI2 from "../public/images/ElpisUI2.png";
import BCollege1 from "../public/images/BC1.png";
import BCollege2 from "../public/images/BC2.png";
import Image from "next/image";
import styles from "../styles/designContainer.module.css";

const DesignCard: React.FC<{ img: StaticImageData }> = ({ img }) => {
  return (
    <div className={styles.wrapper}>
      <Image src={img} width={600} height={300} alt="Image" />
    </div>
  );
};

const DesignsContainer: React.FC = () => {
  return (
    <div>
      <div>
        <p></p>
        <DesignCard img={UIDesign1} />
        <DesignCard img={UIDesign2} />
        <DesignCard img={UIDesign3} />
        <DesignCard img={UIDesign4} />
      </div>
      <div>
        <DesignCard img={ElpisUI1} />
        <DesignCard img={ElpisUI2} />
      </div>
      <div>
        <DesignCard img={BCollege1} />
        <DesignCard img={BCollege2} />
      </div>
    </div>
  );
};

export default DesignsContainer;
