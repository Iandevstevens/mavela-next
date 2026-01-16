"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";
import { sendEmail, sendTokenToBackend } from "@/actions/sendEmail";
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useCallback } from "react";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Plan Your Safari Adventure</h2>
            <div className="w-24 h-1 bg-accent mb-6" />
            <p className="text-lg mb-8 opacity-90 leading-relaxed">{"Contact us today to book your unforgettable luxury safari experience at Mavela Game Lodge."}</p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-white/10 rounded-full p-3">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Email</p>
                  <a href="mailto:reservations@mavela.co.za" className="opacity-90 hover:opacity-100 transition-opacity">
                    reservations@mavela.co.za
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/10 rounded-full p-3">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Phone</p>
                  <p className="opacity-90">Tel: +27 (0)35 940 0996</p>
                  <p className="opacity-90">Mobile/WhatsApp: +27 (0)639371839</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/10 rounded-full p-3">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Location</p>
                  <p className="opacity-90">Manyoni Private Game Reserve</p>
                  <p className="opacity-90">Mkuze, 3965, KwaZulu-Natal</p>
                  <p className="opacity-90">South Africa</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <a href="https://www.facebook.com/mavelagamelodge" className="bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/mavela_game_lodge/" className="bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
          <ContactFormWrapper></ContactFormWrapper>
        </div>
      </div>
    </section>
  );
}

export function ContactFormWrapper() {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "NOT DEFINED"}>
      <ContactForm />
    </GoogleReCaptchaProvider>
  );
}

export function ContactForm() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const handleFormSubmit = useCallback(
    async (event: any) => {
      event.preventDefault();

      if (!executeRecaptcha) {
        console.log("Execute recaptcha not yet available");
        return;
      }

      const token = await executeRecaptcha("submit_form_action_name");
      // Send the token to your backend for verification
      const canSendTokenToBackend = await sendTokenToBackend(token);
      if (canSendTokenToBackend) {
        const formData = new FormData(event.target);
        await sendEmail(formData);
        event.target.reset();
      } else {
        alert("reCAPTCHA verification failed. Please try again.");
      }
    },
    [executeRecaptcha],
  );

  return (
    <Card className="bg-white/10 border-white/20">
      <CardContent className="p-6">
        <h3 className="text-2xl font-serif font-bold mb-6 text-white">Send us a message</h3>
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div>
            <input name="name" type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-accent" />
          </div>
          <div>
            <input name="email" type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-accent" />
          </div>
          <div>
            <textarea name="message" placeholder="Your Message" rows={5} className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-accent resize-none" />
          </div>
          <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
            Send Message
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
