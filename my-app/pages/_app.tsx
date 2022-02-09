import '../styles/globals.css'
import '../styles/experience.css';
import '../styles/mediaLinks.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
