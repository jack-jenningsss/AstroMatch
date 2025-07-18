import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./components/ui/select";
import { Card } from "./components/ui/card";
import { Star, Calendar, MapPin, Clock } from "lucide-react";
// import { ImageWithFallback } from "./components/figma/ImageWithFallback";

export default function App() {
  // Generate arrays for dropdowns
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);
  const hours = Array.from({ length: 12 }, (_, i) => i + 1);
  const minutes = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, '0'));

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <header className="bg-slate-800 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Star className="h-8 w-8 text-pink-500 mr-2" />
              <span className="text-xl font-semibold text-white">AstroCompanio</span>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a>
              <a href="/compatibility" className="text-gray-300 hover:text-white transition-colors">Compatibility</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Horoscopes</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Zodiac Signs</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a>
            </nav>
            
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="bg-pink-500 border-pink-500 text-white hover:bg-pink-600">
                Sign Up
              </Button>
              <Button variant="ghost" className="text-gray-300 hover:text-white">
                Login
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl mb-4 text-pink-400">Cosmic Compatibility Test</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how the stars align for you and your potential partner. Enter both birthdates 
            to reveal your astrological compatibility.
          </p>
        </div>

        {/* Compatibility Form */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* First Person */}
            <Card className="bg-slate-800 border-slate-700 p-6">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mr-4">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl text-pink-400">First Person</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm mb-2 text-gray-300">Full Name</label>
                  <Input 
                    placeholder="Enter full name" 
                    className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400"
                  />
                </div>
                
                <div>
                  <label className="block text-sm mb-2 text-gray-300">Date of Birth</label>
                  <div className="grid grid-cols-3 gap-2">
                    <Select>
                      <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                        <SelectValue placeholder="Month" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-700 border-slate-600">
                        {months.map((month, index) => (
                          <SelectItem key={month} value={index.toString()} className="text-white hover:bg-slate-600">
                            {month}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    
                    <Select>
                      <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                        <SelectValue placeholder="Day" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-700 border-slate-600">
                        {days.map(day => (
                          <SelectItem key={day} value={day.toString()} className="text-white hover:bg-slate-600">
                            {day}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    
                    <Select>
                      <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                        <SelectValue placeholder="Year" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-700 border-slate-600">
                        {years.map(year => (
                          <SelectItem key={year} value={year.toString()} className="text-white hover:bg-slate-600">
                            {year}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm mb-2 text-gray-300">Birth Time (Optional)</label>
                  <div className="grid grid-cols-3 gap-2">
                    <Select>
                      <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                        <SelectValue placeholder="Hour" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-700 border-slate-600">
                        {hours.map(hour => (
                          <SelectItem key={hour} value={hour.toString()} className="text-white hover:bg-slate-600">
                            {hour}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    
                    <Select>
                      <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                        <SelectValue placeholder="Minute" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-700 border-slate-600">
                        {minutes.map(minute => (
                          <SelectItem key={minute} value={minute} className="text-white hover:bg-slate-600">
                            {minute}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    
                    <Select>
                      <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                        <SelectValue placeholder="AM" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-700 border-slate-600">
                        <SelectItem value="AM" className="text-white hover:bg-slate-600">AM</SelectItem>
                        <SelectItem value="PM" className="text-white hover:bg-slate-600">PM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm mb-2 text-gray-300">Birth Location (Optional)</label>
                  <Input 
                    placeholder="City, Country" 
                    className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400"
                  />
                </div>
              </div>
            </Card>

            {/* Second Person */}
            <Card className="bg-slate-800 border-slate-700 p-6">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mr-4">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl text-pink-400">Second Person</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm mb-2 text-gray-300">Full Name</label>
                  <Input 
                    placeholder="Enter full name" 
                    className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400"
                  />
                </div>
                
                <div>
                  <label className="block text-sm mb-2 text-gray-300">Date of Birth</label>
                  <div className="grid grid-cols-3 gap-2">
                    <Select>
                      <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                        <SelectValue placeholder="Month" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-700 border-slate-600">
                        {months.map((month, index) => (
                          <SelectItem key={month} value={index.toString()} className="text-white hover:bg-slate-600">
                            {month}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    
                    <Select>
                      <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                        <SelectValue placeholder="Day" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-700 border-slate-600">
                        {days.map(day => (
                          <SelectItem key={day} value={day.toString()} className="text-white hover:bg-slate-600">
                            {day}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    
                    <Select>
                      <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                        <SelectValue placeholder="Year" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-700 border-slate-600">
                        {years.map(year => (
                          <SelectItem key={year} value={year.toString()} className="text-white hover:bg-slate-600">
                            {year}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm mb-2 text-gray-300">Birth Time (Optional)</label>
                  <div className="grid grid-cols-3 gap-2">
                    <Select>
                      <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                        <SelectValue placeholder="Hour" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-700 border-slate-600">
                        {hours.map(hour => (
                          <SelectItem key={hour} value={hour.toString()} className="text-white hover:bg-slate-600">
                            {hour}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    
                    <Select>
                      <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                        <SelectValue placeholder="Minute" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-700 border-slate-600">
                        {minutes.map(minute => (
                          <SelectItem key={minute} value={minute} className="text-white hover:bg-slate-600">
                            {minute}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    
                    <Select>
                      <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                        <SelectValue placeholder="AM" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-700 border-slate-600">
                        <SelectItem value="AM" className="text-white hover:bg-slate-600">AM</SelectItem>
                        <SelectItem value="PM" className="text-white hover:bg-slate-600">PM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm mb-2 text-gray-300">Birth Location (Optional)</label>
                  <Input 
                    placeholder="City, Country" 
                    className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400"
                  />
                </div>
              </div>
            </Card>
          </div>

          {/* Check Compatibility Button */}
          <div className="text-center">
            <Button className="bg-pink-500 hover:bg-pink-600 text-white px-12 py-3 text-lg rounded-full">
              Check Compatibility
            </Button>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <Calendar className="h-12 w-12 text-pink-500 mx-auto mb-4" />
            <h3 className="text-xl mb-2 text-pink-400">Accurate Birthdates</h3>
            <p className="text-gray-300">
              Precise birth information leads to more accurate compatibility readings. 
              The exact date determines your sun sign and other planetary positions.
            </p>
          </div>
          
          <div className="text-center">
            <Clock className="h-12 w-12 text-pink-500 mx-auto mb-4" />
            <h3 className="text-xl mb-2 text-pink-400">Birth Time Matters</h3>
            <p className="text-gray-300">
              Including birth time (optional) allows us to calculate rising signs and moon 
              positions for deeper compatibility insights.
            </p>
          </div>
          
          <div className="text-center">
            <MapPin className="h-12 w-12 text-pink-500 mx-auto mb-4" />
            <h3 className="text-xl mb-2 text-pink-400">Location Enhances Results</h3>
            <p className="text-gray-300">
              Birth location helps determine the exact position of celestial bodies at 
              your time of birth, providing the most accurate reading.
            </p>
          </div>
        </div>

        {/* Why Compatibility Matters Section */}
        <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl p-8 text-slate-900 mb-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl mb-6 text-slate-800">Why Astrological Compatibility Matters</h2>
              <p className="mb-4 text-slate-700">
                Astrological compatibility goes beyond just sun signs. Our advanced algorithm 
                analyzes planetary positions, aspects, houses, and elements to provide a 
                comprehensive compatibility guidance.
              </p>
              <p className="mb-6 text-slate-700">
                Understanding your cosmic compatibility can help you:
              </p>
              <ul className="space-y-2 mb-6 text-slate-700">
                <li>• Identify natural strengths and potential challenges in your relationship</li>
                <li>• Understand communication patterns and emotional responses</li>
                <li>• Discover shared values and life goals</li>
                <li>• Learn how to support each other's growth and development</li>
              </ul>
              <p className="text-slate-700">
                Whether you're exploring a new relationship or seeking to deepen an existing one, our 
                compatibility insights offer valuable guidance.
              </p>
            </div>
            
            <div className="flex justify-center">
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 border-4 border-purple-300 rounded-full"></div>
                <div className="absolute inset-4 border-2 border-pink-300 rounded-full"></div>
                <div className="absolute inset-8 border-2 border-purple-200 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Star className="h-8 w-8 text-purple-500" />
                </div>
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                  <Star className="h-4 w-4 text-pink-500" />
                </div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  <Star className="h-4 w-4 text-purple-400" />
                </div>
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                  <Star className="h-4 w-4 text-pink-400" />
                </div>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <Star className="h-4 w-4 text-purple-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-800 border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Star className="h-6 w-6 text-pink-500 mr-2" />
                <span className="text-lg text-white">AstroCompanio</span>
              </div>
              <p className="text-gray-400 mb-4">
                Cosmic compatibility and astrological insights for your relationships.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center">
                  <span className="text-xs text-gray-400">f</span>
                </div>
                <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center">
                  <span className="text-xs text-gray-400">t</span>
                </div>
                <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center">
                  <span className="text-xs text-gray-400">in</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Compatibility Test</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Zodiac</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Horoscope</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Relationships</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Astrology Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Compatibility Guide</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Relationship Advice</a></li>
                <li><a href="#" className="hover:text-white transition-colors">General Calendar</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white mb-4">Contact &amp; Legal</h4>
              <ul className="space-y-2 text-gray-400 mb-6">
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
              
              <div>
                <p className="text-sm text-gray-400 mb-2">Subscribe to our Cosmic Newsletter</p>
                <div className="flex">
                  <Input 
                    placeholder="Your email address" 
                    className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400 rounded-r-none"
                  />
                  <Button className="bg-pink-500 hover:bg-pink-600 rounded-l-none">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-700 pt-8 mt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2023 AstroCompanio. All rights reserved. The stars align for those who seek their guidance.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}