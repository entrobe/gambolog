import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Gambolog. Home of Gambo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="font-bold text-xl bg-red-700 text-white flex justify-center mb-4">
        GAMBOLOG
      </header>

      <main>
        <div className="flex flex-col items-center">
          <h1>
            Welcome to{" "}
            <a href="/" className="text-red-700">
              GAMBOLOG
            </a>
          </h1>
          {/* TODO: lets animate this guy here! */}
          <div className="mt-4">
            {"GAMBOLOG".split("").map((l, i) => (
              <motion.div
                animate={{ rotate: 360 }}
                key={i}
                transition={{ duration: 2 }}
              >
                {l}
              </motion.div>
            ))}
          </div>
          <div className="mt-4">
            <p>
              Get started by diving into <code>THE OCEAN</code>
            </p>
            <p>Pardon my mess as this site is under construction</p>
            {/* <a href="/nowhere">
                <h3>Fun &rarr;</h3>
                <p>Games. I promise nothing but fun.</p>
                </a>
                <a href="/learn">
                <h3>Learn &rarr;</h3>
                <p>Learn about the horrors before all humankind!</p>
                </a>
                <a href="/examples">
                <h3>Examples &rarr;</h3>
                <p>Discover and destroy all know order before you.</p>
                </a> */}
          </div>
        </div>
      </main>
      {/* <footer className="flex justify-center">
                GAMBOLOG
                </footer> */}
    </div>
  );
}
