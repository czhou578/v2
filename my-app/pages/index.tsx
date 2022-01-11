import type { NextPage } from 'next'
import Head from 'next/head'
import HeaderBar from '../components/HeaderBar'
import Introduction from '../components/Introduction'
import styles from '../styles/Home.module.css'

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
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}

export default Home
