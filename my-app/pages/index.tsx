import type { NextPage } from 'next'
import Head from 'next/head'
import HeaderBar from '../components/HeaderBar'
import Introduction from '../components/Introduction'
import styles from '../styles/index.module.css'
import Design from '../public/svgs/Design'
import Programmer from '../public/svgs/Programmer'
import Aboutcard from '../components/Aboutcard'
import ExperienceContainer from '../components/Experience'
import ProjectCardContainer from '../components/ProjectCard'
import DesignsContainer from '../components/DesignsContainer'
import MediaLinks from '../components/MediaLinks'
import { useEffect } from 'react'
import { animateProgressBar } from '../scripts/headerbar'

const Home: NextPage = () => {

  useEffect(() => {
    animateProgressBar()
    window.addEventListener('scroll', animateProgressBar)
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title> Colin Zhou </title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className={styles.main}>
        <HeaderBar />
        <section>
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
            <h2 className={styles.designHeader}>My Designs</h2>
            <DesignsContainer />
          </div>
          <div className={styles.icons}>
            <h2>Where to reach me</h2>
            <MediaLinks />
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <div>
          <p>all work &copy; Colin Zhou 2020-present - all rights reserved</p>
        </div>
      </footer>
      <div id='progressBar'></div>
      <script src="../scripts/headerbar.js"></script>
    </div>
  )
}

export default Home
