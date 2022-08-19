import Head from "next/head";
import Layout from "../components/layout/Layout";
import { AppProps } from "../node_modules/next/app";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Мария Филаткина - frontend-разработчик</title>
        <meta
          name="description"
          content="Здесь вы можете ознакомиться с моими работами и узнать больше обо мне"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
