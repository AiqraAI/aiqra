import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary via-primary-light to-secondary-brand text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold font-display mb-6">
              Gulf-Born. Woman-Led. Globally Wired.
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              At AIQRA, we don't just build AI — we build the future.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8 text-lg leading-relaxed text-muted-foreground">
              <p>
                Born in the Gulf, led by brilliant women, and backed by world-class talent across AI, robotics, and automation, AIQRA is where cutting-edge technology meets bold ambition. Our platform empowers companies to deploy intelligent AI agents at scale — fast, secure, and tailored to their exact needs.
              </p>
              
              <p>
                From <strong className="text-primary">Velocity</strong> (email automation) to <strong className="text-secondary-brand">PrimeLead</strong> (AI sales lead generator) and <strong className="text-accent-brand">Project Pulse</strong> (the world's first open-source tactile robotics library), we're redefining what's possible with orchestrated agents that think, learn, and act like you and your very best employee.
              </p>
              
              <p>
                We serve telcos, enterprises, educators, and pioneers across the GCC and beyond — with agentic tech built to scale, designed to comply, and ready to impress.
              </p>
              
              <p>
                Backed by visionary founders, GCC partnerships, and a fierce belief in local talent, AIQRA is more than a company — it's a movement.
              </p>
              
              <p className="text-2xl font-bold text-gradient text-center py-8">
                Join us. Build with us. The future is AIQRA.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary via-primary-light to-secondary-brand text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            Ready to Build the Future?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Partner with AIQRA and deploy AI agents that transform your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/solutions">
              <Button className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                Explore Solutions
              </Button>
            </Link>
            <Link to="/contact">
              <Button className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 rounded-xl transition-all duration-300">
                Partner with Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;