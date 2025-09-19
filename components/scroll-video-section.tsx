"use client"

import { useEffect, useRef, useState } from "react"

export function ScrollVideoSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-slate-900 text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className={`scroll-video ${isVisible ? "visible" : ""}`}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-balance">Journey Through History</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto text-pretty">
              Experience Dr. Ambedkar's life and teachings through immersive storytelling
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">The Architect of Modern India</h3>
              <p className="text-lg opacity-90 text-pretty">
                From his humble beginnings to becoming the principal architect of the Indian Constitution, Dr.
                Ambedkar's journey is one of perseverance, education, and unwavering commitment to justice.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span>Born into untouchability, rose to become a constitutional expert</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-secondary rounded-full"></div>
                  <span>First Indian to pursue doctorate in Economics from Columbia University</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <span>Drafted the Constitution that guarantees equality for all</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-video bg-slate-800 rounded-lg overflow-hidden">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Dr. Ambedkar Historical Moments"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-sm font-medium">
                    "I measure the progress of a community by the degree of progress which women have achieved."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
