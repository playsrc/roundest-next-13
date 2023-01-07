"use client";

import { Pokemon } from "@prisma/client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTransition, useState } from "react";
import styles from "./styles.module.css";

interface Props {
  pokemons: {
    firstPokemon: Pokemon;
    secondPokemon: Pokemon;
  };
}

export default function ComparisonBox({ pokemons }: Props) {
  const { firstPokemon, secondPokemon } = pokemons;

  const route = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isFetching, setIsFetching] = useState(false);

  // Create inline loading UI
  const isMutating = isFetching || isPending;

  async function handleVote(pokemonId: number) {
    setIsFetching(true);
    await fetch(`http://localhost:3000/api/vote/${pokemonId}`, {
      method: "POST",
    });

    setIsFetching(false);

    startTransition(() => {
      // Refresh the current route and fetch new data from the server without
      // losing client-side browser or React state.
      route.refresh();
    });
  }

  return (
    <div className={styles.ComparisonContainer}>
      <div className={styles.VoteContainer}>
        <p>{firstPokemon.name}</p>
        <Image
          src={firstPokemon?.spriteUrl}
          alt={firstPokemon?.name}
          width={256}
          height={256}
        />
        <button
          className={styles.MyButton}
          disabled={isPending}
          onClick={() => handleVote(firstPokemon.id)}
        >
          {isMutating ? "Loading" : "Rounder"}
        </button>
      </div>
      <span>OR</span>
      <div className={styles.VoteContainer}>
        <p>{secondPokemon.name}</p>
        <Image
          src={secondPokemon?.spriteUrl}
          alt={secondPokemon?.name}
          width={256}
          height={256}
        />
        <button
          className={styles.MyButton}
          disabled={isPending}
          onClick={() => handleVote(secondPokemon.id)}
        >
          {isMutating ? "Loading" : "Rounder"}
        </button>
      </div>
    </div>
  );
}
