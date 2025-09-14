import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, TrendingUp, Zap, Users, ChartBar, Clock } from 'lucide-react';

const AiSalesLeadGenerator = () => {
  const features = [
    {
      icon: Target,
      title: 'Smart Lead Scoring',
      description: 'AI algorithms analyze prospect behavior and engagement to score leads with unprecedented accuracy.',
    },
    {
      icon: Zap,
      title: 'Instant Lead Generation',
      description: 'Automated lead discovery and qualification that works 24/7 to fill your sales pipeline.',
    },
    {
      icon: ChartBar,
      title: 'Predictive Analytics',
      description: 'Forecast lead conversion probability and optimize your sales strategy with data-driven insights.',
    },
    {
      icon: Users,
      title: 'CRM Integration',
      description: 'Seamlessly integrate with your existing CRM to automatically update lead information and scores.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary via-primary-light to-secondary-brand text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <Target className="w-20 h-20 mx-auto mb-6 text-secondary-brand" />
            <h1 className="text-5xl md:text-6xl font-bold font-display mb-6">
              AI Sales Lead
              <span className="block text-secondary-brand">Generator</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
              Close deals faster with AI that finds, scores, and sends the hottest leads straight to your CRM. 
              Transform your sales process with intelligent lead generation and qualification.
            </p>
            
            <Link to="/contact">
              <Button className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                Boost Sales Now
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 text-gradient">
              PrimeLead Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Advanced AI capabilities designed to revolutionize your sales process 
              and maximize conversion rates with intelligent lead management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="card-elegant group hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-r from-accent-brand to-accent-light rounded-2xl flex items-center justify-center mb-6 group-hover:animate-glow">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-12 text-gradient">
              Proven Results
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-light rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">300% More Leads</h3>
                <p className="text-muted-foreground">Significant increase in qualified lead generation</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-secondary-brand to-secondary-light rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">75% Time Saved</h3>
                <p className="text-muted-foreground">Automated lead qualification saves valuable sales time</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-accent-brand to-accent-light rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">95% Accuracy</h3>
                <p className="text-muted-foreground">Highly accurate lead scoring and qualification</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 text-gradient">
              How PrimeLead Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold mb-2">AI Discovery</h3>
              <p className="text-muted-foreground">Our AI scans multiple data sources to identify potential leads</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-secondary-brand rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold mb-2">Smart Scoring</h3>
              <p className="text-muted-foreground">Advanced algorithms score leads based on conversion probability</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-accent-brand rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold mb-2">CRM Integration</h3>
              <p className="text-muted-foreground">Qualified leads are automatically sent to your CRM system</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary via-primary-light to-secondary-brand text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            Ready to 10X Your Sales?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join successful sales teams who trust PrimeLead to transform their lead generation and close more deals.
          </p>
          
          <Link to="/contact">
            <Button className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
              Get PrimeLead Now
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AiSalesLeadGenerator;