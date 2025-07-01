import { Car, Droplets, Badge } from "lucide-react";

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
          <p className="text-xl text-gray-600">Real results from strategic campaign optimization</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Case Study 1 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
              alt="Marketing campaign dashboard with performance metrics" 
              className="w-full h-48 object-cover"
            />
            <div className="p-8">
              <div className="flex items-center gap-2 text-sm text-brand-blue font-semibold mb-3">
                <Car className="h-4 w-4" />
                MG Motors Lead Generation
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">100% Sales Growth Through CRM Optimization</h3>
              <p className="text-gray-600 mb-6">
                Managed 1500+ monthly campaigns across 250+ dealerships, implementing strategic funnel segmentation 
                and CRM alignment to double digital-led conversions.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-brand-green">100%</div>
                  <div className="text-xs text-gray-500">Sales Growth</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-brand-blue">1500+</div>
                  <div className="text-xs text-gray-500">Monthly Campaigns</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-brand-gold">250+</div>
                  <div className="text-xs text-gray-500">Dealerships</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-brand-blue px-3 py-1 rounded-full text-sm">Lead Generation</span>
                <span className="bg-green-100 text-brand-green px-3 py-1 rounded-full text-sm">CRM Integration</span>
                <span className="bg-yellow-100 text-brand-gold px-3 py-1 rounded-full text-sm">Funnel Optimization</span>
              </div>
            </div>
          </div>

          {/* Case Study 2 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
              alt="Analytics dashboard showing campaign performance data" 
              className="w-full h-48 object-cover"
            />
            <div className="p-8">
              <div className="flex items-center gap-2 text-sm text-brand-green font-semibold mb-3">
                <Droplets className="h-4 w-4" />
                Signal-Based Campaigns
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">23% CTR Lift with Dynamic API Integration</h3>
              <p className="text-gray-600 mb-6">
                Developed innovative signal-based campaigns for Glucon-D and Pond's using real-time weather and 
                pollution APIs across 55+ cities, creating contextually relevant advertising.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-brand-green">23%</div>
                  <div className="text-xs text-gray-500">CTR Improvement</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-brand-blue">55+</div>
                  <div className="text-xs text-gray-500">Cities Covered</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-brand-gold">Real-time</div>
                  <div className="text-xs text-gray-500">API Integration</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-brand-blue px-3 py-1 rounded-full text-sm">API Integration</span>
                <span className="bg-green-100 text-brand-green px-3 py-1 rounded-full text-sm">Dynamic Campaigns</span>
                <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm">Weather Targeting</span>
              </div>
            </div>
          </div>
        </div>

        {/* Client Portfolio Grid */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Client Portfolio Highlights</h3>
          <p className="text-gray-600">Diverse industry experience across automotive, luxury, fashion, and FMCG sectors</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow">
            <div className="text-3xl mb-3">🚗</div>
            <h4 className="font-semibold text-gray-900 mb-2">Automotive</h4>
            <p className="text-sm text-gray-600">MG Motors lead generation and dealership optimization</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow">
            <div className="text-3xl mb-3">⌚</div>
            <h4 className="font-semibold text-gray-900 mb-2">Luxury & Lifestyle</h4>
            <p className="text-sm text-gray-600">Helios Watches, World of Titan brand campaigns</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow">
            <div className="text-3xl mb-3">👕</div>
            <h4 className="font-semibold text-gray-900 mb-2">Fashion & Apparel</h4>
            <p className="text-sm text-gray-600">Campus Sutra, Suta, Rustorange performance marketing</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow">
            <div className="text-3xl mb-3">🥤</div>
            <h4 className="font-semibold text-gray-900 mb-2">Consumer Goods</h4>
            <p className="text-sm text-gray-600">Glucon-D, Pond's signal-based campaigns</p>
          </div>
        </div>
      </div>
    </section>
  );
}
