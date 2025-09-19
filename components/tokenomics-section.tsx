"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function TokenomicsSection() {
  const distributionData = [
    { name: "Community", value: 40, color: "bg-green-600" },
    { name: "Liquidity", value: 25, color: "bg-green-400" },
    { name: "Development", value: 15, color: "bg-green-500" },
    { name: "Marketing", value: 10, color: "bg-green-700" },
    { name: "Team", value: 10, color: "bg-green-800" },
  ]

  const burnSchedule = [
    { month: "Month 1", burned: 5 },
    { month: "Month 3", burned: 10 },
    { month: "Month 6", burned: 15 },
    { month: "Month 12", burned: 25 },
    { month: "Month 24", burned: 35 },
  ]

  return (
    <section id="tokenomics" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Tokenomics</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            A carefully designed economic model that ensures sustainable growth, community benefits, and long-term value
            creation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card className="bg-card border-border">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-card-foreground">Total Supply</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">1B</div>
              <p className="text-muted-foreground">AMBEDKAR Tokens</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-card-foreground">Initial Price</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">$0.001</div>
              <p className="text-muted-foreground">Per Token</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-card-foreground">Market Cap</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">$1M</div>
              <p className="text-muted-foreground">Initial Target</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-xl text-card-foreground text-center">Token Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {distributionData.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-4 h-4 rounded ${item.color}`}></div>
                      <span className="text-foreground">{item.name}</span>
                    </div>
                    <span className="text-foreground font-semibold">{item.value}%</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-xl text-card-foreground text-center">Burn Schedule (% of Supply)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {burnSchedule.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-foreground">{item.month}</span>
                    <div className="flex items-center gap-2">
                      <div className="w-32 bg-secondary rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full"
                          style={{ width: `${(item.burned / 35) * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-foreground font-semibold w-8">{item.burned}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
