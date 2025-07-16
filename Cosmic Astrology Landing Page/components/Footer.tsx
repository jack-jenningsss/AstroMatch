import React from 'react';
import { Star, Heart, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

export function Footer() {
  return (
    <footer className="relative bg-card/30 backdrop-blur-md border-t border-primary/20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 animate-float">
          <Star className="w-4 h-4 text-primary/30 animate-pulse-slow" />
        </div>
        <div className="absolute top-40 right-32 animate-float" style={{ animationDelay: '1s' }}>
          <Heart className="w-5 h-5 text-accent/30 animate-pulse-slow" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="relative">
                <Star className="w-8 h-8 text-primary animate-pulse-slow" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                AstroCompanion
              </span>
            </div>
            
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              Discover your cosmic connection and unlock the mysteries of love through the ancient wisdom of astrology. 
              Your perfect match is written in the stars.
            </p>

            {/* Newsletter */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Stay Updated</h4>
              <div className="flex gap-2">
                <Input 
                  placeholder="Enter your email" 
                  className="bg-input-background border-primary/30 text-foreground placeholder:text-muted-foreground"
                />
                <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#compatibility" className="hover:text-primary transition-colors">Compatibility</a></li>
              <li><a href="#horoscope" className="hover:text-primary transition-colors">Horoscope</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#blog" className="hover:text-primary transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#privacy" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#help" className="hover:text-primary transition-colors">Help Center</a></li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-primary/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>hello@astrocompanion.com</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" className="border-primary/30 text-foreground hover:bg-primary/10">
                Privacy Policy
              </Button>
              <Button variant="outline" size="sm" className="border-primary/30 text-foreground hover:bg-primary/10">
                Terms of Service
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 pt-8 border-t border-primary/20">
          <p className="text-muted-foreground">
            © 2024 AstroCompanion. All rights reserved. Made with <Heart className="w-4 h-4 text-primary inline mx-1" /> and cosmic energy.
          </p>
        </div>
      </div>
    </footer>
  );
}