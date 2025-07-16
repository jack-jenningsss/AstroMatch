import React from 'react';
import { Card, CardContent } from './ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Star, Quote } from 'lucide-react';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Happy User",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b332c18c?w=150&h=150&fit=crop&crop=face",
      content: "AstroCompanion helped me understand my relationship dynamics better. The insights were incredibly accurate and helped strengthen our bond!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Astrology Enthusiast",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: "The detailed compatibility analysis was spot on. I finally understand why my partner and I click so well in certain areas.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Relationship Coach",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: "As a relationship coach, I recommend AstroCompanion to my clients. The cosmic insights provide a unique perspective on compatibility.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 left-20 animate-float">
          <Star className="w-4 h-4 text-accent animate-pulse-slow" />
        </div>
        <div className="absolute bottom-40 right-20 animate-float" style={{ animationDelay: '1.5s' }}>
          <Star className="w-6 h-6 text-primary animate-pulse-slow" />
        </div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-full blur-xl animate-pulse-slow" style={{ animationDelay: '0.8s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-md rounded-full px-4 py-2 mb-6 border border-primary/30">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-sm text-foreground">Testimonials</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Cosmic
            </span>
            <span className="text-foreground"> Testimonials</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover what our users are saying about their cosmic journey with AstroCompanion.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative bg-card/50 backdrop-blur-md border-primary/20 hover:border-primary/40 transition-all duration-300 group">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-primary/50" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}