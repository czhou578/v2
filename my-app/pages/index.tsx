import type { NextPage } from 'next'
import Head from 'next/head'
import HeaderBar from '../components/HeaderBar'
import Introduction from '../components/Introduction'
import styles from '../styles/Home.module.css'
import Design from '../public/svgs/Design'
import Programmer from '../public/svgs/Programmer'
import { useEffect } from 'react'

const Home: NextPage = () => {


//   componentDidMount () {
//     const script = document.createElement("script");
//     script.src = "/path/to/resource.js";
//     script.async = true;
//     document.body.appendChild(script);
// }

  useEffect(() => {
    // const script = document.createElement("script")
    // script.src = "../../scripts/script.js"
    // script.async = true;
    // document.body.appendChild(script)
  }, [])



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
        <div>
          <Design />
        </div>
        <div>
          <Programmer />
        </div>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}

export default Home
