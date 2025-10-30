import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Founder() {
  return (
    <section id="founder" className="py-20 bg-gradient-to-br from-[#1a1a2e] to-[#2d2d44] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-block px-4 py-2 bg-yellow-500 text-[#1a1a2e] rounded-full mb-6">
                Founder & CEO
              </div>
              <h2 className="text-4xl md:text-5xl mb-6">Nitish Pandey</h2>
              <p className="text-xl text-gray-300 mb-6">
                Leading NPC Global with a vision to transform businesses through
                strategic consulting and measurable outcomes.
              </p>
              <p className="text-gray-300 mb-4">
                With extensive experience in strategy, M&A, and franchise
                development, Nitish has built NPC Global into a trusted partner
                for businesses seeking sustainable growth and expansion.
              </p>
              <p className="text-gray-300">
                His hands-on approach and commitment to delivering results, not
                just advice, has helped numerous organizations achieve their
                business objectives and scale successfully.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-yellow-500 rounded-lg transform rotate-3"></div>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1553830591-2f39e38a013c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzc21hbiUyMGZvdW5kZXJ8ZW58MXx8fHwxNzYwODEzMjI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Nitish Pandey - Founder & CEO"
                  className="relative rounded-lg shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}