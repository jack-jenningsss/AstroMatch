import React from 'react';
import { Card, CardContent } from './ui/card';
import { Star, Heart } from 'lucide-react';

export function ZodiacCompatibilitySection() {
  const zodiacSigns = [
    { sign: '♈', name: 'Aries', dates: 'Mar 21 - Apr 19', element: 'Fire', color: 'from-red-500 to-orange-500' },
    { sign: '♉', name: 'Taurus', dates: 'Apr 20 - May 20', element: 'Earth', color: 'from-green-500 to-emerald-500' },
    { sign: '♊', name: 'Gemini', dates: 'May 21 - Jun 20', element: 'Air', color: 'from-yellow-500 to-amber-500' },
    { sign: '♋', name: 'Cancer', dates: 'Jun 21 - Jul 22', element: 'Water', color: 'from-blue-500 to-cyan-500' },
    { sign: '♌', name: 'Leo', dates: 'Jul 23 - Aug 22', element: 'Fire', color: 'from-orange-500 to-yellow-500' },
    { sign: '♍', name: 'Virgo', dates: 'Aug 23 - Sep 22', element: 'Earth', color: 'from-green-600 to-lime-500' },
    { sign: '♎', name: 'Libra', dates: 'Sep 23 - Oct 22', element: 'Air', color: 'from-pink-500 to-rose-500' },
    { sign: '♏', name: 'Scorpio', dates: 'Oct 23 - Nov 21', element: 'Water', color: 'from-red-600 to-purple-600' },
    { sign: '♐', name: 'Sagittarius', dates: 'Nov 22 - Dec 21', element: 'Fire', color: 'from-purple-500 to-indigo-500' },
    { sign: '♑', name: 'Capricorn', dates: 'Dec 22 - Jan 19', element: 'Earth', color: 'from-gray-600 to-slate-600' },
    { sign: '♒', name: 'Aquarius', dates: 'Jan 20 - Feb 18', element: 'Air', color: 'from-blue-400 to-cyan-400' },
    { sign: '♓', name: 'Pisces', dates: 'Feb 19 - Mar 20', element: 'Water', color: 'from-teal-500 to-cyan-500' }
  ];

  return (
    <section className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-32 left-16 animate-float">
          <Star className="w-5 h-5 text-primary animate-pulse-slow" />
        </div>
        <div className="absolute bottom-32 right-16 animate-float" style={{ animationDelay: '1s' }}>
          <Heart className="w-6 h-6 text-accent animate-pulse-slow" />
        </div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-xl animate-pulse-slow" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-md rounded-full px-4 py-2 mb-6 border border-primary/30">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-sm text-foreground">Zodiac Signs</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Explore Zodiac
            </span>
            <br />
            <span className="text-foreground">Compatibility</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover how your zodiac sign influences your romantic compatibility and relationship dynamics.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {zodiacSigns.map((zodiac, index) => (
            <Card key={index} className="relative bg-card/50 backdrop-blur-md border-primary/20 hover:border-primary/40 transition-all duration-300 group cursor-pointer">
              <CardContent className="p-6 text-center">
                {/* Zodiac Symbol */}
                <div className="relative mb-4">
                  <div className={`w-16 h-16 mx-auto bg-gradient-to-br ${zodiac.color} rounded-full flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform duration-300`}>
                    {zodiac.sign}
                  </div>
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-primary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Star className="w-3 h-3 text-white" />
                  </div>
                </div>

                {/* Sign Info */}
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  {zodiac.name}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-2">
                  {zodiac.dates}
                </p>

                <div className="text-xs text-accent font-medium">
                  {zodiac.element}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}