import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Cpu, Smartphone, GraduationCap, Building, Zap, Shield, BarChart3, Heart } from 'lucide-react';

const Solutions = () => {
  const mainSolutions = [
    {
      icon: Brain,
      title: 'AI Agents & Automation',
      description: 'Intelligent autonomous systems that learn, adapt, and execute complex tasks with minimal human intervention.',
      features: ['Natural Language Processing', 'Machine Learning Models', 'Predictive Analytics', 'Automated Decision Making'],
      gradient: 'from-primary to-primary-light',
    },
    {
      icon: Cpu,
      title: 'Advanced Robotics',
      description: 'Next-generation robotic platforms designed for industrial, commercial, and educational applications.',
      features: ['Autonomous Navigation', 'Computer Vision', 'Collaborative Robots', 'IoT Integration'],
      gradient: 'from-secondary-brand to-secondary-light',
    },
  ];

  const industrySolutions = [
    {
      icon: Smartphone,
      title: 'Telecommunications AI',
      description: 'Revolutionize network operations with intelligent automation and predictive maintenance.',
      applications: [
        'Network Optimization & Monitoring',
        'Customer Service Automation',
        'Predictive Maintenance Systems',
        'Fraud Detection & Security'
      ],
    },
    {
      icon: GraduationCap,
      title: 'Education Technology',
      description: 'Transform learning experiences with AI-powered educational platforms and robotics.',
      applications: [
        'Personalized Learning Systems',
        'Educational Robotics Platforms',
        'Intelligent Tutoring Systems',
        'Learning Analytics & Assessment'
      ],
    },
    {
      icon: Building,
      title: 'Real Estate Intelligence',
      description: 'Smart property solutions powered by AI for valuation, management, and optimization.',
      applications: [
        'Automated Property Valuation',
        'Smart Building Management',
        'Market Analysis & Forecasting',
        'Property Investment Analytics'
      ],
    },
    {
      icon: Zap,
      title: 'Enterprise Automation',
      description: 'Custom AI solutions for business process automation and operational excellence.',
      applications: [
        'Workflow Automation',
        'Document Processing',
        'Supply Chain Optimization',
        'Quality Assurance Systems'
      ],
    },
  ];

  const capabilities = [
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'AI-powered security solutions that protect against evolving threats and ensure compliance.',
    },
    {
      icon: BarChart3,
      title: 'Business Intelligence',
      description: 'Advanced analytics and reporting systems that turn data into actionable business insights.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary via-primary-light to-secondary-brand text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold font-display mb-6">
              Transformative AI &
              <span className="block text-secondary-brand">Robotics Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Discover how our cutting-edge technology solutions drive innovation, 
              efficiency, and competitive advantage across industries.
            </p>
          </div>
        </div>
      </section>

      {/* Main Solutions */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 text-gradient">
              Core Technology Platforms
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Our flagship AI and robotics platforms provide the foundation for 
              transformational solutions across every industry sector.
            </p>
            
            {/* Human-Centered AI Highlight */}
            <div className="bg-gradient-to-r from-primary/10 via-secondary-brand/10 to-accent-brand/10 rounded-2xl p-8 mb-12 max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-20 h-20 bg-gradient-to-r from-primary to-secondary-brand rounded-2xl flex items-center justify-center">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <div className="text-center md:text-left flex-1">
                  <h3 className="text-2xl font-bold mb-2">Human-Centred AI Solutions</h3>
                  <p className="text-muted-foreground mb-4">
                    AI that puts people first — ethical, transparent, and designed with empathy, 
                    in line with GCC AI Governance and UAE AI Seal programme standards.
                  </p>
                  <Link to="/solutions/human-centred-ai">
                    <Button variant="outline" className="group">
                      Discover Our Approach
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {mainSolutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <div key={index} className="card-elegant group hover:scale-105">
                  <div className={`w-16 h-16 bg-gradient-to-r ${solution.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:animate-glow`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">{solution.title}</h3>
                  <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                    {solution.description}
                  </p>
                  
                  <div className="space-y-2 mb-8">
                    {solution.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="btn-hero group">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 text-gradient">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Specialized AI and robotics applications designed to address the unique 
              challenges and opportunities within specific industry sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industrySolutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <div key={index} className="card-elegant group hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary-brand rounded-xl flex items-center justify-center mb-6 group-hover:animate-glow">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{solution.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {solution.description}
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Key Applications:</h4>
                    {solution.applications.map((app, idx) => (
                      <div key={idx} className="flex items-center text-muted-foreground">
                        <ArrowRight className="w-4 h-4 mr-2 text-primary" />
                        <span>{app}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Capabilities */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
              Enhanced Capabilities
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complementary technologies and services that amplify the impact 
              of our core AI and robotics solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <div key={index} className="card-elegant text-center group hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-r from-accent-brand to-accent-light rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:animate-glow">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{capability.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{capability.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="section-padding bg-gradient-to-r from-primary via-primary-light to-secondary-brand text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
              Our Implementation Process
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              A proven methodology that ensures successful deployment and measurable results 
              for every AI and robotics solution we deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery & Analysis', description: 'Comprehensive assessment of your current systems and requirements' },
              { step: '02', title: 'Solution Design', description: 'Custom AI and robotics architecture tailored to your specific needs' },
              { step: '03', title: 'Development & Testing', description: 'Agile development with continuous testing and validation' },
              { step: '04', title: 'Deployment & Support', description: 'Seamless rollout with ongoing monitoring and optimization' },
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-2xl font-bold">{phase.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">{phase.title}</h3>
                <p className="text-white/80 leading-relaxed">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 text-gradient">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Connect with our AI and robotics experts to explore how our solutions 
            can drive innovation and competitive advantage in your organization.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact">
              <Button className="btn-hero group">
                Schedule Consultation
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/solutions/human-centred-ai">
              <Button className="btn-secondary">
                Human-Centred AI Solutions
              </Button>
            </Link>
            <Link to="/case-studies">
              <Button className="btn-secondary">
                View Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;