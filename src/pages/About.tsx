import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Award, Users } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Innovation Excellence',
      description: 'We push the boundaries of what\'s possible in AI and robotics, delivering breakthrough solutions that transform industries.',
    },
    {
      icon: Eye,
      title: 'Visionary Leadership',
      description: 'Our forward-thinking approach positions clients at the forefront of technological advancement and competitive advantage.',
    },
    {
      icon: Award,
      title: 'Quality Commitment',
      description: 'Every solution meets the highest standards of performance, reliability, and scalability for long-term success.',
    },
    {
      icon: Users,
      title: 'Partnership Focus',
      description: 'We build lasting relationships with clients, understanding their unique challenges to deliver tailored solutions.',
    },
  ];

  const milestones = [
    {
      year: '2020',
      title: 'Foundation',
      description: 'AIQRA.ai founded with a vision to bring world-class AI and robotics innovation to the Middle East.',
    },
    {
      year: '2021',
      title: 'First Solutions',
      description: 'Launched our first AI automation platforms for telecommunications and enterprise clients.',
    },
    {
      year: '2022',
      title: 'International Expansion',
      description: 'Extended our reach beyond Oman, serving clients across the GCC and establishing key partnerships.',
    },
    {
      year: '2023',
      title: 'Internship Excellence',
      description: 'Launched gold-standard AI internship program, training the next generation of technologists.',
    },
    {
      year: '2024',
      title: 'Global Recognition',
      description: 'Recognized as a leading AI and robotics innovator with 50+ successful deployments worldwide.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary via-primary-light to-secondary-brand text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold font-display mb-6">
              Pioneering the Future of
              <span className="block text-secondary-brand">Intelligent Technology</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              AIQRA.ai is at the forefront of artificial intelligence and robotics innovation, 
              transforming how businesses operate and compete in the digital age.
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
                To democratize access to cutting-edge AI and robotics technology, empowering 
                organizations across the Middle East and beyond to achieve unprecedented levels 
                of innovation, efficiency, and growth.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe that intelligent automation should be accessible, practical, and 
                transformational. Our solutions bridge the gap between complex technology and 
                real-world business value.
              </p>
            </div>
            
            <div className="card-elegant bg-gradient-subtle">
              <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                To be the Middle East's most trusted partner for AI and robotics innovation, 
                recognized globally for our technical excellence, educational leadership, and 
                transformational impact on industries and communities.
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
            Join Us in Shaping the Future
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Discover how AIQRA.ai can transform your organization with cutting-edge 
            AI and robotics solutions tailored to your industry and goals.
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