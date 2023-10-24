import { Inter } from "next/font/google";
import Subscribe from "@/components/subscribe/Subscribe";
import { GamesProps } from "@/components/games/types";
import GameCard from "@/components/games/GameCard";
import { getGamesList } from "@/lib/redis";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ games }: GamesProps) {
  return (
    <main className={`text-slate-800 h-5/6 ${inter.className}`}>
      <Subscribe />
      <div>
        <span className="flex justify-center font-bold text-3xl">Today's Freebies</span>
        {games.map((g) => (
          <GameCard key={g.reddit_url} {...g} />
        ))}
      </div>
    </main>
  );
}

export async function getServerSideProps() {
  const data = await getGamesList();

  return { props: { games: data } };
}
