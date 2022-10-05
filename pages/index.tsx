import type { NextPage } from "next";
import Head from "next/head";
import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-900/10 to-[#2b2b2d] lg:[140vh]">
      <Head>
        <title>Darkflix | Movies</title>
        <meta
          name="description"
          content="Darkflix is a netflix like situation"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Banner />
        {/* banner */}
        <section>
          {/* row  */}
          {/* row  */}
          {/* row  */}
          {/* row  */}
          {/* row  */}
        </section>
      </main>
      {/* modal */}
    </div>
  );
};

export default Home;
