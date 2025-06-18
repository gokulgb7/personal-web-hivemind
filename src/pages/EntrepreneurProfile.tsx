import React, { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Rocket, Target, Users, Lightbulb, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const EntrepreneurProfile = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const skills = [
    { icon: <Rocket className="w-6 h-6" />, name: "Business Strategy", level: 90 },
    { icon: <Target className="w-6 h-6" />, name: "Market Analysis", level: 85 },
    { icon: <Users className="w-6 h-6" />, name: "Team Leadership", level: 88 },
    { icon: <Lightbulb className="w-6 h-6" />, name: "Innovation Management", level: 82 }
  ];

  const ventures = [
    {
      title: "Tech Startup",
      description: "Founded and scaled a SaaS platform serving 10,000+ users",
      status: "Successful Exit",
      impact: "10K+ Users"
    },
    {
      title: "E-commerce Venture",
      description: "Built an online marketplace connecting local businesses",
      status: "Growing",
      impact: "$2M+ Revenue"
    },
    {
      title: "Consulting Firm",
      description: "Established a digital transformation consultancy",
      status: "Expanding",
      impact: "50+ Clients"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50">
          <div className="container mx-auto px-4">
            <Button 
              variant="outline" 
              onClick={() => navigate('/')}
              className="mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
            
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <Rocket className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Entrepreneur
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Building innovative businesses and creating value through strategic vision and execution. 
                Passionate about transforming ideas into successful ventures that make a positive impact.
              </p>
            </div>
          </div>
        </section>

        {/* Entrepreneurial Skills */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Entrepreneurial Skills</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {skills.map((skill, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="text-purple-600 flex justify-center mb-2">
                      {skill.icon}
                    </div>
                    <CardTitle className="text-lg">{skill.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                      <div 
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600">{skill.level}%</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Ventures Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Business Ventures</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {ventures.map((venture, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle>{venture.title}</CardTitle>
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">
                        {venture.status}
                      </span>
                    </div>
                    <CardDescription>{venture.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600 mb-1">
                        {venture.impact}
                      </div>
                      <div className="text-sm text-gray-600">Impact</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EntrepreneurProfile;
