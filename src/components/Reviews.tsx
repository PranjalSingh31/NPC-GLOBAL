import { Card, CardContent } from "./ui/card";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Star, Quote, PenSquare } from "lucide-react";
import { Button } from "./ui/button";
import { User } from "../App";

interface ReviewsProps {
  user: User | null;
}

export function Reviews({ user }: ReviewsProps) {
  const reviews = [
    {
      name: "Rajesh Kumar",
      company: "Tech Solutions Pvt Ltd",
      role: "CEO",
      rating: 5,
      review: "NPC Global transformed our business strategy. Their expertise in franchise expansion helped us open 15 new locations across India. Highly professional and results-driven team.",
    },
    {
      name: "Priya Sharma",
      company: "Retail Chain India",
      role: "Managing Director",
      rating: 5,
      review: "Outstanding service! The fund-raising support we received from NPC Global was exceptional. They connected us with the right investors and helped us secure the capital we needed.",
    },
    {
      name: "Amit Patel",
      company: "Global Foods Ltd",
      role: "Founder",
      rating: 5,
      review: "The M&A advisory services from NPC Global were top-notch. They guided us through every step of the acquisition process. Their attention to detail and market knowledge is impressive.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 6000); // Change review every 6 seconds

    return () => clearInterval(timer);
  }, [reviews.length]);

  return (
    <section id="reviews" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-block px-4 py-2 mb-4 bg-amber-100 text-amber-700 rounded-full text-sm">
            Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#0f172a] mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Trusted by leading businesses across industries
          </p>
          
          {/* Write a Review Button - Only for logged-in users */}
          {user && (
            <div className="mt-6">
              <Button
                className="bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-white shadow-lg hover:shadow-xl transition-all duration-200 rounded-xl px-6 py-3 border-0"
              >
                <PenSquare className="w-4 h-4 mr-2" />
                Write a Review
              </Button>
            </div>
          )}
        </div>

        <div className="max-w-4xl mx-auto h-[400px] relative mb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Card className="bg-white shadow-2xl border-0 h-full flex flex-col justify-center rounded-3xl overflow-hidden">
                {/* Gradient top bar */}
                <div className="h-1 w-full bg-gradient-to-r from-amber-400 to-amber-500"></div>
                
                <CardContent className="p-8 md:p-12 relative">
                  {/* Quote icon background */}
                  <div className="absolute top-8 right-8 opacity-5">
                    <Quote className="w-32 h-32 text-amber-500" />
                  </div>

                  <div className="relative z-10">
                    <div className="flex justify-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-500 rounded-2xl flex items-center justify-center shadow-lg">
                        <Quote className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    
                    <div className="flex justify-center gap-1 mb-6">
                      {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
                      ))}
                    </div>

                    <p className="text-lg md:text-xl text-gray-700 text-center mb-8 leading-relaxed">
                      "{reviews[currentIndex].review}"
                    </p>

                    <div className="text-center pt-6 border-t border-gray-200">
                      <h4 className="text-[#0f172a] text-lg mb-1">
                        {reviews[currentIndex].name}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {reviews[currentIndex].role}, {reviews[currentIndex].company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation dots */}
          <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex gap-3">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? "bg-gradient-to-r from-amber-400 to-amber-500 w-12 shadow-md" 
                    : "bg-gray-300 w-2.5 hover:bg-gray-400"
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
