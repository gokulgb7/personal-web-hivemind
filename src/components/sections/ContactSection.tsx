
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send, MessageCircle, Briefcase, Code } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "hello@yourname.com",
      description: "Drop me a line anytime"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+1 (555) 123-4567",
      description: "Mon-Fri from 9am to 6pm"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Your City, Country",
      description: "Available for global opportunities"
    }
  ];

  const inquiryTypes = [
    {
      icon: <Code className="w-5 h-5" />,
      title: "Development Projects",
      description: "Web apps, APIs, consulting"
    },
    {
      icon: <Briefcase className="w-5 h-5" />,
      title: "Business Opportunities",
      description: "Partnerships, investments, ventures"
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      title: "General Inquiries",
      description: "Questions, collaborations, advice"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Ready to collaborate on your next project or explore new opportunities? 
              I'd love to hear from you and discuss how we can work together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-white/10 border-white/20 text-white placeholder:text-blue-200"
                        required
                      />
                    </div>
                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-white/10 border-white/20 text-white placeholder:text-blue-200"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Input
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="bg-white/10 border-white/20 text-white placeholder:text-blue-200"
                      required
                    />
                  </div>
                  
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="bg-white/10 border-white/20 text-white placeholder:text-blue-200 resize-none"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 text-lg font-medium"
                  >
                    Send Message
                    <Send className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Info Cards */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg hover:bg-white/10 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-blue-500/20 rounded-lg text-blue-300">
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white">{info.title}</h3>
                          <p className="text-blue-200 font-medium">{info.value}</p>
                          <p className="text-blue-300 text-sm">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Inquiry Types */}
              <Card className="bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-white">What can I help you with?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {inquiryTypes.map((type, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="p-2 bg-blue-500/20 rounded text-blue-300 mt-1">
                        {type.icon}
                      </div>
                      <div>
                        <h4 className="text-white font-medium">{type.title}</h4>
                        <p className="text-blue-200 text-sm">{type.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
