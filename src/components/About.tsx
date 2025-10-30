import { Target, Users, TrendingUp } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-[#1a1a2e] mb-6">About Us</h2>
          <p className="text-xl text-gray-600">
            NPC Global is a premier consulting firm specializing in strategy,
            franchise expansion, fundraising, and mergers & acquisitions. We
            partner with businesses to deliver measurable outcomes and drive
            sustainable growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-[#1a1a2e]" />
            </div>
            <h3 className="text-xl mb-3 text-[#1a1a2e]">Our Mission</h3>
            <p className="text-gray-600">
              We don't only advise, We also Deliver Outcome's - driving real
              results for our clients
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-[#1a1a2e]" />
            </div>
            <h3 className="text-xl mb-3 text-[#1a1a2e]">Our Clients</h3>
            <p className="text-gray-600">
              Trusted by leading brands across fitness, healthcare, hospitality,
              and finance sectors
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-[#1a1a2e]" />
            </div>
            <h3 className="text-xl mb-3 text-[#1a1a2e]">Our Approach</h3>
            <p className="text-gray-600">
              Data-driven strategies combined with hands-on execution to ensure
              measurable success
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
