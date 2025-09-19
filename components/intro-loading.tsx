"use client"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

interface IntroLoadingProps {
  onComplete: () => void
}

export function IntroLoading({ onComplete }: IntroLoadingProps) {
  const [currentQuote, setCurrentQuote] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const [animationPhase, setAnimationPhase] = useState<"scatter" | "forming" | "complete">("scatter")
  const [cityBuildings, setCityBuildings] = useState<
    Array<{ id: number; x: number; y: number; targetX: number; targetY: number; height: number; width: number }>
  >([])

  const quotes = [
    "Cultivation of mind should be the ultimate aim of human existence.",
    "I measure the progress of a community by the degree of progress which women have achieved.",
    "Religion is for man and not man for religion.",
    "Education is the milk of a lioness, whoever drinks it will roar.",
    "Be educated, be agitated and be organized.",
    "The relationship between husband and wife should be one of closest friends.",
    "Political tyranny is nothing compared to the social tyranny and a reformer who defies society is a more courageous man than a politician who defies Government.",
    "Lost rights are never regained by appeals to the conscience of the usurpers, but by relentless struggle.",
  ]

  const cityLayout = [
    { x: 5, y: 85, height: 15, width: 8 },
    { x: 15, y: 80, height: 20, width: 6 },
    { x: 23, y: 88, height: 12, width: 5 },
    { x: 30, y: 82, height: 18, width: 7 },
    { x: 70, y: 82, height: 18, width: 7 },
    { x: 78, y: 88, height: 12, width: 5 },
    { x: 85, y: 80, height: 20, width: 6 },
    { x: 93, y: 85, height: 15, width: 6 },
    { x: 10, y: 75, height: 25, width: 4 },
    { x: 20, y: 70, height: 30, width: 5 },
    { x: 75, y: 70, height: 30, width: 5 },
    { x: 88, y: 75, height: 25, width: 4 },
    { x: 48, y: 88, height: 12, width: 4 },
  ]

  useEffect(() => {
    const initialBuildings = cityLayout.map((building, index) => ({
      id: index,
      x: Math.random() * 100,
      y: Math.random() * 100,
      targetX: building.x,
      targetY: building.y,
      height: building.height,
      width: building.width,
    }))
    setCityBuildings(initialBuildings)

    const phaseTimer = setTimeout(() => {
      setAnimationPhase("forming")
      setTimeout(() => {
        setAnimationPhase("complete")
      }, 5000)
    }, 2000)

    return () => clearTimeout(phaseTimer)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(onComplete, 500)
    }, 15000) // Reduced time since history content is removed

    const quoteTimer = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length)
    }, 2500)

    return () => {
      clearTimeout(timer)
      clearInterval(quoteTimer)
    }
  }, [onComplete])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat"></div>
      </div>

      {cityBuildings.map((building) => (
        <div
          key={`building-${building.id}`}
          className="absolute transition-all duration-6000 ease-in-out z-10"
          style={{
            left: animationPhase === "scatter" ? `${building.x}%` : `${building.targetX}%`,
            top: animationPhase === "scatter" ? `${building.y}%` : `${building.targetY}%`,
            width: `${building.width}%`,
            height: `${building.height}%`,
            transform: "translate(-50%, -100%)",
            transitionDelay: `${building.id * 100}ms`,
          }}
        >
          <div className="w-full h-full bg-gradient-to-t from-amber-600 to-amber-400 shadow-lg border border-amber-500 relative animate-building-glow">
            <div className="absolute inset-1 grid grid-cols-2 gap-1">
              <div className="bg-yellow-300 opacity-60 rounded-sm"></div>
              <div className="bg-yellow-300 opacity-40 rounded-sm"></div>
              <div className="bg-yellow-300 opacity-80 rounded-sm"></div>
              <div className="bg-yellow-300 opacity-30 rounded-sm"></div>
            </div>
            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-red-500 rounded-full"></div>
          </div>
        </div>
      ))}

      <div className="text-center text-white z-30 max-w-4xl px-4 sm:px-6">
        <div className="mb-6 sm:mb-8 animate-float relative">
          <div className="relative">
            <img
              src="/placeholder.svg?height=220&width=220"
              alt="Dr. B.R. Ambedkar"
              className={`w-40 h-40 sm:w-56 sm:h-56 mx-auto rounded-full border-4 border-white shadow-2xl transition-all duration-3000 ${
                animationPhase === "complete" ? "animate-pulse-glow opacity-100 scale-110" : "opacity-70"
              }`}
            />
            {animationPhase === "complete" && (
              <div className="absolute inset-0 rounded-full border-4 border-yellow-400 animate-ping opacity-50"></div>
            )}
          </div>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 animate-fade-in-up bg-gradient-to-r from-yellow-400 to-amber-300 bg-clip-text text-transparent">
          AMBEDKAR TOKEN
        </h1>

        <p
          className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 opacity-90 animate-fade-in-up text-amber-200"
          style={{ animationDelay: "0.2s" }}
        >
          Building the City of Justice & Equality
        </p>

        {animationPhase === "forming" && (
          <div className="mb-4 sm:mb-6 text-yellow-400 animate-pulse">
            <p className="text-base sm:text-lg font-semibold">🏗️ Building Ambedkar City of Dreams...</p>
            <p className="text-xs sm:text-sm opacity-75">Creating the digital legacy of justice</p>
          </div>
        )}

        {animationPhase === "complete" && (
          <div className="mb-4 sm:mb-6 text-yellow-400">
            <p className="text-lg sm:text-xl font-bold">🏛️ ✨ Ambedkar City Complete ✨ 🏛️</p>
            <p className="text-xs sm:text-sm opacity-75">Digital legacy established with justice and equality</p>
          </div>
        )}

        <div className="h-16 sm:h-24 flex items-center justify-center mb-6 sm:mb-8">
          <blockquote
            className="text-sm sm:text-lg md:text-xl italic font-medium animate-fade-in-up text-amber-100 text-center px-2"
            key={currentQuote}
          >
            "{quotes[currentQuote]}"
          </blockquote>
        </div>

        <div className="w-48 sm:w-64 h-2 bg-white/20 rounded-full mx-auto mb-4 sm:mb-6 border border-white/30">
          <div
            className="h-full bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full animate-pulse shadow-lg"
            style={{ width: "100%", animation: "pulse 15s linear" }}
          ></div>
        </div>

        <Button
          variant="outline"
          onClick={() => {
            setIsVisible(false)
            setTimeout(onComplete, 500)
          }}
          className="bg-white/20 border-white/50 text-white hover:bg-white/30 hover:border-yellow-400 transition-all duration-300 text-sm sm:text-base px-4 sm:px-6"
        >
          Enter Ambedkar City
        </Button>
      </div>
    </div>
  )
}
