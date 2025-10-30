import { Building2, TrendingUp, Landmark, Users } from "lucide-react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

export function AudienceSelector() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const audiences = [
    {
      icon: Building2,
      title: "Business and Franchise",
      id: "business-franchise",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: TrendingUp,
      title: "Investors",
      id: "investors",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: Landmark,
      title: "Lenders",
      id: "lenders",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: Users,
      title: "Buyers",
      id: "buyers",
      color: "from-amber-500 to-amber-600",
      bgColor: "bg-amber-50",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % audiences.length);
    }, 4000); // Change card every 4 seconds

    return () => clearInterval(timer);
  }, [audiences.length]);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-block px-4 py-2 mb-4 bg-amber-100 text-amber-700 rounded-full text-sm">
            Get Started
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#0f172a] mb-6">
            Who Are You?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Select your category to discover tailored solutions
          </p>
        </div>

        <div className="max-w-md mx-auto h-[240px] relative mb-16">
          <AnimatePresence mode="wait">
            {(() => {
              const CurrentIcon = audiences[currentIndex].icon;
              const current = audiences[currentIndex];
              return (
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.9 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <Button
                    onClick={() => scrollToSection(current.id)}
                    variant="outline"
                    className={`h-auto p-10 flex flex-col items-center gap-6 hover:shadow-2xl border-2 transition-all duration-300 group w-full max-w-sm shadow-lg rounded-3xl ${current.bgColor} hover:border-transparent overflow-hidden relative`}
                  >
                    {/* Gradient overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${current.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    
                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center gap-6">
                      <div className={`w-20 h-20 bg-gradient-to-br ${current.color} rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                        <CurrentIcon className="w-10 h-10 text-white" />
                      </div>
                      <span className="text-center text-xl text-[#0f172a] group-hover:text-white transition-colors duration-300">
                        {current.title}
                      </span>
                    </div>
                  </Button>
                </motion.div>
              );
            })()}
          </AnimatePresence>

          {/* Navigation dots */}
          <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex gap-3">
            {audiences.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? "bg-gradient-to-r from-amber-400 to-amber-500 w-12 shadow-md" 
                    : "bg-gray-300 w-2.5 hover:bg-gray-400"
                }`}
                aria-label={`Go to ${audiences[index].title}`}
              />
            ))}
          </div>
        </div>

        {/* Quick access grid for desktop */}
        <div className="hidden md:grid grid-cols-4 gap-6 max-w-5xl mx-auto mt-20">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            return (
              <button
                key={index}
                onClick={() => scrollToSection(audience.id)}
                className={`p-6 rounded-2xl border-2 border-gray-200 hover:border-transparent transition-all duration-300 group ${audience.bgColor} hover:shadow-xl`}
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${audience.color} rounded-xl flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform shadow-md`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm text-[#0f172a] text-center">{audience.title}</p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
