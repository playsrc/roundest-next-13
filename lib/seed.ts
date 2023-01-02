import { db } from "./db";

async function Seed() {
  const res = await fetch(
    "https://raw.githubusercontent.com/PokeAPI/pokeapi/master/data/v2/csv/pokemon.csv"
  );

  const text = (await res.text()).split("\n");

  // slice the first row to avoid header text
  const formattedPokemon = text.slice(1, 151 + 1).map((data) => {
    const row = data.split(",");
    const id = parseInt(row[0]);
    const name = row[1];
    return {
      id,
      name,
      spriteUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
    };
  });

  const creation = await db.pokemon.createMany({
    data: formattedPokemon,
  });

  console.log("Creation ?", creation.count);
}

Seed();

// const doBackfill = async () => {
//   const pokeApi = new PokemonClient();

//   const allPokemon = await pokeApi.listPokemons(0, 493);

//   const formattedPokemon = allPokemon.results.map((p, index) => ({
//     id: index + 1,
//     name: (p as { name: string }).name,
//     spriteUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
//       index + 1
//     }.png`,
//   }));

//   const creation = await prisma.pokemon.createMany({
//     data: formattedPokemon,
//   });

//   console.log("Creation?", creation);
// };

// doBackfill();
