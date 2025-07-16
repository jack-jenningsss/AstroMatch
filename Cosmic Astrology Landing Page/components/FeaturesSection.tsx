import React from 'react';
import { Card, CardContent } from './ui/card';
import { Users, BarChart3, Heart, Star } from 'lucide-react';

export function FeaturesSection() {
  const features = [
    {
      icon: Users,
      title: "Dual Birth Charts",
      description: "Get detailed birth charts for both partners to understand individual cosmic signatures and personality traits."
    },
    {
      icon: BarChart3,
      title: "Detailed Analysis",
      description: "Our advanced algorithms analyze planetary positions, aspects, and compatibility factors to provide accurate insights."
    },
    {
      icon: Heart,
      title: "Relationship Compatibility",
      description: "Discover your romantic compatibility across love, communication, emotional connection, and long-term potential."
    }
  ];

  return (
    <section className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-2xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-full blur-xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-md rounded-full px-4 py-2 mb-6 border border-primary/30">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-sm text-foreground">How It Works</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              How AstroCompanion
            </span>
            <br />
            <span className="text-foreground">Works</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our sophisticated astrology engine combines ancient wisdom with modern technology to reveal your cosmic compatibility.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="relative bg-card/50 backdrop-blur-md border-primary/20 hover:border-primary/40 transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Star className="w-3 h-3 text-white" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}