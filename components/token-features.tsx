import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Zap, Globe, TrendingUp, Users2, Coins } from "lucide-react"

export function TokenFeatures() {
  const features = [
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Secure & Transparent",
      description: "Built on blockchain technology ensuring complete transparency and security for all transactions.",
    },
    {
      icon: <Users2 className="h-10 w-10 text-primary" />,
      title: "Community Governed",
      description: "Decentralized governance allowing community members to participate in key decisions.",
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "Fast Transactions",
      description: "Lightning-fast transaction processing with minimal fees for seamless user experience.",
    },
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "Global Accessibility",
      description: "Available worldwide, breaking down barriers and promoting financial inclusion.",
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-primary" />,
      title: "Deflationary Model",
      description: "Strategic token burning mechanism to maintain scarcity and potential value appreciation.",
    },
    {
      icon: <Coins className="h-10 w-10 text-primary" />,
      title: "Utility Token",
      description: "Multiple use cases including staking, governance, and access to exclusive community features.",
    },
  ]

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Token Features</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            The Ambedkar Token combines cutting-edge blockchain technology with meaningful purpose, creating a
            cryptocurrency that serves both financial and social objectives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <CardHeader className="text-center pb-4">
                <div className="mb-4 flex justify-center">{feature.icon}</div>
                <CardTitle className="text-xl text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
