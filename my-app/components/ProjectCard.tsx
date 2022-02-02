import { ImageProps } from 'next/image';
import Image from 'next/image';
import ProjectSkillsList from './ProjectSkillsList';


const ProjectCard: React.FC<{img: ImageProps, list: JSX.Element}> = () => {
  return (
    <div>
      {/* <Image src={img} width={500} height={200} /> */}
    </div>
  )
};

const ProjectCardContainer: React.FC = () => {
  return (
    <div>
      {/* <ProjectCard img={"../public/images/70.jpg"}/> */}
    </div>
  )
}

export default ProjectCardContainer