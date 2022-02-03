import { ImageProps } from 'next/image';
import Image from 'next/image';
import ProjectSkillsList from './ProjectSkillsList';
import DistanceImg1 from '../public/images/Screenshot (36).png'
import DistanceImg2 from '../public/images/Screenshot (35).png'
import presidentImg1 from '../public/images/Screenshot (44).png'
import presidentImg2 from '../public/images/Screenshot (43).png'
import styles from '../styles/ProjectCard.module.css'


const ProjectCard: React.FC<{img: StaticImageData[], list: JSX.Element}> = ({img, list}) => {
  return (
    <div className={styles.container}>
      {img.map((image, key) => {
        return (
          <div key={key} className={styles.imgWrapper}>
            <Image src={image} width={600} height={300} alt='' />
          </div>
        )
      })}
      {list}
    </div>
  )
};

const ProjectCardContainer: React.FC = () => {
  return (
    <div className={styles.parentWrapper}>
      <ProjectCard 
        img={[DistanceImg1, DistanceImg2]} 
        list={<ProjectSkillsList skills={['HTML/CSS', 'JavaScript', 'React.js', 'Material UI', 'React Router', 'Firebase']}/>}
      />
      <ProjectCard 
        img={[presidentImg1, presidentImg2]} 
        list={<ProjectSkillsList skills={['HTML/CSS', 'JavaScript', 'React.js', 'Victory.js', 'Firebase']}/>}
      />
    </div>
  )
}

export default ProjectCardContainer