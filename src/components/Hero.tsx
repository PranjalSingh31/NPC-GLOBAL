import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import founderImage from "figma:asset/55664405dbf969e5b5a09eb222c6bbb720062de3.png";

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="text-sm text-gray-200">
                Trusted Business Consulting Partner
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6 leading-tight">
              <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">
                Start. Scale. Succeed.
              </span>
            </h1>

            <p className="text-lg md:text-xl mb-8 text-gray-300 leading-relaxed max-w-xl">
              To empower businesses to grow and thrive by connecting entrepreneurs, investors, and brands through strategic partnerships, fundraising, and expansion solutions built on trust, innovation, and results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-white shadow-lg hover:shadow-xl transition-all duration-200 rounded-xl group border-0 text-base px-8 py-6"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                onClick={scrollToServices}
                variant="outline"
                size="lg"
                className="border-2 border-white/30 text-black hover:bg-white/10 backdrop-blur-sm rounded-xl text-base px-8 py-6"
              >
                Our Services
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-white/20">
              <div>
                <p className="text-3xl md:text-4xl text-amber-400 mb-1">
                  200+
                </p>
                <p className="text-sm text-gray-400">
                  Clients Served
                </p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl text-amber-400 mb-1">
                  99%
                </p>
                <p className="text-sm text-gray-400">
                  Success Rate
                </p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl text-amber-400 mb-1">
                  6+
                </p>
                <p className="text-sm text-gray-400">
                  Years Experience
                </p>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/30 to-blue-500/30 rounded-3xl blur-2xl"></div>
            <div className="relative">
              <ImageWithFallback
                src={founderImage}
                alt="Nitish Pandey - Founder & CEO, NPC Global"
                className="rounded-3xl shadow-2xl border-4 border-white/10"
              />

              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-6 max-w-xs hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-500 rounded-xl flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  {/* <div>
                    <p className="text-sm text-[#0f172a]">
                      Award Winning
                    </p>
                    <p className="text-xs text-gray-600">
                      Consulting Firm 2024
                    </p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          className="w-full h-auto"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}