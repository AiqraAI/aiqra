import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Brain, Users, TrendingUp } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Careers = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    career_track: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const careerTracks = [
    {
      title: 'Cloud Engineering',
      duration: 'Full-time',
      description: 'Build and maintain scalable cloud infrastructure for AI and robotics applications using cutting-edge technologies.',
      skills: ['AWS/Azure/GCP', 'Kubernetes & Docker', 'Infrastructure as Code', 'DevOps & CI/CD'],
      icon: Code,
      gradient: 'from-primary to-primary-light',
    },
    {
      title: 'Sales & Marketing',
      duration: 'Full-time',
      description: 'Drive business growth through strategic sales and innovative marketing of AI and robotics solutions.',
      skills: ['B2B Sales Strategy', 'Digital Marketing', 'Client Relationship Management', 'Market Analysis'],
      icon: Users,
      gradient: 'from-secondary-brand to-secondary-light',
    },
    {
      title: 'Technical AI & Robotics Engineering', 
      duration: 'Full-time',
      description: 'Develop cutting-edge AI algorithms and robotics systems that power next-generation autonomous solutions.',
      skills: ['Machine Learning & AI', 'Robotics Programming', 'Computer Vision', 'Full-Stack Development'],
      icon: Brain,
      gradient: 'from-accent-brand to-accent-light',
    },
    {
      title: 'Data Analytics / BI / Data Science',
      duration: 'Full-time', 
      description: 'Transform complex data into actionable insights that drive AI innovation and business intelligence.',
      skills: ['Data Analysis & Visualization', 'Statistical Modeling', 'Business Intelligence', 'Big Data Technologies'],
      icon: TrendingUp,
      gradient: 'from-primary-light to-secondary-light',
    },
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.career_track) {
      toast({
        title: "Form Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Application Submitted Successfully!",
        description: "Thank you for your interest in AIQRA careers. We'll be in touch soon.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        career_track: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary via-primary-light to-secondary-brand text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold font-display mb-6">
              Join Our
              <span className="block text-secondary-brand">AI Career Program</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
              Build your future in artificial intelligence and robotics with the GCC's premier 
              career development program, designed for the next generation of tech leaders.
            </p>
            
            <div className="flex justify-center">
              <Button className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                Apply Today
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Career Tracks Section */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 text-gradient">
              Career Tracks
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose your path in AI and robotics with specialized career opportunities designed 
              to match your skills and professional aspirations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {careerTracks.map((track, index) => {
              const Icon = track.icon;
              return (
                <div key={index} className="card-elegant group hover:scale-105">
                  <div className={`w-16 h-16 bg-gradient-to-r ${track.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:animate-glow`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <h3 className="text-2xl font-bold mr-4">{track.title}</h3>
                    <span className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      {track.duration}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {track.description}
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Key Skills:</h4>
                    {track.skills.map((skill, idx) => (
                      <div key={idx} className="flex items-center text-muted-foreground">
                        <ArrowRight className="w-4 h-4 mr-2 text-primary" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary via-primary-light to-secondary-brand text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            Start Your AI Career Journey
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join the GCC's premier AI and robotics career program. Applications for 
            the next cohort are now open with limited availability.
          </p>
          
          <div className="max-w-2xl mx-auto mb-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  required
                  className="px-4 py-3 rounded-xl text-primary bg-white/90 placeholder-primary/70 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                  className="px-4 py-3 rounded-xl text-primary bg-white/90 placeholder-primary/70 focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>
              <select 
                value={formData.career_track}
                onChange={(e) => handleInputChange('career_track', e.target.value)}
                required
                className="w-full px-4 py-3 rounded-xl text-primary bg-white/90 focus:outline-none focus:ring-2 focus:ring-white">
                <option value="">Select Career Track</option>
                <option value="cloud">Cloud Engineering</option>
                <option value="sales">Sales & Marketing</option>
                <option value="technical">Technical AI & Robotics Engineering</option>
                <option value="data">Data Analytics / BI / Data Science</option>
              </select>
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full group">
                {isSubmitting ? 'Submitting...' : 'Apply Today'}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
          
          <Link to="/contact">
            <Button className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 rounded-xl transition-all duration-300">
              Learn More
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Careers;