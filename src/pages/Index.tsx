import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Cpu, Zap, Users, Globe, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-ai-robotics.jpg';

const Index = () => {
  const stats = [
    { number: '50+', label: 'AI Solutions Deployed' },
    { number: '15+', label: 'Industry Partners' },
    { number: '100+', label: 'Interns Trained' },
    { number: '3', label: 'Countries Served' },
  ];

  const features = [
    {
      icon: Brain,
      title: 'Advanced AI Agents',
      description: 'Cutting-edge artificial intelligence systems that learn, adapt, and deliver intelligent automation solutions.',
    },
    {
      icon: Cpu,
      title: 'Robotics Innovation',
      description: 'Next-generation robotics platforms designed for real-world applications across multiple industries.',
    },
    {
      icon: Zap,
      title: 'Rapid Deployment',
      description: 'Fast-track implementation with our proven methodologies and expert technical support teams.',
    },
    {
      icon: Users,
      title: 'Expert Training',
      description: 'Gold-standard internship programs and professional development in AI and robotics technologies.',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'International partnerships and solutions serving clients across the Middle East and beyond.',
    },
    {
      icon: TrendingUp,
      title: 'Proven Results',
      description: 'Measurable outcomes and transformational impact across telecommunications, education, and enterprise.',
    },
  ];

  const industries = [
    {
      name: 'Telecommunications',
      description: 'AI-powered network optimization and customer service automation',
      gradient: 'from-primary to-secondary-brand',
    },
    {
      name: 'Education',
      description: 'Intelligent learning systems and educational robotics platforms',
      gradient: 'from-secondary-brand to-accent-brand',
    },
    {
      name: 'Real Estate',
      description: 'Smart property management and automated valuation systems',
      gradient: 'from-accent-brand to-primary',
    },
    {
      name: 'Enterprise',
      description: 'Custom AI solutions for business process automation and optimization',
      gradient: 'from-primary-light to-secondary-light',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="AICRA.ai - Advanced AI and Robotics Technology"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-primary/60 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container-custom text-center text-white">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold font-display mb-6 leading-tight">
              The Future of
              <span className="block text-gradient bg-gradient-to-r from-secondary-brand to-accent-brand bg-clip-text text-transparent">
                AI & Robotics
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
              AICRA.ai leads the transformation of industries through cutting-edge artificial intelligence 
              and autonomous systems. From Oman to the world, we're building the intelligent future.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up">
              <Link to="/solutions">
                <Button className="btn-hero group">
                  Explore Solutions
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button className="btn-secondary bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                  Partner with Us
                </Button>
              </Link>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-secondary-brand mb-2">
                  {stat.number}
                </div>
                <div className="text-white/80 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 text-gradient">
              Why Choose AICRA.ai
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We combine world-class expertise with innovative technology to deliver 
              transformational AI and robotics solutions that drive real business value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="card-elegant hover:scale-105 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary-brand rounded-xl flex items-center justify-center mb-6 group-hover:animate-glow">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
              Industries We Transform
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From telecommunications to education, we deliver specialized AI and robotics 
              solutions that revolutionize how industries operate and innovate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-2xl p-8 text-white bg-gradient-to-br ${industry.gradient} hover:scale-105 transition-all duration-300 cursor-pointer group`}
              >
                <h3 className="text-2xl font-bold mb-4">{industry.name}</h3>
                <p className="text-white/90 leading-relaxed mb-6">{industry.description}</p>
                <div className="flex items-center text-white/80 group-hover:text-white transition-colors">
                  <span className="font-medium">Learn More</span>
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary via-primary-light to-secondary-brand text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join the AI revolution with AICRA.ai. Let's discuss how our cutting-edge 
            solutions can drive innovation and growth in your organization.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact">
              <Button className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                Start Your Journey
              </Button>
            </Link>
            <Link to="/case-studies">
              <Button className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 rounded-xl transition-all duration-300">
                View Success Stories
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;