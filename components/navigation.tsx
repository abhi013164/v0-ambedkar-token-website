"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Coins } from "lucide-react"
import Link from "next/link"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Values", href: "/values" },
    { name: "Games", href: "/games" },
    { name: "Features", href: "#features" },
    { name: "Tokenomics", href: "#tokenomics" },
  ]

  const handleBuyToken = () => {
    window.open("https://pump.fun", "_blank")
  }

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                <Coins className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                AMBEDKAR
              </h1>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-muted"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <Button
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-md hover:shadow-lg transition-all duration-300"
              onClick={handleBuyToken}
            >
              <Coins className="mr-2 h-4 w-4" />
              Buy Token
            </Button>
          </div>

          {/* Mobile navigation button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background/98 backdrop-blur-sm border-b border-border">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium hover:bg-muted transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button
              className="w-full mt-4 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white"
              onClick={() => {
                handleBuyToken()
                setIsOpen(false)
              }}
            >
              <Coins className="mr-2 h-4 w-4" />
              Buy Token
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
