"use client"

import { Navigation } from "@/components/navigation"
import { InteractiveGames } from "@/components/interactive-games"
import { Footer } from "@/components/footer"

export default function GamesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20">
        <InteractiveGames />
      </div>
      <Footer />
    </main>
  )
}
