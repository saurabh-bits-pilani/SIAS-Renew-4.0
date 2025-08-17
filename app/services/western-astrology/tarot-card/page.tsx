export default function TarotCardPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative w-full min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* TODO: Replace with actual hero image from JSON */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-pink-800 z-0" />
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 md:px-0 max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-2xl mb-6 leading-tight">
            Tarot Card Reading
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 font-medium drop-shadow-lg mb-8 max-w-4xl">
            Divine Guidance Through Ancient Card Wisdom
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-gradient-to-r from-purple-400 to-pink-500 text-white font-bold px-8 py-4 rounded-xl shadow-2xl hover:from-purple-500 hover:to-pink-600 transition-all transform hover:scale-105 text-lg">
              🚀 Book Reading
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
            <h2 className="text-2xl font-bold text-purple-800 mb-6">About Tarot Card Reading</h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              {/* TODO: Replace with actual content from JSON */}
              Tarot card reading is an ancient divination tool that provides insights into your past, present, 
              and future. Through intuitive interpretation of the cards, we can uncover hidden truths, 
              understand current situations, and guide you toward your highest potential.
            </p>
            
            {/* TODO: Add more sections based on JSON structure */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-purple-50 p-6 rounded-xl">
                <h3 className="font-semibold text-purple-800 mb-3">Key Benefits</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Intuitive guidance</li>
                  <li>• Life path clarity</li>
                  <li>• Decision support</li>
                </ul>
              </div>
              <div className="bg-pink-50 p-6 rounded-xl">
                <h3 className="font-semibold text-pink-800 mb-3">Duration & Price</h3>
                <p className="text-2xl font-bold text-pink-700">₹1,800</p>
                <p className="text-gray-600">60 minutes session</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}