
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, TrendingUp, Code, Briefcase } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      category: "Development",
      icon: <Code className="w-6 h-6" />,
      title: "AI-Powered Analytics Platform",
      description: "Full-stack web application leveraging machine learning for business intelligence and data visualization.",
      technologies: ["React", "Node.js", "Python", "TensorFlow", "AWS"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      links: {
        demo: "#",
        github: "#"
      },
      color: "from-blue-500 to-cyan-500"
    },
    {
      category: "Trading",
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Algorithmic Trading System",
      description: "Automated trading bot with risk management, technical analysis, and real-time market data integration.",
      technologies: ["Python", "Pandas", "NumPy", "Alpha Vantage API", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&h=300&fit=crop",
      links: {
        demo: "#",
        github: "#"
      },
      color: "from-green-500 to-emerald-500"
    },
    {
      category: "Business",
      icon: <Briefcase className="w-6 h-6" />,
      title: "SaaS Startup MVP",
      description: "Complete business solution from concept to launch, including market research, product development, and go-to-market strategy.",
      technologies: ["Business Strategy", "Product Management", "Market Analysis", "Team Leadership"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      links: {
        demo: "#",
        case_study: "#"
      },
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              A showcase of my work across development, trading, and entrepreneurship. 
              Each project represents a unique challenge and learning opportunity.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 group">
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Image */}
                  <div className={`relative overflow-hidden ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-80 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${project.color} text-white`}>
                        {project.icon}
                      </div>
                      <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-3xl font-bold text-gray-800 mb-4">
                      {project.title}
                    </h3>

                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4">
                      {project.links.demo && (
                        <Button className={`bg-gradient-to-r ${project.color} hover:opacity-90 text-white`}>
                          View Project
                          <ExternalLink className="ml-2 w-4 h-4" />
                        </Button>
                      )}
                      {project.links.github && (
                        <Button variant="outline">
                          <Github className="mr-2 w-4 h-4" />
                          Code
                        </Button>
                      )}
                      {project.links.case_study && (
                        <Button variant="outline">
                          Case Study
                          <ExternalLink className="ml-2 w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
