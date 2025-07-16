import React from 'react';
import { Button } from './ui/button';
import { Star, Heart, Sparkles, ArrowRight } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10" />
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 animate-float">
          <Star className="w-6 h-6 text-primary animate-pulse-slow" />
        </div>
        <div className="absolute top-40 right-32 animate-float" style={{ animationDelay: '1s' }}>
          <Heart className="w-8 h-8 text-accent animate-pulse-slow" />
        </div>
        <div className="absolute bottom-32 left-32 animate-float" style={{ animationDelay: '2s' }}>
          <Sparkles className="w-5 h-5 text-secondary animate-pulse-slow" />
        </div>
        <div className="absolute bottom-40 right-20 animate-float" style={{ animationDelay: '0.5s' }}>
          <Star className="w-4 h-4 text-primary animate-pulse-slow" />
        </div>
        
        {/* Cosmic Orbs */}
        <div className="absolute top-32 right-20 w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-2xl animate-pulse-slow" />
        <div className="absolute bottom-32 left-20 w-40 h-40 bg-gradient-to-br from-secondary/15 to-primary/15 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-md rounded-full px-4 py-2 mb-6 border border-primary/30">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-sm text-foreground">Start Your Journey</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="text-foreground">Ready to Discover Your</span>
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Cosmic Connection?
            </span>
          </h2>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Join thousands of couples who have discovered their perfect cosmic match. 
            Your journey to deeper understanding starts here.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-8 py-3 text-lg group">
              Get Your Cosmic Reading
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary/30 text-foreground hover:bg-primary/10 px-8 py-3 text-lg">
              View Sample Report
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                <Star className="w-4 h-4 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">Free compatibility test</span>
            </div>
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                <Heart className="w-4 h-4 text-accent" />
              </div>
              <span className="text-sm text-muted-foreground">Instant results</span>
            </div>
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-secondary" />
              </div>
              <span className="text-sm text-muted-foreground">100% private &amp; secure</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}