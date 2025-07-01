import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-gray-900">Pranay Dedge</h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-brand-blue px-3 py-2 text-sm font-medium transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('experience')}
                className="text-gray-700 hover:text-brand-blue px-3 py-2 text-sm font-medium transition-colors"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="text-gray-700 hover:text-brand-blue px-3 py-2 text-sm font-medium transition-colors"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="text-gray-700 hover:text-brand-blue px-3 py-2 text-sm font-medium transition-colors"
              >
                Skills
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-brand-blue text-white hover:bg-brand-blue/90 transition-colors"
              >
                Get In Touch
              </Button>
            </div>
          </div>
          
          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-brand-blue"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-brand-blue block px-3 py-2 text-base font-medium w-full text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('experience')}
                className="text-gray-700 hover:text-brand-blue block px-3 py-2 text-base font-medium w-full text-left"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="text-gray-700 hover:text-brand-blue block px-3 py-2 text-base font-medium w-full text-left"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="text-gray-700 hover:text-brand-blue block px-3 py-2 text-base font-medium w-full text-left"
              >
                Skills
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-brand-blue text-white hover:bg-brand-blue/90 w-full mt-2"
              >
                Get In Touch
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
