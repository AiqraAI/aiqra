import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Signal, Wifi, Users, TrendingUp, Shield } from 'lucide-react';

const Telecommunications = () => {
  const solutions = [
    {
      icon: Signal,
      title: 'Network Optimization',
      description: 'AI-powered network monitoring and optimization to ensure maximum performance and reliability.',
    },
    {
      icon: Users,
      title: 'Customer Experience',
      description: 'Intelligent customer service automation and personalized communication solutions.',
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'Advanced analytics for network maintenance, customer behavior, and demand forecasting.',
    },
    {
      icon: Shield,
      title: 'Security & Fraud Detection',
      description: 'AI-driven security systems to detect and prevent telecommunications fraud in real-time.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary via-primary-light to-secondary-brand text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <Phone className="w-20 h-20 mx-auto mb-6 text-secondary-brand" />
            <h1 className="text-5xl md:text-6xl font-bold font-display mb-6">
              Telecommunications
              <span className="block text-secondary-brand">AI Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
              Transform your telecom operations with cutting-edge AI technology. 
              Enhance network performance, improve customer experience, and drive operational efficiency.
            </p>
            
            <Link to="/contact">
              <Button className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                Get Started
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
              Our Telecom Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive AI solutions designed specifically for telecommunications providers 
              to optimize operations and enhance customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <div key={index} className="card-elegant group hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-light rounded-2xl flex items-center justify-center mb-6 group-hover:animate-glow">
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

      {/* Benefits Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-12 text-gradient">
              Why Choose AIQRA for Telecommunications?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-secondary-brand to-secondary-light rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Wifi className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">99.9% Uptime</h3>
                <p className="text-muted-foreground">Reliable AI solutions ensuring maximum network availability</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-accent-brand to-accent-light rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">40% Cost Reduction</h3>
                <p className="text-muted-foreground">Significant operational cost savings through intelligent automation</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-light rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Enhanced CX</h3>
                <p className="text-muted-foreground">Improved customer satisfaction through personalized experiences</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary via-primary-light to-secondary-brand text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            Ready to Transform Your Telecom Operations?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join leading telecommunications providers who trust AIQRA to power their AI transformation.
          </p>
          
          <Link to="/contact">
            <Button className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
              Schedule Consultation
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Telecommunications;