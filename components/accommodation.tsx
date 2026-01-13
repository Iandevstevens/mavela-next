import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const amenities = ["King or single beds with luxury linen", "Air conditioning and standing fans", "En-suite bathroom with indoor shower", "Private outdoor shower with bushveld views", "Large private deck with comfortable seating", "Birdbath for wildlife viewing", "Eco-friendly Afri-Earth amenities"];

export function Accommodation() {
  return (
    <section id="accommodation" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[600px] rounded-lg overflow-hidden">
            <Image fill src="/fire.jpg" alt="Luxury tent interior" className="w-full h-full object-cover" />
          </div>
          <div>
            <div className="inline-block px-4 py-2 bg-accent/20 rounded-full text-sm font-semibold text-accent mb-4">LUXURY SAFARI-STYLE TENTED CAMP</div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-primary">An Authentic Safari Getaway</h2>
            <div className="w-24 h-1 bg-accent mb-6" />
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{"Our guests can unwind and make themselves at home in one of our seven luxury safari-style tents. Each tent is tastefully decorated with modern amenities while maintaining the authentic safari experience."}</p>
            <div className="space-y-3 mb-8">
              {amenities.map((amenity, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="bg-primary/10 rounded-full p-1 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground">{amenity}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg">
                <a href="#contact" className="text-sm hover:text-primary transition-colors">
                  Enquire Now
                </a>
              </Button>
              <Button size="lg" variant="outline">
                <Link href="https://book.nightsbridge.com/16200">Check Availability</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
