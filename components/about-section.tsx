"use client"

import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Scale, Users, Heart, Award, Globe } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function AboutSection() {
  const achievements = [
    {
      icon: <Scale className="h-8 w-8 text-primary" />,
      title: "Architect of Constitution",
      description: "Principal architect of the Indian Constitution, ensuring fundamental rights for all citizens.",
      color: "bg-primary/10",
    },
    {
      icon: <Users className="h-8 w-8 text-secondary" />,
      title: "Social Reformer",
      description: "Fought tirelessly against caste discrimination and worked for social equality.",
      color: "bg-secondary/10",
    },
    {
      icon: <BookOpen className="h-8 w-8 text-accent" />,
      title: "Scholar & Educator",
      description: "Highly educated lawyer, economist, and politician who valued education above all.",
      color: "bg-accent/10",
    },
    {
      icon: <Heart className="h-8 w-8 text-chart-2" />,
      title: "Champion of Rights",
      description: "Dedicated his life to securing rights and dignity for marginalized communities.",
      color: "bg-orange-100",
    },
  ]

  const milestones = [
    { year: "1891", event: "Born in Mhow, Central Provinces", icon: <Award className="h-4 w-4" /> },
    { year: "1913", event: "Graduated from Columbia University", icon: <Globe className="h-4 w-4" /> },
    { year: "1947", event: "Appointed Chairman of Drafting Committee", icon: <Scale className="h-4 w-4" /> },
    { year: "1950", event: "Indian Constitution came into effect", icon: <BookOpen className="h-4 w-4" /> },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-muted/50 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            The Visionary Leader
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">About Dr. B.R. Ambedkar</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Dr. Bhimrao Ramji Ambedkar (1891-1956) was an Indian jurist, economist, politician, and social reformer who
            inspired the Dalit Buddhist movement and campaigned against social discrimination towards the untouchables.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-md"
            >
              <CardContent className="p-6 text-center">
                <div
                  className={`mb-4 flex justify-center p-4 rounded-full ${achievement.color} group-hover:scale-110 transition-transform duration-300`}
                >
                  {achievement.icon}
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-2">{achievement.title}</h3>
                <p className="text-sm text-muted-foreground text-pretty">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Key Milestones</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {milestones.map((milestone, index) => (
              <div key={index} className="text-center p-4 bg-card rounded-lg border hover:shadow-md transition-shadow">
                <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-full text-white mb-3 mx-auto">
                  {milestone.icon}
                </div>
                <div className="text-lg font-bold text-primary mb-1">{milestone.year}</div>
                <div className="text-sm text-muted-foreground">{milestone.event}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-card to-muted rounded-xl p-8 border shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-card-foreground mb-4">His Vision Lives On</h3>
              <blockquote className="text-lg italic text-primary mb-4 border-l-4 border-primary pl-4">
                "Cultivation of mind should be the ultimate aim of human existence."
              </blockquote>
              <p className="text-muted-foreground mb-4 text-pretty">
                The Ambedkar Token embodies his principles of equality, education, and empowerment. Through blockchain
                technology, we continue his mission of creating a more just and equitable society where everyone has
                equal opportunities to prosper.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Equality</Badge>
                <Badge variant="outline">Education</Badge>
                <Badge variant="outline">Empowerment</Badge>
                <Badge variant="outline">Justice</Badge>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="/placeholder.svg?height=300&width=400"
                alt="Dr. Ambedkar's legacy and constitutional work"
                className="rounded-lg shadow-lg max-w-full h-auto hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
