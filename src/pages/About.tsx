import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Award, Users } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Excellence (Itqan)',
      description: 'Precision and mastery in everything we build — setting the highest standards for AI and robotics innovation.',
    },
    {
      icon: Users,
      title: 'Empowerment (Tamkin)',
      description: 'Creating opportunities for women and youth across the Gulf, fostering the next generation of AI leaders.',
    },
    {
      icon: Eye,
      title: 'Vision (Basira)',
      description: 'Seeing what others don\'t, building what others can\'t — pioneering the future of agentic intelligence.',
    },
    {
      icon: Award,
      title: 'Integrity (Amanah)',
      description: 'Trust as the foundation of AI adoption — delivering reliable, ethical, and culturally-rooted solutions.',
    },
  ];

  const milestones = [
    {
      year: '2020',
      title: 'The Vision',
      description: 'AIQRA.ai founded as a women-led movement to create agentic AI that embodies Gulf vision and global excellence.',
    },
    {
      year: '2021',
      title: 'Sovereign Technology',
      description: 'Launched our first agentic AI solutions, combining cultural depth with cutting-edge robotics innovation.',
    },
    {
      year: '2022',
      title: 'Gulf Leadership',
      description: 'Became the trusted AI partner across the GCC, empowering governments and enterprises with future-ready solutions.',
    },
    {
      year: '2023',
      title: 'Women in AI',
      description: 'Established the region\'s premier AI empowerment programs, training women and youth in agentic intelligence.',
    },
    {
      year: '2024',
      title: 'Global Movement',
      description: 'Recognized as the Gulf\'s leading AI powerhouse, setting the standard for sovereign technology innovation.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary via-primary-light to-secondary-brand text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold font-display mb-6">
              Women-Led, Gulf-Born
              <span className="block text-secondary-brand">AI Powerhouse</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              AIQRA.ai creates agentic intelligence that doesn't just think — it acts. 
              Born from the Arabic "Iqra" (اقرأ) meaning "read," we command knowledge to create the future.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-8 text-gradient">
                Our Mission
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                To redefine the future of intelligence — not as something abstract, but as embodied, 
                actionable, and empowering. We exist to create agentic AI that acts with purpose, 
                leading sovereign technology innovation from the Gulf to the world.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                AIQRA.ai is not just a company. It's a movement for women redefining leadership in AI, 
                for the Gulf shaping its own technological destiny, and for the future of intelligence 
                built here and exported globally.
              </p>
            </div>
            
            <div className="card-elegant bg-gradient-subtle">
              <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                To be the go-to AI and robotics partner in the Gulf — trusted by governments, 
                enterprises, and innovators who want future-ready solutions that combine cultural 
                depth with cutting-edge global technology. We don't follow trends. We set the standard.
              </p>
              <div className="flex items-center text-primary font-semibold">
                <span>Shaping Tomorrow's World</span>
                <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 text-gradient">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide our innovation, partnerships, and commitment 
              to delivering exceptional AI and robotics solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="card-elegant group hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary-brand rounded-xl flex items-center justify-center mb-6 group-hover:animate-glow">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From our founding vision to becoming a recognized leader in AI and robotics innovation, 
              discover the milestones that define our commitment to excellence.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-8 mb-12 last:mb-0">
                <div className="md:w-24 flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary-brand rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {milestone.year}
                  </div>
                </div>
                <div className="flex-1 card-elegant">
                  <h3 className="text-2xl font-semibold mb-4">{milestone.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
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
            Join the Movement
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            AIQRA.ai is redefining what AI means in our region — sovereign, agentic, women-led, unstoppable. 
            Ready to create the future with us?
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