import React from 'react';
import { Button } from './ui/button';
import { Star, Heart, Users, Sparkles } from 'lucide-react';

export function AstrologyWheelSection() {
  const features = [
    "Detailed birth chart analysis",
    "Planetary aspect interpretations", 
    "Compatibility percentage scores",
    "Personalized relationship insights",
    "Monthly cosmic forecasts"
  ];

  return (
    <section className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-2xl animate-pulse-slow" />
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-full blur-xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-md rounded-full px-4 py-2 mb-6 border border-primary/30">
              <Star className="w-4 h-4 text-primary" />
              <span className="text-sm text-foreground">Cosmic Analysis</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Unlock the Secrets
              </span>
              <br />
              <span className="text-foreground">of Your Relationship</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our advanced astrology engine analyzes the cosmic compatibility between you and your partner, 
              revealing deep insights about your relationship dynamics.
            </p>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white">
              Discover Your Compatibility
            </Button>
          </div>

          {/* Right - Astrology Wheel */}
          <div className="relative flex justify-center">
            <div className="relative w-80 h-80 mx-auto">
              {/* Outer Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-rotate-slow">
                {/* Zodiac Signs */}
                {['♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓'].map((sign, index) => (
                  <div
                    key={index}
                    className="absolute w-8 h-8 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center text-primary border border-primary/30"
                    style={{
                      transform: `rotate(${index * 30}deg) translateY(-150px) rotate(-${index * 30}deg)`,
                      transformOrigin: 'center 160px'
                    }}
                  >
                    {sign}
                  </div>
                ))}
              </div>

              {/* Middle Ring */}
              <div className="absolute inset-4 rounded-full border border-accent/30" style={{ animationDelay: '1s' }}>
                {/* Planets */}
                {[
                  { symbol: '☉', color: 'text-yellow-400', delay: '0s' },
                  { symbol: '☽', color: 'text-blue-400', delay: '0.5s' },
                  { symbol: '♀', color: 'text-pink-400', delay: '1s' },
                  { symbol: '♂', color: 'text-red-400', delay: '1.5s' },
                  { symbol: '♃', color: 'text-purple-400', delay: '2s' },
                  { symbol: '♄', color: 'text-gray-400', delay: '2.5s' }
                ].map((planet, index) => (
                  <div
                    key={index}
                    className={`absolute w-6 h-6 rounded-full flex items-center justify-center ${planet.color} animate-pulse-slow`}
                    style={{
                      transform: `rotate(${index * 60}deg) translateY(-120px) rotate(-${index * 60}deg)`,
                      transformOrigin: 'center 132px',
                      animationDelay: planet.delay
                    }}
                  >
                    {planet.symbol}
                  </div>
                ))}
              </div>

              {/* Inner Circle */}
              <div className="absolute inset-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-md border border-primary/30 flex items-center justify-center">
                <div className="text-center">
                  <Heart className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary">89%</div>
                  <div className="text-sm text-muted-foreground">Compatibility</div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 animate-float">
                <Sparkles className="w-6 h-6 text-accent" />
              </div>
              <div className="absolute -bottom-4 -left-4 animate-float" style={{ animationDelay: '1s' }}>
                <Star className="w-5 h-5 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}