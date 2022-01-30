import styles from "../styles/experience.module.css";

const Experience: React.FC<{headers: string[]}> = ({ headers }) => {
  function openCity(event: any, cityName: string) {}

  return (
    <>
      <div className="tab">
        <button className={styles.tablinks} onClick={() => openCity}>
          London
        </button>
        <button className={styles.tablinks} onClick={() => openCity}>
          Paris
        </button>
        <button className={styles.tablinks} onClick={() => openCity}>
          Tokyo
        </button>
      </div>

      {headers.map((header, key) => {
        return (

        )
      })}

      <div id="London" className={styles.tabContent}>
        <h3>London</h3>
        <p>London is the capital city of England.</p>
      </div>

      <div id="Paris" className={styles.tabContent}>
        <h3>Paris</h3>
        <p>Paris is the capital of France.</p>
      </div>

      <div id="Tokyo" className={styles.tabContent}>
        <h3>Tokyo</h3>
        <p>Tokyo is the capital of Japan.</p>
      </div>
    </>
  );
};

const ExperienceText: React.FC = () => {
  return (
    <div>
      
    </div>
  )
}

const ExperienceContainer: React.FC = () => {
  return (
    <div>
      <Experience 
      headers={["Project Elpis Intern", "Endevre Technologies", "Self-Employed", "Quora", "Upwork Freelancer", "Writing Tutor"]}
      
      />
    </div>
  )
}
