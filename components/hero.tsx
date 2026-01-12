import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image src="/elephant.jpg" alt="Safari landscape" fill className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="font-serif text-xl md:text-3xl lg:text-5xl font-bold mb-6 text-balance">Luxury Tented Camp in a Private Big Five Reserve</h1>
        <p className="text-lg md:text-l lg:text-xl mb-8 max-w-3xl mx-auto text-balance opacity-95">Experience a true African safari in this fenced, luxury tented camp overlooking the valley of a world-class private reserve.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="default" className="bg-primary hover:bg-primary/90">
            Enquire Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
            Check Availability
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
