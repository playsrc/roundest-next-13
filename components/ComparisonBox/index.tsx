"use client";

import { Pokemon } from "@prisma/client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTransition, useState } from "react";
import { MyButton } from "./styles";

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
    <div>
      <div>
        <Image
          src={firstPokemon?.spriteUrl}
          alt={firstPokemon?.name}
          width={128}
          height={128}
        />
        <MyButton
          disabled={isPending}
          onClick={() => handleVote(firstPokemon.id)}
        >
          {isMutating ? "Loading" : "Rounder"}
        </MyButton>
      </div>
      <p>OR</p>
      <div>
        <Image
          src={secondPokemon?.spriteUrl}
          alt={secondPokemon?.name}
          width={128}
          height={128}
        />
        <MyButton
          disabled={isPending}
          onClick={() => handleVote(secondPokemon.id)}
        >
          {isMutating ? "Loading" : "Rounder"}
        </MyButton>
      </div>
    </div>
  );
}
