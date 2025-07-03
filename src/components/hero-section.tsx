import { Button } from "@/components/ui/button";
import { Rocket, TrendingUp } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="pt-24 pb-12 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div className="mb-12 lg:mb-0">
            <div className="text-sm font-semibold text-brand-blue uppercase tracking-wide mb-4">
              Digital Marketing Analyst
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              driving growth Through Data-Driven Marketing
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Experienced Digital Marketing Analyst specializing in Meta & Google Ads optimization. 
              Managed 10+ clients with monthly spends up to ₹1.5Cr, delivering measurable growth through strategic campaigns.
            </p>
            
            {/* Key Metrics */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-blue">14x</div>
                <div className="text-sm text-gray-600">ROAS Achieved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-green">40%</div>
                <div className="text-sm text-gray-600">CPL Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-gold">10+</div>
                <div className="text-sm text-gray-600">Active Clients</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-brand-blue text-white hover:bg-brand-blue/90 px-8 py-4 text-base font-semibold transition-all transform hover:scale-105"
              >
                <Rocket className="mr-2 h-4 w-4" />
                Start Your Growth Journey
              </Button>
              <Button 
                variant="outline" 
                onClick={() => scrollToSection('portfolio')}
                className="border-2 border-gray-300 text-gray-700 hover:border-brand-blue hover:text-brand-blue px-8 py-4 text-base font-semibold transition-colors"
              >
                <TrendingUp className="mr-2 h-4 w-4" />
                View Success Stories
              </Button>
            </div>
          </div>
          
          <div className="relative flex justify-center lg:justify-end">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-brand-blue to-brand-green rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">PD</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Ready to Partner</h3>
                <p className="text-gray-600 mb-4">Let's transform your marketing performance together</p>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-3 h-3 bg-brand-green rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-gray-700">Available for Projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
