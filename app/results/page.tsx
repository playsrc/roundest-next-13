import Header from "../../components/Header";
import { db } from "../../lib/db";

// ISR
export const revalidate = 60;

async function getPokemonVotes() {
  return await db.pokemon.findMany({
    orderBy: {
      votes: { _count: "desc" },
    },
    select: {
      id: true,
      name: true,
      spriteUrl: true,
      _count: {
        select: {
          votes: true,
        },
      },
    },
  });
}

export default async function Results() {
  const res = await getPokemonVotes();
  const totalVotes = res.reduce((acc, curr) => acc + curr._count.votes, 0);
  console.log(totalVotes);
  return (
    <>
      <Header text="Results" />
      <ol>
        {res.map((pokemon) => {
          const percentage = (
            (pokemon._count.votes * 100) /
            totalVotes
          ).toFixed(2);
          return (
            <li key={pokemon.id}>
              <span>{pokemon.name}</span> <span>{percentage}%</span>
            </li>
          );
        })}
      </ol>
    </>
  );
}
