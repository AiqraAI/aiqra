import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Cpu, Zap, Users, Globe, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import heroImage from '@/assets/hero-ai-robotics.jpg';
import AnimatedStats from '@/components/interactive/AnimatedStats';
import FloatingElements from '@/components/interactive/FloatingElements';
import InteractiveFeatureCard from '@/components/interactive/InteractiveFeatureCard';
import ScrollProgressBar from '@/components/interactive/ScrollProgressBar';
import { useParallax } from '@/hooks/useScrollAnimation';
const Index = () => {
  const lottieRef = useRef<any>(null);
  const [robotAnimationData, setRobotAnimationData] = React.useState(null);
  const parallaxOffset = useParallax(0.3);
  useEffect(() => {
    // Load the animation JSON
    fetch('/RobotSaludando.json').then(response => response.json()).then(data => setRobotAnimationData(data)).catch(error => console.error('Error loading animation:', error));
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
    description: 'GCC-born robotics + AI powered by world-class talent.'
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
      <ScrollProgressBar />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="AIQRA.ai - Advanced AI and Robotics Technology" 
            className="w-full h-full object-cover"
            style={{ transform: `translateY(${parallaxOffset}px)` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-primary/60 to-transparent" />
        </div>

        {/* Floating Elements */}
        <FloatingElements />

        {/* Hero Content - Flex layout for desktop positioning */}
        <div className="relative z-10 container-custom text-white flex items-center justify-center min-h-[70vh]">
          <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl mx-auto">
            
            {/* Robot Animation - Left side on desktop, top on mobile */}
            {robotAnimationData && (
              <div className="lg:flex-shrink-0 lg:mr-12 mb-8 lg:mb-0 order-1 lg:order-1 animate-fade-in">
                <Lottie 
                  lottieRef={lottieRef} 
                  animationData={robotAnimationData} 
                  loop={false} 
                  autoplay={false} 
                  className="w-[180px] h-auto max-w-[140px] md:max-w-[180px] lg:max-w-[220px]" 
                />
              </div>
            )}

            {/* Centered Main Content */}
            <div className="flex-1 text-center lg:text-left order-2 lg:order-2">
              <div className="animate-fade-in">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display mb-6 leading-tight hover:scale-105 transition-transform duration-500">
                  AI that Thinks, Talks
                  <span className="block text-gradient bg-gradient-to-r from-secondary-brand to-accent-brand bg-clip-text text-transparent animate-pulse">
                    and Transforms.
                  </span>
                </h1>
                
                <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl lg:max-w-2xl mx-auto lg:mx-0 leading-relaxed text-zinc-50 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
                  AIQRA - We are the AI and robotics powerhouse creating agentic intelligence that thinks and acts. From the Gulf to the world, we lead sovereign technology innovation.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center opacity-0 animate-slide-up" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
                  <Link to="/solutions">
                    <Button className="btn-hero group relative overflow-hidden">
                      <span className="relative z-10">Explore Solutions</span>
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                      <div className="absolute inset-0 bg-white/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button className="btn-secondary bg-white/10 border-white text-white hover:bg-white hover:text-primary group relative overflow-hidden">
                      <span className="relative z-10">Partner with Us</span>
                      <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                      <span className="absolute inset-0 flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Partner with Us
                      </span>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Features Section */}
      <section className="section-padding bg-gradient-subtle relative overflow-hidden">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 text-gradient">Why AIQRA Leads</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              AI innovation creating AI agents that transform industries and empower companies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <InteractiveFeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index}
              />
            ))}
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
            {industries.map((industry, index) => 
              <Link 
                key={index} 
                to="/solutions" 
                className={`relative overflow-hidden rounded-2xl p-8 text-white bg-gradient-to-br ${industry.gradient} hover:scale-105 transition-all duration-500 cursor-pointer group block transform hover:rotate-1`}
              >
                {/* Interactive glow effect */}
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Animated border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-white/20 group-hover:border-white/40 transition-all duration-500" />
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-yellow-100 transition-colors duration-300">
                    {industry.name}
                  </h3>
                  <p className="text-white/90 leading-relaxed mb-6 group-hover:text-white transition-colors duration-300">
                    {industry.description}
                  </p>
                  <div className="flex items-center text-white/80 group-hover:text-white transition-all duration-300">
                    <span className="font-medium">Learn More</span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" />
                  </div>
                </div>
                
                {/* Floating particles on hover */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-white/40 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300" />
                <div className="absolute bottom-6 left-6 w-1 h-1 bg-white/50 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300" style={{ animationDelay: '0.5s' }} />
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary via-primary-light to-secondary-brand text-white relative overflow-hidden">
        {/* Interactive background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent-brand/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="container-custom text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 hover:scale-105 transition-transform duration-300">
            Ready to Shape the Future?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join AIQRA today. Let's create agentic AI solutions that combine 
            Gulf vision with global excellence for your organization's future.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact">
              <Button className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                <span className="relative z-10">Start Your Journey</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary-brand/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
              </Button>
            </Link>
            <Link to="/case-studies">
              <Button className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 rounded-xl transition-all duration-300 group relative overflow-hidden">
                <span className="relative z-10 group-hover:text-primary transition-colors duration-300">View Success Stories</span>
                <div className="absolute inset-0 bg-white transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>;
};
export default Index;