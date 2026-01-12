import { TestimonialCard } from "./testimonial-card"

const testimonials = [
  {
    name: "Sarah & James",
    rating: 5,
    text: "We had the most amazing time at Mavela for a 2 night stay. The staff, lodge, food, room and Safari were all incredible. Our guide Jason was super knowledgeable and answered all our questions. The food was delicious and they accommodated our dietary needs perfectly. We couldn't recommend Mavela more highly!",
  },
  {
    name: "Michael T.",
    rating: 5,
    text: "We have stayed in far more expensive lodges and our experience at Mavela showed us that you don't need to spend a pile of money to get a sensational African experience. The range of wild animals is right up there with much bigger reserves. Jason was nothing short of fantastic - his knowledge made the drives unforgettable.",
  },
  {
    name: "Emily R.",
    rating: 5,
    text: "Could not want for anything. The staff were attentive and everything was available. Food was plentiful and delicious. Sitelo was the most knowledgeable guide we've ever experienced - amazing with our 5 year old while still being fantastic for all of us. Got up close with Elephants and Lions!",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-primary">Guest Experiences</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-4" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {"Hear from our guests about their unforgettable safari experiences"}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}
