import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Cpu, Zap, Users, Globe, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import heroImage from '@/assets/hero-ai-robotics.jpg';

const Index = () => {
  const lottieRef = useRef<any>(null);
  const [robotAnimationData, setRobotAnimationData] = React.useState(null);

  useEffect(() => {
    // Load the animation JSON
    fetch('/RobotSaludando.json')
      .then(response => response.json())
      .then(data => setRobotAnimationData(data))
      .catch(error => console.error('Error loading animation:', error));
  }, []);

  useEffect(() => {
    const setupAnimation = () => {
      if (lottieRef.current && robotAnimationData) {
        // Play once on load, then set up interval for looping every 12 seconds
        lottieRef.current.play();
        
        const interval = setInterval(() => {
          lottieRef.current?.play();
        }, 12000);

        return () => clearInterval(interval);
      }
    };

    if (robotAnimationData) {
      const timer = setTimeout(setupAnimation, 500);
      return () => clearTimeout(timer);
    }
  }, [robotAnimationData]);
  const stats = [{
    number: '50+',
    label: 'AI Solutions Deployed'
  }, {
    number: '15+',
    label: 'Industry Partners'
  }, {
    number: '100+',
    label: 'Interns Trained'
  }, {
    number: '3',
    label: 'Countries Served'
  }];
  const features = [{
    icon: Brain,
    title: 'AI Innovation',
    description: 'Creating AI agents that transform industries and empower companies.'
  }, {
    icon: Cpu,
    title: 'Sovereign Technology',
    description: 'GCC-born robotics and AI solutions combining cutting-edge technology with the best AI talent.'
  }, {
    icon: Zap,
    title: 'Innovation Leadership',
    description: 'Trusted by public sector entities and enterprises in Europe and the GCC as the go-to AI and robotics partner.'
  }, {
    icon: Users,
    title: 'Women-Led Excellence',
    description: 'Top AI women leading breakthrough solutions with precision and mastery in everything we build.'
  }, {
    icon: Globe,
    title: 'Gulf Empowerment',
    description: 'Creating opportunities for women and youth across the Gulf through world-class AI education and training.'
  }, {
    icon: TrendingUp,
    title: 'Future Vision',
    description: 'Seeing what others don\'t, building what others can\'t — setting the standard for AI in the region.'
  }];
  const industries = [{
    name: 'Telecommunications',
    description: 'AI-powered network optimization and customer service automation',
    gradient: 'from-primary to-secondary-brand'
  }, {
    name: 'Education',
    description: 'Intelligent learning systems and educational robotics platforms',
    gradient: 'from-secondary-brand to-accent-brand'
  }, {
    name: 'AI-Powered Sales Lead Generator',
    description: 'The AI agent that sells smarter, closes faster, and never stops.',
    gradient: 'from-accent-brand to-primary'
  }, {
    name: 'Enterprise',
    description: 'Custom AI solutions for business process automation and optimization.',
    gradient: 'from-primary-light to-secondary-light'
  }];
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img src={heroImage} alt="AIQRA.ai - Advanced AI and Robotics Technology" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-primary/60 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container-custom text-center text-white">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold font-display mb-6 leading-tight">
              AI that Thinks, Talks
              <span className="block text-gradient bg-gradient-to-r from-secondary-brand to-accent-brand bg-clip-text text-transparent">
                and Transforms.
              </span>
            </h1>
            
            {/* Robot Animation */}
            {robotAnimationData && (
              <div className="absolute top-[58px] right-[58px] animate-fade-in z-20">
                <Lottie
                  lottieRef={lottieRef}
                  animationData={robotAnimationData}
                  loop={false}
                  autoplay={false}
                  className="w-[200px] h-auto max-w-[150px] md:max-w-[200px]"
                />
              </div>
            )}
            
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">AIQRA is a women-led, Gulf-born AI and robotics powerhouse creating agentic intelligence that doesn't just think — it acts. From the Gulf to the world, we lead sovereign technology innovation.</p>
            
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

          {/* Remove stats section */}
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 text-gradient">Why AIQRA Leads</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're not just a company — we're a movement. Women-led innovation meets Gulf vision, 
              creating agentic AI solutions that transform industries and empower communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
            const Icon = feature.icon;
            return <div key={index} className="card-elegant hover:scale-105 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary-brand rounded-xl flex items-center justify-center mb-6 group-hover:animate-glow">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>;
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
            {industries.map((industry, index) => <Link key={index} to="/solutions" className={`relative overflow-hidden rounded-2xl p-8 text-white bg-gradient-to-br ${industry.gradient} hover:scale-105 transition-all duration-300 cursor-pointer group block`}>
                <h3 className="text-2xl font-bold mb-4">{industry.name}</h3>
                <p className="text-white/90 leading-relaxed mb-6">{industry.description}</p>
                <div className="flex items-center text-white/80 group-hover:text-white transition-colors">
                  <span className="font-medium">Learn More</span>
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary via-primary-light to-secondary-brand text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            Ready to Shape the Future?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join AIQRA today. Let's create agentic AI solutions that combine 
            Gulf vision with global excellence for your organization's future.
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
    </div>;
};
export default Index;