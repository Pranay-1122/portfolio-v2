export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-12 lg:mb-0">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About Me</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Detail-oriented Digital Marketing Analyst with 1.5+ years of experience executing cross-platform campaigns, 
              QA testing, content loading, and performance optimization. Passionate about driving measurable results 
              through automation, A/B testing, and structured digital implementation.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Previously worked at DeltaX (Jan 2024 - June 2025), where I managed comprehensive digital marketing campaigns for major brands 
              and consistently delivered exceptional ROI through strategic optimization and data-driven decision making.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-2xl font-bold text-brand-blue mb-2">1.5+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-2xl font-bold text-brand-green mb-2">₹1.5Cr</div>
                <div className="text-gray-600">Max Monthly Spend</div>
              </div>
            </div>
          </div>
          
          <div>
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Modern office workspace with analytics" 
              className="rounded-2xl shadow-xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
