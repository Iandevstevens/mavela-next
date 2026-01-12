import { Card, CardContent } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface ExperienceCardProps {
  icon: LucideIcon
  title: string
  description: string
  image: string
}

export function ExperienceCard({ icon: Icon, title, description, image }: ExperienceCardProps) {
  return (
    <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 text-white">
          <Icon className="w-8 h-8 mb-2" />
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-serif font-bold mb-3 text-primary">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  )
}
