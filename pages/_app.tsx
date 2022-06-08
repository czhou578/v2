import type { AppProps } from "next/app";
import "../styles/experience.css";
import "../styles/globals.css";
import "../styles/mediaLinks.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
