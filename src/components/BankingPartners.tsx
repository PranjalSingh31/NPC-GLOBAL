export function BankingPartners() {
  const partners = [
    {
      name: "SBI",
      logo: "https://www.deccanchronicle.com/h-upload/2024/07/10/1823088-sbi.webp",
    },
    {
      name: "HDFC Bank",
      logo: "https://www.hdfcbank.com/content/api/contentstream-id/723fb80a-2dde-42a3-9793-7ae1be57c87f/190b873d-1269-4b1d-9823-2cfd7f0ee9b3?/Common/Images/2025/HDFC%20Bank%20logos/HDFC_Bank_logo_Regular.jpg",
    },
    {
      name: "Piramal Housing Finance",
      logo: "https://www.livelaw.in/h-upload/2024/07/29/1500x900_552120-piramal.webp",
    },
    {
      name: "Bajaj Finserv",
      logo: "https://i0.wp.com/complainthub.org/wp-content/uploads/2023/05/Bajaj-Finserv-Logo.png?fit=400%2C300&ssl=1",
    },
  ];

  return (
    <section id="partners" className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-block px-4 py-2 mb-4 bg-amber-100 text-amber-700 rounded-full text-sm">
            Our Network
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#0f172a] mb-6">
            Banking Partners
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Strategic partnerships with leading financial institutions
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center min-h-[140px] border-2 border-amber-400/30 hover:border-amber-500 hover:-translate-y-1 overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-50/0 to-amber-100/0 group-hover:from-amber-50/30 group-hover:to-amber-100/30 transition-all duration-300"></div>
              
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-16 object-contain relative z-10 group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
