import founderImage from "figma:asset/55664405dbf969e5b5a09eb222c6bbb720062de3.png";

export function Team() {
  const founder = {
    name: "Nitish Pandey",
    role: "Founder & CEO",
    image: founderImage,
    description:
      "Leading NPC Global with a vision to transform businesses through strategic consulting and measurable outcomes.",
    bio: "With extensive experience in strategy, M&A, and franchise development, Nitish has built NPC Global into a trusted partner for businesses seeking sustainable growth and expansion. His hands-on approach and commitment to delivering results, not just advice, has helped numerous organizations achieve their business objectives and scale successfully.",
  };

  const coFounder = {
    name: "Anchal N. Pandey",
    role: "Co-Founder",
    description:
      "Driving strategic initiatives and operational excellence across all business verticals.",
    bio: "Anchal brings deep expertise in business operations and strategic planning to NPC Global. Her commitment to excellence and attention to detail ensures that every client engagement delivers exceptional value and sustainable results.",
  };

  return (
    <section
      id="founder"
      className="py-20 bg-gradient-to-br from-[#1a1a2e] to-[#2d2d44] text-white"
    >
      <div className="container mx-auto px-4">
        {/* Founder Section */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-block px-4 py-2 bg-yellow-500 text-[#1a1a2e] rounded-full mb-6">
                {founder.role}
              </div>
              <h2 className="text-4xl md:text-5xl mb-6">
                {founder.name}
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                {founder.description}
              </p>
              <p className="text-gray-300">{founder.bio}</p>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-yellow-500 rounded-lg transform rotate-3"></div>
                <img
                  src={founder.image}
                  alt={`${founder.name} - ${founder.role}`}
                  className="relative rounded-lg shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Co-Founder Section */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center md:text-left">
            <div className="inline-block px-4 py-2 bg-yellow-500 text-[#1a1a2e] rounded-full mb-6">
              {coFounder.role}
            </div>
            <h2 className="text-4xl md:text-5xl mb-6">
              {coFounder.name}
            </h2>
            <p className="text-xl text-gray-300 mb-6">
              {coFounder.description}
            </p>
            <p className="text-gray-300">{coFounder.bio}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
