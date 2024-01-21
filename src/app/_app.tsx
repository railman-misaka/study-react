import "src/global.css";
import Head from "next/head";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>My App</title>
      </Head>
      <Component {...pageProps} foo={123} />
    </>
  );
}

export default MyApp;
