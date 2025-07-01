import { TrendingUp, TrendingDown, Users, Target, Settings, Database } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <p className="text-xl text-gray-600">Driving growth through strategic digital marketing initiatives</p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-200"></div>
          
          <div className="relative flex items-center justify-center mb-12">
            <div className="bg-white border-4 border-brand-blue rounded-full p-6 shadow-lg">
              <div className="text-center">
                <div className="text-sm font-semibold text-brand-blue">Jan 2024 - June 2025</div>
                <div className="text-lg font-bold text-gray-900">Digital Marketing Analyst</div>
                <div className="text-gray-600">DeltaX, Pune</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Key Achievements</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <TrendingUp className="text-brand-green mt-1 h-5 w-5 flex-shrink-0" />
                  <span className="text-gray-700">Achieved 14x ROAS through creative optimization and audience targeting</span>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingDown className="text-brand-blue mt-1 h-5 w-5 flex-shrink-0" />
                  <span className="text-gray-700">Reduced CPL by 20-40% MoM for MG Motors, doubling digital-led conversions</span>
                </li>
                <li className="flex items-start gap-3">
                  <Users className="text-brand-gold mt-1 h-5 w-5 flex-shrink-0" />
                  <span className="text-gray-700">Mentored 3 junior analysts in Meta optimization and campaign structure</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Responsibilities</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Target className="text-brand-blue mt-1 h-5 w-5 flex-shrink-0" />
                  <span className="text-gray-700">Managed 10+ clients on Meta and Google Ads with monthly spends from ₹3L to ₹1.5Cr</span>
                </li>
                <li className="flex items-start gap-3">
                  <Settings className="text-brand-green mt-1 h-5 w-5 flex-shrink-0" />
                  <span className="text-gray-700">Conducted QA for creatives, URLs, tags, and SEO compliance across campaigns</span>
                </li>
                <li className="flex items-start gap-3">
                  <Database className="text-brand-gold mt-1 h-5 w-5 flex-shrink-0" />
                  <span className="text-gray-700">Led CRM onboarding for 100+ MG dealerships to streamline sales data flow</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-sm text-gray-600">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
              </svg>
              B.Tech IT from Sinhgad College of Engineering (2020-2024)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
