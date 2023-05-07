import { Inter } from 'next/font/google'

import { Subscribe } from '@/components/subscribe/Subscribe'
import { GameCard } from '@/components/GameCard'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`text-slate-800 ${inter.className}`}
    >
      <Subscribe />
      <GameCard />
    </main>
  )
}
