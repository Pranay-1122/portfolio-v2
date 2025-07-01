import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Linkedin, Download, Send } from "lucide-react";
// Simple analytics tracking
const trackEvent = (action: string, category?: string, label?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
    });
  }
};

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    budget: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    if (!validateEmail(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Track form submission attempt
      trackEvent('form_submit', 'contact', 'portfolio_contact_form');

      // Store form data in localStorage for potential follow-up
      const contactData = {
        ...formData,
        timestamp: new Date().toISOString()
      };
      localStorage.setItem('latestContact', JSON.stringify(contactData));

      // Simulate form submission (replace with actual Formspree endpoint)
      // In a real implementation, you would replace this with:
      // const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });

      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call

      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for your message. I'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        budget: "",
        message: ""
      });

      // Track successful submission
      trackEvent('form_submit_success', 'contact', 'portfolio_contact_form');

    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive"
      });

      // Track failed submission
      trackEvent('form_submit_error', 'contact', 'portfolio_contact_form');
    } finally {
      setIsSubmitting(false);
    }
  };

  const downloadResume = () => {
    trackEvent('resume_download', 'engagement', 'portfolio_resume');
    
    // For demo purposes, show a message. In a real implementation, 
    // you would host the PDF and provide the actual download link
    toast({
      title: "Resume Download",
      description: "Resume download will be available soon. Please contact me directly for my latest resume.",
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-12 lg:mb-0">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Drive Your Growth?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss how I can help optimize your digital marketing campaigns and achieve 
              exceptional ROI for your business.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center">
                  <Mail className="text-white h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Email</div>
                  <div className="text-gray-600">pranaydedge060@gmail.com</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-green rounded-full flex items-center justify-center">
                  <Phone className="text-white h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Phone</div>
                  <div className="text-gray-600">+91 7517217270</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center">
                  <Linkedin className="text-white h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">LinkedIn</div>
                  <div className="text-gray-600">linkedin.com/in/pranay-dedge-74661b206</div>
                </div>
              </div>
            </div>

            <Button 
              onClick={downloadResume}
              variant="outline" 
              className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className="mt-2"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className="mt-2"
                    required
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="mt-2"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="company">Company</Label>
                <Input
                  id="company"
                  type="text"
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  className="mt-2"
                />
              </div>
              
              <div>
                <Label htmlFor="budget">Monthly Ad Spend</Label>
                <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="<1L">Less than ₹1 Lakh</SelectItem>
                    <SelectItem value="1L-5L">₹1-5 Lakhs</SelectItem>
                    <SelectItem value="5L-15L">₹5-15 Lakhs</SelectItem>
                    <SelectItem value="15L-50L">₹15-50 Lakhs</SelectItem>
                    <SelectItem value=">50L">More than ₹50 Lakhs</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="message">Project Details *</Label>
                <Textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  placeholder="Tell me about your current marketing challenges and goals..."
                  className="mt-2"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-brand-blue text-white hover:bg-brand-blue/90"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
