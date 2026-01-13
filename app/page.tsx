import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Experiences } from "@/components/experiences";
import { Accommodation } from "@/components/accommodation";
import { Testimonials } from "@/components/testimonials";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Experiences />
      <Accommodation />
      <Testimonials />
      {/* <News /> */}
      <Contact />
      <Footer />
    </main>
    // <main className="min-h-screen bg-background flex items-center justify-center p-4">
    //   <div className="max-w-2xl w-full text-center space-y-6">
    //     <div className="space-y-4">
    //       <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary text-balance">Mavela Game Lodge</h1>
    //       <div className="w-24 h-1 bg-accent mx-auto" />
    //     </div>

    //     <div className="space-y-4 py-8">
    //       <h2 className="font-serif text-2xl md:text-3xl text-foreground text-balance">We are currently experiencing technical difficulties</h2>
    //       <p className="text-lg text-muted-foreground leading-relaxed">We apologize for any inconvenience. Our website is temporarily unavailable.</p>
    //     </div>

    //     <div className="bg-card border border-border rounded-lg p-8 space-y-4">
    //       <p className="text-foreground leading-relaxed">For any information, bookings, or enquiries, please contact us directly:</p>
    //       <a href="mailto:reservations@mavela.co.za" className="inline-block text-xl font-semibold text-accent hover:text-accent/80 transition-colors">
    //         reservations@mavela.co.za
    //       </a>
    //     </div>

    //     <p className="text-sm text-muted-foreground">Thank you for your patience and understanding.</p>
    //   </div>
    // </main>
  );
}
