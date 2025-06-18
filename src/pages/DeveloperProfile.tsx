
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Code, Database, Cloud, Smartphone, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DeveloperProfile = () => {
  const navigate = useNavigate();

  const skills = [
    { icon: <Code className="w-6 h-6" />, name: "Full-Stack Development", level: 90 },
    { icon: <Database className="w-6 h-6" />, name: "Database Design", level: 85 },
    { icon: <Cloud className="w-6 h-6" />, name: "Cloud Architecture", level: 80 },
    { icon: <Smartphone className="w-6 h-6" />, name: "Mobile Development", level: 75 }
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Built a scalable e-commerce solution using React, Node.js, and MongoDB",
      tech: ["React", "Node.js", "MongoDB", "Stripe"]
    },
    {
      title: "AI-Powered Dashboard",
      description: "Developed an analytics dashboard with machine learning insights",
      tech: ["React", "Python", "TensorFlow", "PostgreSQL"]
    },
    {
      title: "Mobile Trading App",
      description: "Created a real-time trading application for iOS and Android",
      tech: ["React Native", "WebSocket", "Redux", "Firebase"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
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
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                <Code className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Developer Profile
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Passionate about creating innovative software solutions and building scalable applications 
                with modern technologies. Focused on clean code, user experience, and performance.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {skills.map((skill, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="text-blue-600 flex justify-center mb-2">
                      {skill.icon}
                    </div>
                    <CardTitle className="text-lg">{skill.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-500"
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

        {/* Projects Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {projects.map((project, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
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

export default DeveloperProfile;
