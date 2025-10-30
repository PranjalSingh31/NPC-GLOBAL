import { Lightbulb, MapPin, DollarSign, Briefcase, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function Services() {
  const services = [
    {
      icon: Lightbulb,
      title: "Strategy Consulting",
      description:
        "We help businesses develop comprehensive strategies that align with their goals and drive sustainable growth in competitive markets.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: MapPin,
      title: "Franchise Expansion",
      description:
        "Expert guidance in franchise development, expansion strategies, and operational excellence to scale your business nationwide.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: DollarSign,
      title: "Fund-Raising",
      description:
        "Connect with the right investors and secure funding through our extensive network of HNI investors and financial institutions.",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Briefcase,
      title: "Merger & Acquisitions (M&A)",
      description:
        "End-to-end M&A advisory services including valuation, negotiation, due diligence, and deal structuring for optimal outcomes.",
      color: "from-amber-500 to-amber-600",
    },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-block px-4 py-2 mb-4 bg-amber-100 text-amber-700 rounded-full text-sm">
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#0f172a] mb-6">
            What We Do
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive consulting services tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white hover:-translate-y-2 overflow-hidden relative"
            >
              {/* Gradient top bar */}
              <div className={`h-1 w-full bg-gradient-to-r ${service.color}`}></div>
              
              <CardHeader className="pb-4">
                <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-[#0f172a] text-xl">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>
                {/* <button className="text-sm text-gray-500 group-hover:text-amber-600 flex items-center gap-2 transition-colors">
                  Learn more
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button> */}
              </CardContent>

              {/* Hover effect background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50/0 to-gray-100/0 group-hover:from-gray-50/50 group-hover:to-gray-100/50 -z-10 transition-all duration-300"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
