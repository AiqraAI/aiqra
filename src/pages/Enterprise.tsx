import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Building, Shield, Cog, Users, Database, Cloud } from 'lucide-react';

const Enterprise = () => {
  const solutions = [
    {
      icon: Database,
      title: 'Data Intelligence',
      description: 'Advanced analytics and AI-powered insights to transform your enterprise data into actionable intelligence.',
    },
    {
      icon: Cog,
      title: 'Process Automation',
      description: 'Intelligent automation solutions that streamline operations and reduce manual workload.',
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with AI-driven threat detection and regulatory compliance management.',
    },
    {
      icon: Cloud,
      title: 'Cloud Integration',
      description: 'Seamless cloud migration and hybrid solutions that scale with your enterprise needs.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary via-primary-light to-secondary-brand text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <Building className="w-20 h-20 mx-auto mb-6 text-secondary-brand" />
            <h1 className="text-5xl md:text-6xl font-bold font-display mb-6">
              Enterprise
              <span className="block text-secondary-brand">AI Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
              Empower your enterprise with scalable AI solutions that drive innovation, 
              optimize operations, and accelerate digital transformation across your organization.
            </p>
            
            <Link to="/contact">
              <Button className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                Transform Your Enterprise
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 text-gradient">
              Enterprise Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive AI solutions designed for large-scale enterprises 
              to drive efficiency, innovation, and competitive advantage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <div key={index} className="card-elegant group hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-light to-secondary-light rounded-2xl flex items-center justify-center mb-6 group-hover:animate-glow">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enterprise Benefits */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-12 text-gradient">
              Why Enterprises Choose AIQRA
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-light rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Enterprise Security</h3>
                <p className="text-muted-foreground">Bank-level security with compliance for global regulations</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-secondary-brand to-secondary-light rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
                <p className="text-muted-foreground">Dedicated enterprise support team available around the clock</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-accent-brand to-accent-light rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Cog className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Custom Solutions</h3>
                <p className="text-muted-foreground">Tailored AI solutions designed for your specific business needs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Preview */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="card-elegant text-center">
              <h2 className="text-3xl font-bold font-display mb-6 text-gradient">
                Enterprise Success Story
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                "AIQRA transformed our operations, reducing costs by 40% while improving efficiency by 60%. 
                Their AI solutions seamlessly integrated with our existing infrastructure."
              </p>
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <p className="font-bold text-lg">Sarah Al-Rashid</p>
                  <p className="text-muted-foreground">CTO, Global Enterprises Ltd.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 text-gradient">
              Implementation Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">1</div>
              <h3 className="text-lg font-bold mb-2">Assessment</h3>
              <p className="text-muted-foreground">Comprehensive analysis of your current systems and needs</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-secondary-brand rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">2</div>
              <h3 className="text-lg font-bold mb-2">Strategy</h3>
              <p className="text-muted-foreground">Custom AI strategy aligned with your business objectives</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-accent-brand rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">3</div>
              <h3 className="text-lg font-bold mb-2">Deployment</h3>
              <p className="text-muted-foreground">Phased implementation with minimal business disruption</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">4</div>
              <h3 className="text-lg font-bold mb-2">Optimization</h3>
              <p className="text-muted-foreground">Continuous monitoring and optimization for peak performance</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary via-primary-light to-secondary-brand text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            Ready to Lead Your Industry?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join forward-thinking enterprises who trust AIQRA to drive their AI transformation and competitive advantage.
          </p>
          
          <Link to="/contact">
            <Button className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
              Schedule Enterprise Demo
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Enterprise;