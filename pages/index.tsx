import React from "react";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Gambolog home of Gambo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Welcome to <a href="/" className="text-red-700">GAMBOLOG</a>
        </h1>
        <p>
          Get started by diving into <code>THE OCEAN</code>
        </p>
        <div>
          {/* TODO: another url here or change it more we getting started */}
          <a href="/nowhere">
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
          </a>
        </div>
      </main>
      <footer>footers go here!</footer>
    </div>
  );
}
