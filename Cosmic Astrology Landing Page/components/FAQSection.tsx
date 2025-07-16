import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Star } from 'lucide-react';

export function FAQSection() {
  const faqs = [
    {
      question: "How accurate is your compatibility analysis?",
      answer: "Our compatibility analysis uses advanced astrological algorithms and is based on centuries of astrological wisdom. While astrology provides valuable insights, we recommend using it as a guide alongside open communication and mutual understanding in your relationship."
    },
    {
      question: "Do I need to know my exact birth time?",
      answer: "For the most accurate reading, we recommend knowing your exact birth time. However, if you don't know your exact time, you can still get valuable insights using just your birth date and location. The birth time helps us create a more precise natal chart."
    },
    {
      question: "Can I check compatibility with friends?",
      answer: "Absolutely! While our service is optimized for romantic compatibility, you can use it to understand the dynamics between friends, family members, or even business partners. The cosmic insights apply to all types of relationships."
    },
    {
      question: "What makes AstroCompanion different?",
      answer: "AstroCompanion combines traditional astrological wisdom with modern technology. Our unique algorithm analyzes multiple astrological factors including planetary positions, aspects, and compatibility indicators to provide comprehensive relationship insights."
    },
    {
      question: "Is my personal information secure?",
      answer: "Yes, we take your privacy very seriously. All personal information and birth data is encrypted and stored securely. We never share your information with third parties, and you can delete your account and data at any time."
    },
    {
      question: "How often should I check my compatibility?",
      answer: "Your core compatibility doesn't change, but we recommend checking your monthly cosmic forecast to understand how current planetary movements might affect your relationship dynamics. This helps you navigate challenging periods and make the most of harmonious times."
    }
  ];

  return (
    <section className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-32 left-16 animate-float">
          <Star className="w-4 h-4 text-accent animate-pulse-slow" />
        </div>
        <div className="absolute bottom-32 right-16 animate-float" style={{ animationDelay: '1s' }}>
          <Star className="w-6 h-6 text-primary animate-pulse-slow" />
        </div>
        <div className="absolute top-1/2 left-1/4 w-28 h-28 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-md rounded-full px-4 py-2 mb-6 border border-primary/30">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-sm text-foreground">FAQ</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Frequently Asked
            </span>
            <br />
            <span className="text-foreground">Questions</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about cosmic compatibility and our astrology services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-card/50 backdrop-blur-md border-primary/20 rounded-lg px-6">
                <AccordionTrigger className="text-left text-foreground hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}