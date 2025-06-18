
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Palette, Rocket, Users } from 'lucide-react';

const AboutSection = () => {
  const skills = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Development",
      description: "Full-stack development with modern technologies and best practices."
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Design",
      description: "Creating beautiful, user-centered designs that tell your story."
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Performance",
      description: "Optimized solutions that scale and perform under pressure."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "Working together to bring your vision to life."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              I'm passionate about creating digital experiences that make a difference. 
              Here's what I bring to the table.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800">
                Building the Future, One Project at a Time
              </h3>
              <p className="text-gray-600 leading-relaxed">
                With years of experience in development and design, I specialize in creating 
                scalable solutions that grow with your needs. My approach combines technical 
                expertise with creative problem-solving to deliver exceptional results.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Whether you're looking to build a new application, redesign an existing system, 
                or scale your current infrastructure, I'm here to help you achieve your goals 
                with modern, efficient solutions.
              </p>
            </div>

            {/* Profile Image Placeholder */}
            <div className="flex justify-center">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center">
                <div className="text-6xl text-gray-400">👤</div>
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 text-blue-600 flex justify-center">
                    {skill.icon}
                  </div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">
                    {skill.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {skill.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
