import { Inter } from "next/font/google";
import Subscribe from "@/components/subscribe/Subscribe";
import { GamesProps } from "@/components/games/types";
import GameCard from "@/components/games/GameCard";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import redis from "@/lib/redis";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ games }: GamesProps) {
  return (
    <main className={`text-slate-800 h-5/6 bg-gray-50 ${inter.className}`}>
      <Navbar />
      <Subscribe />
      <div>
        <span className="flex justify-center font-bold text-3xl">Today's Freebies</span>
        {games.map((g) => (
          <GameCard {...g} />
        ))}
        <Footer />
      </div>
    </main>
  );
}

export async function getServerSideProps() {
  const data = (await redis.lrange("freebies_list", 0, 10)).map((entry) =>
    JSON.parse(entry)
  );

  return { props: { games: data } };
}
