import Link from "next/link";
import { TestimonialCard } from "./testimonial-card";

const testimonials = [
  {
    name: "ClaireNorthampton",
    rating: 5,
    text: "Incredible safari with excellent location, guiding, accommodation, food and staff. I can’t recommend Mavela Lodge highly enough",
  },
  {
    name: "Michael T.",
    rating: 5,
    text: "The staff were incredibly kind, welcoming, and always available. We felt truly looked after from start to finish. The tents are beautiful, tastefully furnished, and always impeccably clean, the perfect balance between comfort and immersion in nature.",
  },
  {
    name: "Emily R.",
    rating: 5,
    text: "Everything perfect, super helpful staff, super prepared guides for a unique safari experience, lots of different safaris, photographic, walking, night, lodges and beautiful rooms, great food, 5 star Service, we would return immediately, a huge thank you to our guide Jacobs.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-primary">Guest Experiences</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-4" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{"Hear from our guests about their unforgettable safari experiences"}</p>
          <Link href="https://www.tripadvisor.co.za/Hotel_Review-g13394008-d3840632-Reviews-Mavela_Game_Lodge-Manyoni_Private_Game_Reserve_KwaZulu_Natal.html">
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto underline">Read the review on trip advisor</p>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
