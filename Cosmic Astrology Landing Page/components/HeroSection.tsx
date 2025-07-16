import React from 'react';
import { Button } from './ui/button';
import { Star, Sparkles, Circle } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Cosmic Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Stars */}
        <div className="absolute top-20 left-20 animate-float">
          <Star className="w-6 h-6 text-primary animate-pulse-slow" />
        </div>
        <div className="absolute top-40 right-32 animate-float" style={{ animationDelay: '1s' }}>
          <Sparkles className="w-8 h-8 text-accent animate-pulse-slow" />
        </div>
        <div className="absolute bottom-40 left-40 animate-float" style={{ animationDelay: '2s' }}>
          <Circle className="w-4 h-4 text-secondary animate-pulse-slow" />
        </div>
        <div className="absolute top-60 right-60 animate-float" style={{ animationDelay: '0.5s' }}>
          <Star className="w-5 h-5 text-primary animate-pulse-slow" />
        </div>
        
        {/* Cosmic Orbs */}
        <div className="absolute top-32 right-20 w-20 h-20 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-xl animate-pulse-slow" />
        <div className="absolute bottom-32 left-20 w-32 h-32 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-accent/40 to-secondary/40 rounded-full blur-lg animate-pulse-slow" style={{ animationDelay: '0.8s' }} />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-accent/10" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-md rounded-full px-4 py-2 mb-6 border border-primary/30">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-sm text-foreground">Cosmic Connection Awaits</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Discover Your
            </span>
            <br />
            <span className="text-foreground">Cosmic Connection</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Unlock the mysteries of love and compatibility through the ancient wisdom of astrology. 
            Find your perfect match written in the stars.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-8 py-3 text-lg">
              Find Your Match
            </Button>
            <Button size="lg" variant="outline" className="border-primary/30 text-foreground hover:bg-primary/10 px-8 py-3 text-lg">
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">50K+</div>
              <div className="text-sm text-muted-foreground">Happy Couples</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent mb-1">12</div>
              <div className="text-sm text-muted-foreground">Zodiac Signs</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary mb-1">99%</div>
              <div className="text-sm text-muted-foreground">Accuracy</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}