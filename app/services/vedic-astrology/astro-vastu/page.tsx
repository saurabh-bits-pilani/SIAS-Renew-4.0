export default function AstroVastuPage() {
    return (
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50">
        {/* Hero Section */}
        <section className="relative w-full min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden">
          {/* TODO: Replace with actual hero image from JSON */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-900 to-red-800 z-0" />
          
          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 md:px-0 max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-2xl mb-6 leading-tight">
              Astro Vastu
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 font-medium drop-shadow-lg mb-8 max-w-4xl">
              Cosmic Energy Alignment for Harmonious Living Spaces
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-orange-400 to-red-500 text-white font-bold px-8 py-4 rounded-xl shadow-2xl hover:from-orange-500 hover:to-red-600 transition-all transform hover:scale-105 text-lg">
                �� Book Consultation
              </button>
              <button className="bg-white/20 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-xl border-2 border-white/30 hover:bg-white/30 transition-all">
                📖 Learn More
              </button>
            </div>
          </div>
        </section>
  
        {/* Content Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-orange-800 mb-6">About Astro Vastu</h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                {/* TODO: Replace with actual content from JSON */}
                Astro Vastu combines the principles of Vedic astrology with Vastu Shastra to create harmonious 
                living and working environments. It analyzes your birth chart to determine the best directions, 
                colors, and layouts for your spaces.
              </p>
              
              {/* TODO: Add more sections based on JSON structure */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-orange-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-orange-800 mb-3">Key Benefits</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Harmonious living spaces</li>
                    <li>• Energy flow optimization</li>
                    <li>• Personal cosmic alignment</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-red-800 mb-3">Duration & Price</h3>
                  <p className="text-2xl font-bold text-red-700">₹3,000</p>
                  <p className="text-gray-600">120 minutes session</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }


