import { Inter } from 'next/font/google'

import { Subscribe } from '@/components/subscribe/Subscribe'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`text-zinc-900 ${inter.className}`}
    >
      <Subscribe />
    </main>
  )
}
