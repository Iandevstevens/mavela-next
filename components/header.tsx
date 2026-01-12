"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="text-xl font-serif font-bold text-primary">Mavela Game Lodge</div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#accommodation" className="text-sm hover:text-primary transition-colors">
            Accommodation
          </a>
          <a href="#experiences" className="text-sm hover:text-primary transition-colors">
            Experiences
          </a>
          {/* <a href="#gallery" className="text-sm hover:text-primary transition-colors">
            Gallery
          </a> */}
          <a href="#testimonials" className="text-sm hover:text-primary transition-colors">
            Testimonials
          </a>
          <a href="#contact" className="text-sm hover:text-primary transition-colors">
            Contact
          </a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="default" size="sm">
            <Link href="https://book.nightsbridge.com/16200">Check Availability</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="flex flex-col gap-4 p-4">
            <a href="#accommodation" className="text-sm hover:text-primary transition-colors">
              Accommodation
            </a>
            <a href="#experiences" className="text-sm hover:text-primary transition-colors">
              Experiences
            </a>
            {/* <a href="#gallery" className="text-sm hover:text-primary transition-colors">
              Gallery
            </a> */}
            <a href="#testimonials" className="text-sm hover:text-primary transition-colors">
              Testimonials
            </a>
            <a href="#contact" className="text-sm hover:text-primary transition-colors">
              Contact
            </a>
            <Button variant="default" size="sm" className="w-full mt-2">
              <Link href="https://book.nightsbridge.com/16200">Check Availability</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
