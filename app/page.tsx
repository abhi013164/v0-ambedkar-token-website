"use client"

import { useState } from "react"
import { IntroLoading } from "@/components/intro-loading"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { TokenFeatures } from "@/components/token-features"
import { TokenomicsSection } from "@/components/tokenomics-section"
import { RoadmapSection } from "@/components/roadmap-section"
import { ConstitutionalValues } from "@/components/constitutional-values"
import { InteractiveGames } from "@/components/interactive-games"
import { ScrollVideoSection } from "@/components/scroll-video-section"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"

export default function Home() {
  const [showIntro, setShowIntro] = useState(true)

  if (showIntro) {
    return <IntroLoading onComplete={() => setShowIntro(false)} />
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ScrollVideoSection />
      <ConstitutionalValues />
      <TokenFeatures />
      <InteractiveGames />
      <TokenomicsSection />
      <RoadmapSection />
      <Footer />
    </main>
  )
}
