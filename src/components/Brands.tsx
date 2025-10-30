import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Brands() {
  const brands = [
    {
      name: "cult.fit",
      logo: "https://images.livemint.com/img/2022/02/14/1600x900/cultfit_1644837586737_1644837586875.jpg",
    },
    {
      name: "Anytime Fitness",
      logo: "https://logos-world.net/wp-content/uploads/2022/01/Anytime-Fitness-New-Logo.png",
    },
    {
      name: "Ahmedabad Juniors",
      logo: "https://ahmedabadjuniors.com/images/logo@2x.webp",
    },
    {
      name: "Dosa Factory",
      logo: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/75/c7/dc/caption.jpg?w=900&h=500&s=1",
    },
    {
      name: "Shiv Sharda Memorial Hospital",
      logo: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrpCTBpvsv0aVqI6_U4fJtJAN3s5gTUX8shnR_F0x15OAGvqFh8MB__etdLCRdoGi-1PdiXDRPIppLKw2FK9ZS5fhRtVlBXr--ko_tvPkCtnS-otFXh5Fa3HLLgYGIcS1ZRDMPPrQ=s1360-w1360-h1020-rw",
    },
    {
      name: "IndoPilates",
      logo: "https://cdn.shopify.com/s/files/1/0600/3720/2125/files/IndoPilates_PNG.png?v=1632672868",
    },
    {
      name: "Empower Fitness Solutions",
      logo: "https://empowerfitness.in/wp-content/uploads/2024/10/SAVE_20240918_171658-400x129.jpg",
    },
    {
      name: "Indiabulls Securities",
      logo: "https://play-lh.googleusercontent.com/_Iu6EOCOmk7HNx_QTjMTv4GSKrEL7Ww9IjGmu9Eiyd8DNqWWpyMsOF9x3f1ILXc2xeo",
    },
    {
      name: "Trimekar",
      logo: "https://static.wixstatic.com/media/9448d0_8f793e1560664cea95355eff6a6f823c~mv2.png/v1/fill/w_263,h_263,al_c/trimekar.png",
    },
    {
      name: "Dr. Patni's",
      logo: "https://images.jdmagicbox.com/v2/comp/indore/s6/0731px731.x731.240704175032.v5s6/catalogue/dr-patni-s-dental-health-centre-new-palasia-indore-dentists-qtp1gs0qp8-250.jpg",
    },
  ];

  return (
    <section id="brands" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-block px-4 py-2 mb-4 bg-amber-100 text-amber-700 rounded-full text-sm">
            Our Portfolio
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#0f172a] mb-6">
            Brands We Work With
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Trusted by leading brands across multiple industries
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center min-h-[140px] border border-gray-100 gap-4 hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-50/0 to-amber-100/0 group-hover:from-amber-50/50 group-hover:to-amber-100/50 transition-all duration-300"></div>
              
              <div className="w-full h-16 relative flex items-center justify-center z-10">
                <ImageWithFallback
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-center text-[#0f172a] text-sm z-10 group-hover:text-amber-700 transition-colors">
                {brand.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
