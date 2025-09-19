"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Lightbulb, Target, Eye, Maximize, Trophy } from "lucide-react"

export function InteractiveGames() {
  const [cursorGame, setCursorGame] = useState({
    score: 0,
    active: false,
    foundWords: new Set<string>(),
    gameCompleted: false,
    isFullscreen: false,
  })
  const [quizGame, setQuizGame] = useState({ score: 0, currentQuestion: 0, active: false })
  const [showHint, setShowHint] = useState(false)
  const [currentHintIndex, setCurrentHintIndex] = useState(0)
  const gameRef = useRef<HTMLDivElement>(null)

  const gameWords = ["Education", "Justice", "Liberty", "Equality", "Constitution"]

  const wordHints = [
    "Find the foundation of all progress - the key to enlightenment",
    "Seek the principle that ensures fairness for all",
    "Discover the essence of freedom from oppression",
    "Locate the cornerstone of equal treatment",
    "Uncover the supreme law that governs our nation",
  ]

  const wordPositions = [
    { x: 20, y: 30 }, // Education - top left
    { x: 80, y: 25 }, // Justice - top right
    { x: 15, y: 70 }, // Liberty - bottom left
    { x: 75, y: 75 }, // Equality - bottom right
    { x: 50, y: 50 }, // Constitution - center
  ]

  const quizQuestions = [
    {
      question: "In which year was the Indian Constitution adopted?",
      options: ["1947", "1949", "1950", "1951"],
      correct: 1,
    },
    {
      question: "Dr. Ambedkar was the chairman of which committee?",
      options: ["Drafting Committee", "Planning Committee", "Finance Committee", "Education Committee"],
      correct: 0,
    },
    {
      question: "Which university did Dr. Ambedkar attend in the US?",
      options: ["Harvard", "Columbia", "Yale", "Princeton"],
      correct: 1,
    },
  ]

  const enterFullscreen = async () => {
    if (gameRef.current && document.documentElement.requestFullscreen) {
      try {
        await document.documentElement.requestFullscreen()
        setCursorGame((prev) => ({ ...prev, isFullscreen: true }))
      } catch (err) {
        console.log("Fullscreen not supported")
      }
    }
  }

  const exitFullscreen = async () => {
    if (document.exitFullscreen) {
      try {
        await document.exitFullscreen()
        setCursorGame((prev) => ({ ...prev, isFullscreen: false }))
      } catch (err) {
        console.log("Exit fullscreen failed")
      }
    }
  }

  useEffect(() => {
    if (!cursorGame.active) {
      document.body.classList.remove("game-dark-mode")
      document.body.style.cursor = "auto"
      return
    }

    document.body.classList.add("game-dark-mode")
    document.body.style.cursor = "none"

    const spawnWord = (wordIndex: number) => {
      const word = gameWords[wordIndex]
      const position = wordPositions[wordIndex]

      if (cursorGame.foundWords.has(word)) return

      const wordElement = document.createElement("div")
      wordElement.className =
        "fixed pointer-events-auto z-50 bg-yellow-400 text-black px-3 py-2 sm:px-4 sm:py-2 rounded-lg text-sm sm:text-lg font-bold cursor-pointer transition-all hover:scale-110 animate-pulse"
      wordElement.style.left = position.x + "%"
      wordElement.style.top = position.y + "%"
      wordElement.style.transform = "translate(-50%, -50%)"
      wordElement.textContent = word

      wordElement.onclick = () => {
        if (!cursorGame.foundWords.has(word)) {
          const newFoundWords = new Set(cursorGame.foundWords)
          newFoundWords.add(word)

          setCursorGame((prev) => ({
            ...prev,
            score: prev.score + 20,
            foundWords: newFoundWords,
            gameCompleted: newFoundWords.size === 5,
          }))

          const lightEffect = document.createElement("div")
          lightEffect.className =
            "fixed pointer-events-none z-50 w-32 h-32 sm:w-40 sm:h-40 bg-gradient-radial from-yellow-300 via-yellow-200 to-transparent rounded-full opacity-75 animate-ping"
          lightEffect.style.left = position.x + "%"
          lightEffect.style.top = position.y + "%"
          lightEffect.style.transform = "translate(-50%, -50%)"
          document.body.appendChild(lightEffect)
          setTimeout(() => lightEffect.remove(), 2000)

          if (newFoundWords.size === 5) {
            setTimeout(() => {
              document.body.classList.remove("game-dark-mode")
              document.body.style.cursor = "auto"
              setCursorGame((prev) => ({ ...prev, active: false }))
              alert(
                "🎉 Congratulations! You've found all 5 words and unlocked the light! The wisdom of Dr. Ambedkar illuminates the path forward!",
              )
            }, 1000)
          }
        }
        wordElement.remove()
      }

      document.body.appendChild(wordElement)

      setTimeout(() => {
        if (document.body.contains(wordElement)) {
          wordElement.remove()
        }
      }, 5000)
    }

    const wordSpawnInterval = setInterval(() => {
      if (cursorGame.foundWords.size < 5) {
        const remainingWords = gameWords.filter((word) => !cursorGame.foundWords.has(word))
        if (remainingWords.length > 0) {
          const randomWord = remainingWords[Math.floor(Math.random() * remainingWords.length)]
          const wordIndex = gameWords.indexOf(randomWord)
          spawnWord(wordIndex)
        }
      }
    }, 3000)

    const handleMouseMove = (e: MouseEvent) => {
      const trail = document.createElement("div")
      trail.className = "cursor-trail"
      trail.style.left = e.clientX + "px"
      trail.style.top = e.clientY + "px"
      document.body.appendChild(trail)
      setTimeout(() => trail.remove(), 500)
    }

    const handleClick = (e: MouseEvent) => {
      const burst = document.createElement("div")
      burst.className =
        "fixed pointer-events-none z-50 w-16 h-16 sm:w-24 sm:h-24 bg-white rounded-full opacity-75 animate-ping"
      burst.style.left = e.clientX - 32 + "px"
      burst.style.top = e.clientY - 32 + "px"
      document.body.appendChild(burst)
      setTimeout(() => burst.remove(), 600)
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("click", handleClick)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("click", handleClick)
      document.body.classList.remove("game-dark-mode")
      document.body.style.cursor = "auto"
      clearInterval(wordSpawnInterval)
    }
  }, [cursorGame.active, cursorGame.foundWords])

  const showNextHint = () => {
    const remainingWords = gameWords.filter((word) => !cursorGame.foundWords.has(word))
    if (remainingWords.length > 0) {
      const nextWordIndex = gameWords.indexOf(remainingWords[0])
      setCurrentHintIndex(nextWordIndex)
      setShowHint(true)
      setTimeout(() => setShowHint(false), 4000)
    }
  }

  return (
    <section className="py-12 sm:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <Badge variant="secondary" className="mb-4">
            Interactive Experience
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-balance">Ambedkar Games</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Engage with Dr. Ambedkar's teachings through interactive games and experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-slate-800">
            <CardHeader className="bg-slate-900 text-white">
              <CardTitle className="flex items-center gap-3 text-lg sm:text-xl">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-yellow-500 rounded-full flex items-center justify-center text-black">
                  <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                Light in Darkness Quest
              </CardTitle>
            </CardHeader>
            <CardContent className="bg-slate-800 text-white p-4 sm:p-6">
              <div
                ref={gameRef}
                className={`h-48 sm:h-64 bg-black rounded-lg relative overflow-hidden ${cursorGame.active ? "cursor-none" : ""}`}
              >
                {cursorGame.active ? (
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-3 sm:p-4">
                    <div className="text-center mb-3 sm:mb-4">
                      <p className="text-xl sm:text-2xl font-bold mb-2 text-yellow-400">Score: {cursorGame.score}</p>
                      <p className="text-xs sm:text-sm opacity-75 mb-2">Words Found: {cursorGame.foundWords.size}/5</p>
                      {cursorGame.gameCompleted ? (
                        <div className="text-center">
                          <Trophy className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 text-yellow-400" />
                          <p className="text-base sm:text-lg font-bold text-yellow-400 mb-2">Quest Complete!</p>
                          <p className="text-xs opacity-75">You've unlocked the light of wisdom!</p>
                        </div>
                      ) : (
                        <p className="text-xs opacity-60">Find all 5 key words to complete the quest!</p>
                      )}
                    </div>
                    <div className="flex gap-2 mb-3 sm:mb-4 flex-wrap justify-center">
                      <Button
                        onClick={showNextHint}
                        variant="outline"
                        size="sm"
                        className="bg-yellow-500 text-black hover:bg-yellow-400 text-xs sm:text-sm"
                      >
                        <Eye className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                        Hint
                      </Button>
                      {!cursorGame.isFullscreen && (
                        <Button
                          onClick={enterFullscreen}
                          variant="outline"
                          size="sm"
                          className="bg-blue-500 text-white hover:bg-blue-400 text-xs sm:text-sm"
                        >
                          <Maximize className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                          Fullscreen
                        </Button>
                      )}
                      <Button
                        onClick={() => {
                          setCursorGame({
                            score: 0,
                            active: false,
                            foundWords: new Set(),
                            gameCompleted: false,
                            isFullscreen: false,
                          })
                          document.body.classList.remove("game-dark-mode")
                          document.body.style.cursor = "auto"
                          if (cursorGame.isFullscreen) {
                            exitFullscreen()
                          }
                        }}
                        variant="outline"
                        size="sm"
                        className="bg-red-500 text-white hover:bg-red-400 text-xs sm:text-sm"
                      >
                        End Quest
                      </Button>
                    </div>
                    {showHint && (
                      <div className="bg-yellow-500 text-black p-2 sm:p-3 rounded-lg text-xs sm:text-sm max-w-xs text-center animate-pulse">
                        <p className="font-semibold mb-1">Hint for "{gameWords[currentHintIndex]}":</p>
                        <p>{wordHints[currentHintIndex]}</p>
                      </div>
                    )}
                    <div className="mt-3 sm:mt-4 text-xs opacity-60 text-center px-2">
                      <p>Words appear at different locations. Move your cursor to illuminate the darkness!</p>
                    </div>
                  </div>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white p-4 sm:p-6">
                      <Target className="w-8 h-8 sm:w-12 sm:h-12 mx-auto mb-4 text-yellow-400" />
                      <p className="mb-2 font-semibold text-sm sm:text-base">Embark on the Light Quest</p>
                      <p className="text-xs sm:text-sm opacity-75 mb-4">
                        Find 5 key words of Dr. Ambedkar's wisdom to unlock the light!
                      </p>
                      <p className="text-xs opacity-60 mb-4">
                        The entire website will go dark - use your cursor as light to find the words
                      </p>
                      <Button
                        onClick={() => {
                          setCursorGame({
                            score: 0,
                            active: true,
                            foundWords: new Set(),
                            gameCompleted: false,
                            isFullscreen: false,
                          })
                          enterFullscreen()
                        }}
                        className="bg-yellow-500 text-black hover:bg-yellow-400 text-sm sm:text-base"
                      >
                        Start Light Quest
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-lg sm:text-xl">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-secondary rounded-full flex items-center justify-center text-white">
                  🧠
                </div>
                Constitutional Quiz
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
              <div className="h-48 sm:h-64 bg-muted rounded-lg p-4 sm:p-6 flex flex-col justify-center">
                {quizGame.active ? (
                  <div>
                    <div className="mb-4">
                      <Badge variant="outline" className="mb-2">
                        Question {quizGame.currentQuestion + 1} of {quizQuestions.length}
                      </Badge>
                      <h3 className="text-base sm:text-lg font-semibold mb-4">
                        {quizQuestions[quizGame.currentQuestion]?.question}
                      </h3>
                    </div>
                    <div className="space-y-2">
                      {quizQuestions[quizGame.currentQuestion]?.options.map((option, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          className="w-full justify-start bg-transparent text-xs sm:text-sm p-2 sm:p-3"
                          onClick={() => {
                            const isCorrect = index === quizQuestions[quizGame.currentQuestion].correct
                            const newScore = isCorrect ? quizGame.score + 1 : quizGame.score
                            const nextQuestion = quizGame.currentQuestion + 1

                            if (nextQuestion >= quizQuestions.length) {
                              setQuizGame({ score: newScore, currentQuestion: 0, active: false })
                              alert(`Quiz completed! Score: ${newScore}/${quizQuestions.length}`)
                            } else {
                              setQuizGame({ score: newScore, currentQuestion: nextQuestion, active: true })
                            }
                          }}
                        >
                          {option}
                        </Button>
                      ))}
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-4">Score: {quizGame.score}</p>
                  </div>
                ) : (
                  <div className="text-center">
                    <p className="mb-4 text-sm sm:text-base">
                      Test your knowledge about Dr. Ambedkar and the Constitution
                    </p>
                    <Button
                      onClick={() => setQuizGame({ score: 0, currentQuestion: 0, active: true })}
                      className="bg-secondary hover:bg-secondary/90 text-sm sm:text-base"
                    >
                      Start Quiz
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
