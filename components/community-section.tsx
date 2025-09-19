import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Twitter, MessageCircle, Send } from "lucide-react"

export function CommunitySection() {
  const socialLinks = [
    {
      icon: <Twitter className="h-6 w-6" />,
      name: "Twitter",
      followers: "25K+",
      link: "#",
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      name: "Discord",
      members: "15K+",
      link: "#",
    },
    {
      icon: <Send className="h-6 w-6" />,
      name: "Telegram",
      members: "30K+",
      link: "#",
    },
  ]

  return (
    <section id="community" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Join Our Community</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Be part of a movement that combines the power of cryptocurrency with the timeless values of equality,
            education, and social justice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {socialLinks.map((social, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center text-primary">{social.icon}</div>
                <h3 className="text-lg font-semibold text-card-foreground mb-2">{social.name}</h3>
                <p className="text-2xl font-bold text-primary mb-4">{social.followers || social.members}</p>
                <Button variant="outline" className="w-full bg-transparent">
                  Join Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
