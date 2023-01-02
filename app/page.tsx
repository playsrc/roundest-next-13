import ComparisonBox from "../components/ComparisonBox";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { db } from "../lib/db";
import { getRandomIds } from "../lib/get-random-ids";

import styles from "./page.module.css";

async function getPokemon() {
  const { firstId, secondId } = getRandomIds();

  const firstPokemon = await db.pokemon.findFirst({ where: { id: firstId } });
  const secondPokemon = await db.pokemon.findFirst({ where: { id: secondId } });

  return { firstPokemon, secondPokemon };
}

export default async function Home() {
  const { firstPokemon, secondPokemon } = await getPokemon();
  if (!firstPokemon || !secondPokemon) return;

  return (
    <div className={styles.container}>
      <Header text="Which Pokémon is Rounder?" />

      <ComparisonBox pokemons={{ firstPokemon, secondPokemon }} />

      <Footer />
    </div>
  );
}
