import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Circle, Clock } from "lucide-react"

export function RoadmapSection() {
  const roadmapItems = [
    {
      phase: "Phase 1",
      title: "Foundation",
      status: "completed",
      items: [
        "Token Creation & Smart Contract Deployment",
        "Website Launch & Community Building",
        "Initial Marketing Campaign",
        "Whitepaper Release",
      ],
    },
    {
      phase: "Phase 2",
      title: "Growth",
      status: "in-progress",
      items: [
        "DEX Listings (PancakeSwap, Uniswap)",
        "Community Governance Implementation",
        "First Educational Grant Distribution",
        "Partnership with Educational Institutions",
      ],
    },
    {
      phase: "Phase 3",
      title: "Expansion",
      status: "upcoming",
      items: [
        "CEX Listings (Major Exchanges)",
        "Mobile App Development",
        "NFT Collection Launch",
        "Scholarship Program Launch",
      ],
    },
    {
      phase: "Phase 4",
      title: "Legacy",
      status: "future",
      items: [
        "Ambedkar Foundation Partnership",
        "Global Educational Initiative",
        "Metaverse Presence",
        "Long-term Sustainability Fund",
      ],
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-6 w-6 text-green-500" />
      case "in-progress":
        return <Clock className="h-6 w-6 text-accent" />
      default:
        return <Circle className="h-6 w-6 text-muted-foreground" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "border-green-500"
      case "in-progress":
        return "border-accent"
      default:
        return "border-muted-foreground"
    }
  }

  return (
    <section id="roadmap" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Roadmap</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Our journey to honor Dr. Ambedkar's legacy while building a sustainable and impactful cryptocurrency
            ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roadmapItems.map((item, index) => (
            <Card key={index} className={`bg-card border-2 ${getStatusColor(item.status)} relative`}>
              <CardHeader className="text-center pb-4">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-background p-1 rounded-full">
                  {getStatusIcon(item.status)}
                </div>
                <div className="mt-4">
                  <p className="text-sm text-muted-foreground mb-2">{item.phase}</p>
                  <CardTitle className="text-xl text-card-foreground">{item.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {item.items.map((task, taskIndex) => (
                    <li key={taskIndex} className="text-sm text-muted-foreground flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      {task}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-card border-border max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-card-foreground mb-4">Join Our Journey</h3>
              <p className="text-muted-foreground mb-6">
                Be part of building something meaningful. Every holder contributes to continuing Dr. Ambedkar's mission
                of equality and education.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-medium transition-colors">
                  Buy AMBEDKAR Token
                </button>
                <button className="border border-border hover:bg-secondary text-foreground px-6 py-3 rounded-lg font-medium transition-colors">
                  Read Whitepaper
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
