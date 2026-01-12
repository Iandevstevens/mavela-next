import { Card, CardContent } from "@/components/ui/card"
import { Calendar } from "lucide-react"

const newsItems = [
  {
    title: "Wildlife Conservation",
    excerpt: "Travel with a purpose - Participate in conservation.",
    date: "April 18, 2023",
    image: "/wildlife-conservation-africa-rhino.jpg",
  },
  {
    title: "The Sekane Pride",
    excerpt: "Sekane pride of Lions",
    date: "July 31, 2022",
    image: "/lion-pride-african-safari.jpg",
  },
  {
    title: "The History of Rhino Conservation",
    excerpt: "The History of Rhino Conservation in South Africa",
    date: "Feb 20, 2022",
    image: "/rhino-conservation-south-africa.jpg",
  },
]

export function News() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-primary">Latest News</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-4" />
          <p className="text-lg text-muted-foreground">{"Whats been happening at Mavela"}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <Card
              key={index}
              className="overflow-hidden group hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{item.date}</span>
                </div>
                <h3 className="text-xl font-serif font-bold mb-2 text-primary group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.excerpt}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
