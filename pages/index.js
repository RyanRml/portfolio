// import { Inter } from "@next/font/google";
// const inter = Inter({ subsets: ["latin"] });

import Head from "next/head";
import styles from "@/styles/Home.module.css";

import Welcome from "@/components/Welcome";
import About from "@/components/About";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import { useRef } from "react";

export default function Home() {
  const homeRef = useRef();
  const aboutRef = useRef();
  const workRef = useRef();
  const contactRef = useRef();

  const scroll = (value) => {
    value.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Head>
        <title>Ryan Ramoul</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favico.ico" />
      </Head>
      <nav className={styles.container}>
        <ul className={styles.navList}>
          <li className={styles.navItems} onClick={() => scroll(homeRef)}>
            Accueil
          </li>
          <li className={styles.navItems} onClick={() => scroll(aboutRef)}>
            à propos
          </li>
          <li className={styles.navItems} onClick={() => scroll(workRef)}>
            Projets
          </li>
          <li className={styles.navItems} onClick={() => scroll(contactRef)}>
            Contact
          </li>
        </ul>
      </nav>
      <span ref={homeRef} />
      <Welcome />
      <span ref={aboutRef} />
      <About />
      <span ref={workRef} />
      <Work />
      <span ref={contactRef} style={{ height: "100vh" }} />
      <Contact />
    </>
  );
}
