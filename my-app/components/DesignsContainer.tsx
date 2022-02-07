import React from "react";
import UIDesign1 from "../public/images/UIDesign1.png"
import UIDesign2 from "../public/images/UIDesign2.png"
import BCollege1 from "../public/images/BC1.png"
import BCollege2 from "../public/images/BC2.png"
import Image from "next/image";
import styles from '../styles/designContainer.module.css'

const DesignCard: React.FC<{img: StaticImageData}> = ({img}) => {
  return (
    <div className={styles.wrapper}>
      <Image src={img} width={600} height={300} alt="Image" />
    </div>
  )
}

const DesignsContainer: React.FC = () => {
  return (
    <div>
      <DesignCard img={UIDesign1}/>
    </div>
  )
}

export default DesignsContainer