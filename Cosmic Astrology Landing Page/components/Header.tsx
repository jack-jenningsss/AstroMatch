import React from 'react';
import { Button } from './ui/button';
import { Star, Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="relative z-50 w-full">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="relative">
              <Star className="w-8 h-8 text-primary animate-pulse-slow" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              AstroCompanion
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#compatibility" className="text-foreground hover:text-primary transition-colors">
              Compatibility
            </a>
            <a href="#horoscope" className="text-foreground hover:text-primary transition-colors">
              Horoscope
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#blog" className="text-foreground hover:text-primary transition-colors">
              Blog
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-card/95 backdrop-blur-md border-t border-border">
            <nav className="flex flex-col gap-4 p-4">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">
                Home
              </a>
              <a href="#compatibility" className="text-foreground hover:text-primary transition-colors">
                Compatibility
              </a>
              <a href="#horoscope" className="text-foreground hover:text-primary transition-colors">
                Horoscope
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#blog" className="text-foreground hover:text-primary transition-colors">
                Blog
              </a>
              <Button className="bg-gradient-to-r from-primary to-accent text-white mt-4">
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}