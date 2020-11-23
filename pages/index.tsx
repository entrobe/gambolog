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
            <a href="/" className="flex text-red-700">
              {"GAMBOLOG".split("").map((l, i) => (
                <motion.div
                  animate={{ rotate: 360 }}
                  key={i}
                  transition={{ delay: i * 0.3, duration: 2 }}
                >
                  {l}
                </motion.div>
              ))}
            </a>
          </h1>
          <div className="mt-4">
            <motion.p
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ ease: "easeIn", duration: 4 }}>
              Get started by diving into THE OCEAN
            </motion.p>
          </div>
        </div>
      </main>
      {/* <footer className="flex justify-center">
                GAMBOLOG
                </footer> */}
    </div>
  );
}
