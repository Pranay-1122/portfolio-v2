import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      content: "Pranay's strategic approach to our Meta campaigns resulted in a 40% reduction in cost per lead while significantly increasing our conversion quality. His attention to detail in QA and optimization is exceptional.",
      author: "Sarah Johnson",
      position: "Marketing Director, MG Motors"
    },
    {
      content: "The signal-based campaigns Pranay developed for our products were innovative and highly effective. The 23% CTR improvement exceeded our expectations and demonstrated true creative thinking.",
      author: "Michael Chen",
      position: "Brand Manager, Glucon-D"
    },
    {
      content: "Working with Pranay has been a game-changer for our digital presence. His expertise in campaign optimization and CRM integration helped us achieve remarkable growth in our online sales.",
      author: "Priya Sharma",
      position: "E-commerce Head, Campus Sutra"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
          <p className="text-xl text-gray-600">What clients say about working with me</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-4 w-4 text-brand-gold fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.position}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
