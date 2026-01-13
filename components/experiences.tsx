import { Tent, UtensilsCrossed, MapPin, Bird, Trees, Home } from "lucide-react";
import { ExperienceCard } from "./experience-card";

const experiences = [
  {
    icon: Tent,
    title: "Luxury Safari-Style Tented Camp",
    description: "Seven luxury, en suite safari-style tents each designed for a truly luxurious safari escape with a private deck looking over the surrounding bushveld.",
    image: "/room.jpg",
  },
  {
    icon: UtensilsCrossed,
    title: "All-Inclusive Meals & Drinks",
    description: "Enjoy early morning coffee, full English breakfast, light lunch, and 3-course dinner. All alcoholic drinks and quality wines included in your rate.",
    image: "/food.jpg",
  },
  {
    icon: MapPin,
    title: "Prime Safari Location",
    description: "Located in the heart of the Big Five KwaZulu-Natal Wilderness, overlooking 23,000 hectares of the Manyoni Private Game Reserve.",
    image: "/prime.jpg",
  },
  {
    icon: Trees,
    title: "Big 5 Game Drives",
    description: "Over 70 mammal species including Lion, Leopard, Buffalo, Elephant, Rhino, Cheetah, Hyena, Giraffe, Kudu, Nyala, Wildebeest, and Zebra.",
    image: "/big5.jpg",
  },
  {
    icon: Bird,
    title: "Bird Watching Paradise",
    description: "Over 420 bird species recorded on the property. Tick off your lifer list with exceptional birding opportunities from your deck or on game drives.",
    image: "/bird2.jpg",
  },
  {
    icon: Home,
    title: "The Main Lodge",
    description: "Open-plan, two-story thatched welcome area with lounging spots, help-yourself bar, spacious dining, pool and veranda overlooking a watering hole.",
    image: "/lodge.jpg",
  },
];

export function Experiences() {
  return (
    <section id="experiences" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-primary">Experience a True African Wildlife Safari Escape</h2>
          <div className="w-24 h-1 bg-accent mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
}
