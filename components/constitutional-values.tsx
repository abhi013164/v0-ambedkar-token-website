"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function ConstitutionalValues() {
  const values = [
    {
      icon: "⚖️",
      title: "Justice",
      description: "Social, economic and political justice for all",
      color: "bg-chart-1",
    },
    {
      icon: "🕊️",
      title: "Liberty",
      description: "Freedom of thought, expression, belief and worship",
      color: "bg-chart-2",
    },
    {
      icon: "🤝",
      title: "Equality",
      description: "Equal status and opportunity for every citizen",
      color: "bg-chart-3",
    },
    {
      icon: "🤲",
      title: "Fraternity",
      description: "Unity and dignity of all individuals",
      color: "bg-chart-4",
    },
  ]

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Dr. Ambedkar's Legacy
          </Badge>
          <h2 className="text-4xl font-bold mb-6 text-balance">Constitutional Values</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            The pillars of justice, liberty, equality, and fraternity that Dr. Ambedkar embedded in our Constitution
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div
                  className={`w-16 h-16 ${value.color} rounded-full flex items-center justify-center text-2xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}
                >
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-muted-foreground text-pretty">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold mb-6">Constitutional Experiments</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Experience Dr. Ambedkar's vision through interactive digital art and constitutional philosophy
          </p>
          <div className="bg-card rounded-lg p-8 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-xl mb-4 mx-auto">
                  📜
                </div>
                <h4 className="font-semibold mb-2">Constitution Quiz</h4>
                <p className="text-sm text-muted-foreground">Test your knowledge of constitutional principles</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white text-xl mb-4 mx-auto">
                  🎨
                </div>
                <h4 className="font-semibold mb-2">Digital Art Gallery</h4>
                <p className="text-sm text-muted-foreground">Explore Ambedkar's life through interactive art</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white text-xl mb-4 mx-auto">
                  💭
                </div>
                <h4 className="font-semibold mb-2">Philosophy Corner</h4>
                <p className="text-sm text-muted-foreground">Deep dive into Ambedkar's philosophical teachings</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
