"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Coins } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const handleBuyToken = () => {
    window.open("https://pump.fun", "_blank")
  }

  return (
    <section
      id="home"
      className="pt-16 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-muted to-background"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="mb-8 relative">
            <div className="relative inline-block">
              <img
                src="/placeholder.svg?height=200&width=200"
                alt="Dr. B.R. Ambedkar holding Ambedkar Token"
                className="mx-auto rounded-full w-32 h-32 sm:w-48 sm:h-48 object-cover border-4 border-primary shadow-2xl animate-float"
              />
              <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-8 h-8 sm:w-16 sm:h-16 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center animate-pulse-glow">
                <Coins className="w-4 h-4 sm:w-8 sm:h-8 text-white" />
              </div>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 text-balance px-2">
            Honoring{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Dr. B.R. Ambedkar's
            </span>{" "}
            Legacy
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty leading-relaxed px-4">
            The Ambedkar Token celebrates the life and principles of Dr. Bhimrao Ramji Ambedkar, the architect of the
            Indian Constitution and champion of social justice.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 px-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-glow w-full sm:w-auto"
              onClick={handleBuyToken}
            >
              <Coins className="mr-2 h-5 w-5" />
              Buy AMBEDKAR Token
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Link href="/about">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white bg-transparent w-full sm:w-auto"
              >
                Learn More
              </Button>
            </Link>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 text-sm text-muted-foreground px-4">
            <div className="flex items-center gap-2 bg-card px-3 py-2 sm:px-4 sm:py-2 rounded-full">
              <Star className="h-4 w-4 text-accent" />
              <span className="text-xs sm:text-sm">Community Driven</span>
            </div>
            <div className="flex items-center gap-2 bg-card px-3 py-2 sm:px-4 sm:py-2 rounded-full">
              <Star className="h-4 w-4 text-accent" />
              <span className="text-xs sm:text-sm">Social Impact</span>
            </div>
            <div className="flex items-center gap-2 bg-card px-3 py-2 sm:px-4 sm:py-2 rounded-full">
              <Star className="h-4 w-4 text-accent" />
              <span className="text-xs sm:text-sm">Educational Mission</span>
            </div>
          </div>

          <div className="mt-16 max-w-4xl mx-auto px-4">
            <blockquote className="text-base sm:text-lg md:text-xl italic text-primary font-medium bg-card/50 p-6 sm:p-8 rounded-lg border-l-4 border-primary">
              "Cultivation of mind should be the ultimate aim of human existence."
              <footer className="text-sm text-muted-foreground mt-2 not-italic">— Dr. B.R. Ambedkar</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
