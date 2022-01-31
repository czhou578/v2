
const ProjectSkillsList: React.FC<{skills: string[]}> = ({skills}) => {
  return (
    <div>
      <ul>
        {skills.map((element, key) => {
          return <li key={key}>{element}</li>
        })}
      </ul>
    </div>
  )
}

export default ProjectSkillsList