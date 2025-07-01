import { Mail, Linkedin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Pranay Dedge</h3>
            <p className="text-gray-400 mb-4">
              Digital Marketing Analyst specializing in performance marketing, 
              campaign optimization, and data-driven growth strategies.
            </p>
            <div className="flex gap-4">
              <a 
                href="mailto:pranaydedge060@gmail.com" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/in/pranay-dedge-74661b206" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="tel:+917517217270" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Phone"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Meta Ads Management</li>
              <li>Google Ads Optimization</li>
              <li>Performance Marketing</li>
              <li>Campaign Analytics</li>
              <li>CRM Integration</li>
              <li>Lead Generation</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Industries</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Automotive</li>
              <li>Luxury & Lifestyle</li>
              <li>Fashion & Apparel</li>
              <li>FMCG</li>
              <li>E-commerce</li>
              <li>Technology</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Pranay Dedge. All rights reserved. | Built for performance, optimized for results.</p>
        </div>
      </div>
    </footer>
  );
}
