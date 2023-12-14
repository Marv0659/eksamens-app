import styles from "./page.module.css";
import Navbar from "./components/Navbar";
import Forside from "./components/Forside";
import Button from "./components/Button";
import React from "react";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <Forside titel="FOOFEST" />
    </main>
  );
}
