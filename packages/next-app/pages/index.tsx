import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Decentralized FIR System</title>
        <meta name="description" content="Our main project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        Decentralized FIR System
        </h1>

        <div
          style={{
            height: "10vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          {/* <ConnectButton /> */}
        </div>

        <div className={styles.grid}>
            <h2>So guys this can be the main page from where we can direct to the other pages</h2>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Decentralized FIR system - Main project</p>
      </footer>
    </div>
  )
}

export default Home
