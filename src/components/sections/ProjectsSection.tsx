
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Project Alpha",
      description: "A modern web application built with React and TypeScript, featuring real-time updates and responsive design.",
      image: "🚀",
      tech: ["React", "TypeScript", "Tailwind CSS"],
      github: "#",
      demo: "#"
    },
    {
      title: "Project Beta",
      description: "Full-stack application with authentication, database integration, and API development.",
      image: "⚡",
      tech: ["Node.js", "Express", "PostgreSQL"],
      github: "#",
      demo: "#"
    },
    {
      title: "Project Gamma",
      description: "Mobile-first design system and component library used across multiple applications.",
      image: "🎨",
      tech: ["Design System", "Storybook", "CSS"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Here are some of the projects I've been working on. Each one represents 
              a unique challenge and solution.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1 overflow-hidden">
                <CardContent className="p-0">
                  {/* Project Image/Icon */}
                  <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                    <div className="text-6xl">{project.image}</div>
                  </div>
                  
                  {/* Project Details */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.github} className="flex items-center gap-2">
                          <Github className="w-4 h-4" />
                          Code
                        </a>
                      </Button>
                      <Button size="sm" asChild>
                        <a href={project.demo} className="flex items-center gap-2">
                          <ExternalLink className="w-4 h-4" />
                          Demo
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
