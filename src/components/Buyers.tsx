import { useState } from "react";
import { CheckCircle, Search, Scale, Handshake, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { ConnectForm } from "./ConnectForm";

export function Buyers() {
  const [formOpen, setFormOpen] = useState(false);

  const benefits = [
    {
      icon: Search,
      title: "Business Discovery",
      description: "Access to exclusive acquisition opportunities across sectors",
    },
    {
      icon: Scale,
      title: "Valuation Expertise",
      description: "Fair market valuations and comprehensive due diligence",
    },
    {
      icon: Handshake,
      title: "Deal Facilitation",
      description: "End-to-end support from negotiation to closing",
    },
  ];

  const features = [
    "Curated Business Listings",
    "Detailed Business Evaluations",
    "Financial & Legal Due Diligence",
    "Negotiation Support",
    "Deal Structuring Advisory",
    "Post-Acquisition Integration",
  ];

  return (
    <>
      <section id="buyers" className="py-24 bg-gradient-to-b from-amber-50/50 to-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-slide-up">
              <div className="inline-block px-4 py-2 mb-4 bg-amber-100 text-amber-700 rounded-full text-sm">
                For Buyers
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#0f172a] mb-6">
                For Buyers
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Find and acquire the right business for your portfolio
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white hover:-translate-y-2 overflow-hidden"
                >
                  <div className="h-1 w-full bg-gradient-to-r from-amber-500 to-amber-600"></div>
                  <CardHeader>
                    <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <benefit.icon className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle className="text-[#0f172a] text-xl">
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100">
              <h3 className="text-2xl md:text-3xl text-[#0f172a] mb-8">What We Offer</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-10">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="text-center pt-6 border-t border-gray-200">
                <Button
                  onClick={() => setFormOpen(true)}
                  size="lg"
                  className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 rounded-xl group border-0 px-8 py-6"
                >
                  Connect With Us
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ConnectForm
        isOpen={formOpen}
        onClose={() => setFormOpen(false)}
        category="Buyers"
      />
    </>
  );
}
