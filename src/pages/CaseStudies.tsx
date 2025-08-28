import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Users, Zap, Trophy } from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      title: 'Telecommunications Network Optimization',
      client: 'Major GCC Telecom Provider',
      industry: 'Telecommunications',
      challenge: 'Manual network monitoring led to 40% more downtime and increased operational costs across 500+ cell towers.',
      solution: 'Deployed AI-powered predictive maintenance system with real-time network analysis and automated optimization protocols.',
      results: [
        '65% reduction in network downtime',
        '40% decrease in operational costs',
        '85% faster issue detection and resolution',
        '300% improvement in customer satisfaction scores'
      ],
      metrics: {
        efficiency: '65%',
        cost_savings: '$2.3M',
        roi: '340%'
      },
      gradient: 'from-primary to-secondary-brand',
      icon: TrendingUp
    },
    {
      title: 'Educational Robotics Platform',
      client: 'Omani University Consortium',
      industry: 'Education',
      challenge: 'Traditional STEM education lacked hands-on technology experience, limiting student engagement and career readiness.',
      solution: 'Implemented comprehensive robotics curriculum with AI-powered learning analytics and collaborative robot platforms.',
      results: [
        '90% increase in STEM program enrollment',
        '75% improvement in learning outcomes',
        '50+ students placed in tech internships',
        '95% student satisfaction with robotics programs'
      ],
      metrics: {
        efficiency: '90%',
        cost_savings: '100+',
        roi: '450%'
      },
      gradient: 'from-secondary-brand to-accent-brand',
      icon: Users
    },
    {
      title: 'Smart Real Estate Valuation',
      client: 'Regional Property Development Group',
      industry: 'Real Estate',
      challenge: 'Manual property valuation processes took weeks and lacked accuracy, causing delays in investment decisions.',
      solution: 'Built AI-driven automated valuation model using market data, property analytics, and predictive algorithms.',
      results: [
        '80% faster property valuations',
        '95% valuation accuracy improvement',
        '60% reduction in assessment time',
        '$5M+ in optimized investment decisions'
      ],
      metrics: {
        efficiency: '80%',
        cost_savings: '$5M+',
        roi: '280%'
      },
      gradient: 'from-accent-brand to-primary',
      icon: Zap
    }
  ];

  const testimonials = [
    {
      quote: "AICRA.ai transformed our network operations beyond our expectations. Their AI solution reduced our downtime by 65% and saved us millions in operational costs.",
      author: "Sarah Al-Rashid",
      position: "CTO, Regional Telecommunications",
      company: "Major GCC Provider"
    },
    {
      quote: "The robotics platform revolutionized our STEM programs. Student engagement skyrocketed, and we're seeing unprecedented career placement rates in technology fields.",
      author: "Dr. Ahmed Al-Balushi",
      position: "Dean of Engineering",
      company: "Omani University Consortium"
    },
    {
      quote: "Their real estate AI solution accelerated our decision-making process by 80% while dramatically improving accuracy. It's been a game-changer for our investments.",
      author: "Fatima Al-Zahra",
      position: "Investment Director",
      company: "Regional Property Group"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary via-primary-light to-secondary-brand text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold font-display mb-6">
              Proven Success
              <span className="block text-secondary-brand">Stories</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Discover how AICRA.ai's AI and robotics solutions have transformed businesses 
              across the Middle East, delivering measurable results and competitive advantages.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 text-gradient">
              Transformational Results
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real-world implementations that showcase the power of intelligent automation 
              and the measurable impact of our AI and robotics solutions.
            </p>
          </div>

          <div className="space-y-16">
            {caseStudies.map((study, index) => {
              const Icon = study.icon;
              return (
                <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className={`card-elegant ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className={`w-16 h-16 bg-gradient-to-r ${study.gradient} rounded-2xl flex items-center justify-center mb-6`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="mb-4">
                      <span className="inline-block px-4 py-2 bg-secondary rounded-full text-sm font-medium text-primary mb-4">
                        {study.industry}
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold mb-4">{study.title}</h3>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      <strong>Client:</strong> {study.client}
                    </p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-lg mb-2">Challenge</h4>
                        <p className="text-muted-foreground leading-relaxed">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-lg mb-2">Solution</h4>
                        <p className="text-muted-foreground leading-relaxed">{study.solution}</p>
                      </div>
                    </div>
                  </div>

                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="card-elegant bg-gradient-subtle">
                      <h4 className="font-semibold text-2xl mb-6">Key Results</h4>
                      <div className="space-y-4 mb-8">
                        {study.results.map((result, idx) => (
                          <div key={idx} className="flex items-start">
                            <Trophy className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{result}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary mb-1">
                            {study.metrics.efficiency}
                          </div>
                          <div className="text-sm text-muted-foreground">Efficiency Gain</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-secondary-brand mb-1">
                            {study.metrics.cost_savings}
                          </div>
                          <div className="text-sm text-muted-foreground">Cost Savings</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-accent-brand mb-1">
                            {study.metrics.roi}
                          </div>
                          <div className="text-sm text-muted-foreground">ROI</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 text-gradient">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hear directly from the leaders who have experienced the transformational 
              impact of AICRA.ai's AI and robotics solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card-elegant group hover:scale-105">
                <div className="mb-6">
                  <div className="text-4xl text-primary mb-4">"</div>
                  <p className="text-muted-foreground leading-relaxed italic">
                    {testimonial.quote}
                  </p>
                </div>
                
                <div className="pt-4 border-t border-border">
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                  <div className="text-sm text-primary font-medium">{testimonial.company}</div>
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
            Ready for Your Success Story?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join the organizations already experiencing transformational results with 
            AICRA.ai's cutting-edge AI and robotics solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact">
              <Button className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                Start Your Transformation
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/solutions">
              <Button className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 rounded-xl transition-all duration-300">
                Explore Solutions
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;