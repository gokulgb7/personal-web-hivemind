
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const ProfilesSection = () => {
  const profiles = [
    {
      title: "Developer",
      description: "Crafting innovative software solutions and building scalable applications with modern technologies.",
      highlights: ["Full-Stack Development", "Cloud Architecture", "AI Integration"],
      color: "from-blue-500 to-cyan-500",
      link: "/developer"
    },
    {
      title: "Stock Market Trader",
      description: "Analyzing market trends and executing strategic trades to maximize returns and minimize risks.",
      highlights: ["Technical Analysis", "Risk Management", "Portfolio Optimization"],
      color: "from-green-500 to-emerald-500",
      link: "/trader"
    },
    {
      title: "Entrepreneur", 
      description: "Building innovative businesses and creating value through strategic vision and execution.",
      highlights: ["Business Strategy", "Innovation Management", "Growth Hacking"],
      color: "from-purple-500 to-pink-500",
      link: "/entrepreneur"
    }
  ];

  return (
    <section id="profiles" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            My Professional Profiles
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover my expertise across different domains. Each profile represents a unique journey of passion, learning, and achievement.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {profiles.map((profile, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${profile.color} flex items-center justify-center`}>
                  <div className="w-8 h-8 bg-white rounded-full"></div>
                </div>
                <CardTitle className="text-2xl font-bold text-gray-800">
                  {profile.title}
                </CardTitle>
                <CardDescription className="text-gray-600 text-base">
                  {profile.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="space-y-3 mb-6">
                  {profile.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${profile.color} mr-3`}></div>
                      {highlight}
                    </div>
                  ))}
                </div>
                
                <Button 
                  className={`w-full bg-gradient-to-r ${profile.color} hover:opacity-90 text-white group-hover:shadow-lg transition-all duration-300`}
                  onClick={() => console.log(`Navigate to ${profile.link}`)}
                >
                  Explore Profile
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfilesSection;
