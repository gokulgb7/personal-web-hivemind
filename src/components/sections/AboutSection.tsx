
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code2, TrendingUp, Lightbulb, Target, Users, Award } from 'lucide-react';

const AboutSection = () => {
  const achievements = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Full-Stack Expertise",
      description: "Proficient in modern web technologies, cloud architecture, and AI integration",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Market Analysis",
      description: "Strategic trading with focus on technical analysis and risk management",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation Mindset",
      description: "Building scalable businesses through strategic vision and execution",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Results-Driven",
      description: "Focused on delivering measurable outcomes and continuous improvement",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaborative Leader",
      description: "Building and leading high-performing teams across different domains",
      color: "from-teal-500 to-cyan-500"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Continuous Learning",
      description: "Always exploring new technologies, market trends, and business strategies",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              I'm a multi-disciplinary professional who believes in the power of combining technology, 
              financial markets, and entrepreneurship to create meaningful impact. My journey spans 
              across different domains, each enriching my perspective and capabilities.
            </p>
          </div>

          {/* Story */}
          <div className="mb-20">
            <Card className="p-8 md:p-12 bg-white/70 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-0">
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="text-xl leading-relaxed mb-6">
                    My passion lies at the intersection of <strong>technology</strong>, <strong>finance</strong>, 
                    and <strong>business innovation</strong>. I believe that the future belongs to those who 
                    can think across disciplines and adapt to rapidly changing landscapes.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Whether I'm architecting scalable software solutions, analyzing market patterns for 
                    profitable trades, or building innovative businesses from the ground up, I approach 
                    each challenge with the same core principles: strategic thinking, continuous learning, 
                    and relentless execution.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${achievement.color} flex items-center justify-center text-white`}>
                    {achievement.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {achievement.description}
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
