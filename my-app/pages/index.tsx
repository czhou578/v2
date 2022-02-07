import type { NextPage } from 'next'
import Head from 'next/head'
import HeaderBar from '../components/HeaderBar'
import Introduction from '../components/Introduction'
import styles from '../styles/Home.module.css'
import Design from '../public/svgs/Design'
import Programmer from '../public/svgs/Programmer'
import Aboutcard from '../components/Aboutcard'
import ExperienceContainer from '../components/Experience'
import ProjectCardContainer from '../components/ProjectCard'
import DesignsContainer from '../components/DesignsContainer'

const Home: NextPage = () => {

  return (
    <div className={styles.container}>
      <Head>
        <title> Colin Zhou </title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className={styles.main}>
        <HeaderBar />
        <div>
          <Introduction />
        </div>
        <div className={styles.svgContainer}>
          <Design />
          <Programmer />
        </div>
        <div className={styles.aboutCard}>
          <Aboutcard />
        </div>
        <div className={styles.experience}>
          <h2 className={styles.expHeader}>Experience</h2>
            <ExperienceContainer />
        </div>
        <div className={styles.projects}>
          <h2 className={styles.expHeader}>My Projects</h2>
          <ProjectCardContainer />
        </div>
        <div className={styles.designs}>
          <h2>My Designs</h2>
          <DesignsContainer />
        </div>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}

export default Home
