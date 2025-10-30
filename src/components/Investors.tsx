import { useState } from "react";
import { CheckCircle, TrendingUp, Shield, PieChart, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { ConnectForm } from "./ConnectForm";

export function Investors() {
  const [formOpen, setFormOpen] = useState(false);

  const benefits = [
    {
      icon: TrendingUp,
      title: "High-Growth Opportunities",
      description: "Access to vetted investment opportunities with strong growth potential",
    },
    {
      icon: Shield,
      title: "Due Diligence",
      description: "Comprehensive analysis and risk assessment for informed decisions",
    },
    {
      icon: PieChart,
      title: "Portfolio Diversification",
      description: "Opportunities across multiple sectors and business models",
    },
  ];

  const features = [
    "Curated Investment Opportunities",
    "Detailed Business Valuations",
    "Market & Competitive Analysis",
    "Financial Modeling & Projections",
    "Deal Structuring Support",
    "Post-Investment Monitoring",
  ];

  return (
    <>
      <section id="investors" className="py-24 bg-gradient-to-b from-green-50/50 to-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-slide-up">
              <div className="inline-block px-4 py-2 mb-4 bg-green-100 text-green-700 rounded-full text-sm">
                For Investors
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#0f172a] mb-6">
                For Investors
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Discover vetted investment opportunities and maximize your returns
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white hover:-translate-y-2 overflow-hidden"
                >
                  <div className="h-1 w-full bg-gradient-to-r from-green-500 to-green-600"></div>
                  <CardHeader>
                    <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
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
              <h3 className="text-2xl md:text-3xl text-[#0f172a] mb-8">What We Provide</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-10">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform">
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
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 rounded-xl group border-0 px-8 py-6"
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
        category="Investors"
      />
    </>
  );
}
