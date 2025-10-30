import { Globe, Mail, Phone, MapPin, Share2, MessageCircle } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

export function Contact() {
  const contactInfo = [
    {
      icon: Globe,
      label: "Website",
      value: "www.npcglobal.in",
      link: "https://www.npcglobal.in",
    },
    {
      icon: Mail,
      label: "E-mail",
      value: "info@npcglobal.in",
      link: "mailto:info@npcglobal.in",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "9967068314 / 9324200661",
      link: "tel:9967068314",
    },
    {
      icon: Share2,
      label: "Social Media",
      value: "@npcglobal_official",
      link: "#",
    },
  ];

  return (
    <section id="contact" className="relative py-24 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-10 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-block px-4 py-2 mb-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm">
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">Contact Us</h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Let's discuss how we can help your business grow
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          {contactInfo.map((info, index) => (
            <Card 
              key={index} 
              className="group bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <info.icon className="w-7 h-7 text-white" />
                </div>
                <p className="text-sm text-gray-400 mb-2">{info.label}</p>
                <a
                  href={info.link}
                  className="text-white hover:text-amber-400 transition-colors break-words inline-block"
                >
                  {info.value}
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10 shadow-2xl">
            <div className="flex items-start gap-4 justify-center">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <h3 className="text-xl md:text-2xl mb-3">Headquarters</h3>
                <p className="text-gray-300 leading-relaxed">
                  245, Powai Plaza, Hiranandani Gardens,
                  <br />
                  Powai, Mumbai - 76.
                </p>
              </div>
            </div>
          </div>

          {/* WhatsApp Button */}
          <div className="animate-bounce-slow">
            <a
              href="https://wa.me/919967068314"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-2xl hover:shadow-green-500/50 transition-all duration-300 px-8 py-6 text-lg group"
              >
                <MessageCircle className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                Chat with us on WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
