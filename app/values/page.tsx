"use client"

import { Navigation } from "@/components/navigation"
import { ConstitutionalValues } from "@/components/constitutional-values"
import { Footer } from "@/components/footer"

export default function ValuesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20">
        <ConstitutionalValues />
      </div>
      <Footer />
    </main>
  )
}
