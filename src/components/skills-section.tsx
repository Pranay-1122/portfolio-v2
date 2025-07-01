import { Target, BarChart3, Code } from "lucide-react";

export default function SkillsSection() {
  const SkillBar = ({ skill, level }: { skill: string; level: number }) => (
    <div className="flex justify-between items-center">
      <span className="text-gray-700">{skill}</span>
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((dot) => (
          <div
            key={dot}
            className={`w-3 h-3 rounded-full ${
              dot <= level ? 'bg-current' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );

  const certifications = [
    { name: "Google Ads Search", icon: "🔍" },
    { name: "Google Analytics", icon: "📊" },
    { name: "Display Ads", icon: "🖥️" },
    { name: "Meta Blueprint", icon: "📘" },
    { name: "Be10x AI Workshop", icon: "🤖" },
    { name: "Advanced Excel", icon: "📋" }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-600">Comprehensive digital marketing and technical capabilities</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Digital Advertising */}
          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-sm">
            <div className="text-3xl text-brand-blue mb-4">
              <Target className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Digital Advertising</h3>
            <div className="space-y-3 text-brand-blue">
              <SkillBar skill="Meta Ads" level={5} />
              <SkillBar skill="Google Ads" level={4} />
              <SkillBar skill="Programmatic Buying" level={4} />
              <SkillBar skill="Remarketing" level={5} />
            </div>
          </div>

          {/* Analytics & Optimization */}
          <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-xl shadow-sm">
            <div className="text-3xl text-brand-green mb-4">
              <BarChart3 className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Analytics & Optimization</h3>
            <div className="space-y-3 text-brand-green">
              <SkillBar skill="GA4" level={5} />
              <SkillBar skill="A/B Testing" level={5} />
              <SkillBar skill="SEO Review" level={4} />
              <SkillBar skill="GTM" level={4} />
            </div>
          </div>

          {/* Technical Implementation */}
          <div className="bg-gradient-to-br from-yellow-50 to-white p-8 rounded-xl shadow-sm">
            <div className="text-3xl text-brand-gold mb-4">
              <Code className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Technical Implementation</h3>
            <div className="space-y-3 text-brand-gold">
              <SkillBar skill="CMS (WordPress, Sitecore)" level={4} />
              <SkillBar skill="HTML/CSS" level={4} />
              <SkillBar skill="QA Testing" level={5} />
              <SkillBar skill="Sheets Automation" level={5} />
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Certifications</h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white p-4 rounded-lg text-center shadow-sm">
                <div className="text-2xl mb-2">{cert.icon}</div>
                <div className="text-sm font-semibold">{cert.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
