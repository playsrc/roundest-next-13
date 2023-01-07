import { Suspense } from "react";
import ComparisonBox from "../components/ComparisonBox";
import Footer from "../components/Footer";
import Header from "../components/Header";

import styles from "./page.module.css";

export default async function Home() {
  return (
    <div className={styles.container}>
      <Header text="Which Pokémon is Rounder?" />
      <Suspense fallback={<h1>Loading...</h1>}>
        {/* @ts-ignore */}
        <ComparisonBox />
      </Suspense>
      <Footer />
    </div>
  );
}
