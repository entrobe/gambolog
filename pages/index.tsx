import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gambolog home of Gambo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {/* TODO: env vars urls? lol staging... never come back to this */}
          Welcome to <a href="https://gambolog.com">GAMBOLOG</a>
        </h1>

        <p className={styles.description}>
          Get started by diving into{" "}
          <code className={styles.code}>THE OCEAN</code>
        </p>

        <div className={styles.grid}>
          {/* TODO: another url here or change it more we getting started */}
          <a href="https://gambolog.com" className={styles.card}>
            <h3>Fun &rarr;</h3>
            <p>Games. I promise nothing but fun.</p>
          </a>

          <a href="https://gambolog.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about the horrors before all humankind!</p>
          </a>

          <a href="https://gambolog.com/examples" className={styles.card}>
            <h3>Examples &rarr;</h3>
            <p>Discover and destroy all know order before you.</p>
          </a>
        </div>
      </main>
      <footer className={styles.footer}>footers go here!</footer>
    </div>
  );
}
