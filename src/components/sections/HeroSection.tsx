
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Hero Content */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              Welcome to My World
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              I'm a passionate developer creating amazing digital experiences. 
              Let's build something incredible together.
            </p>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg">
              View My Work
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 text-lg">
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a href="#" className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1">
              <Github className="w-6 h-6 text-gray-700" />
            </a>
            <a href="#" className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1">
              <Linkedin className="w-6 h-6 text-gray-700" />
            </a>
            <a href="#" className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1">
              <Mail className="w-6 h-6 text-gray-700" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown className="w-6 h-6 text-gray-400 mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
