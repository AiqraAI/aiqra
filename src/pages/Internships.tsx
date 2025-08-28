import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap, Code, Brain, Users, Trophy, Star, Clock, MapPin } from 'lucide-react';

const Internships = () => {
  const programs = [
    {
      title: 'AI Development Track',
      duration: '6 months',
      description: 'Deep dive into machine learning, neural networks, and AI application development with hands-on projects.',
      skills: ['Python & TensorFlow', 'Machine Learning Algorithms', 'Deep Learning & NLP', 'AI Ethics & Deployment'],
      icon: Brain,
      gradient: 'from-primary to-primary-light',
    },
    {
      title: 'Robotics Engineering Track',
      duration: '6 months',
      description: 'Master robotics systems, autonomous navigation, and human-robot interaction through real-world applications.',
      skills: ['ROS & Control Systems', 'Computer Vision', 'Sensor Integration', 'Autonomous Systems'],
      icon: Code,
      gradient: 'from-secondary-brand to-secondary-light',
    },
    {
      title: 'AI Research Track',
      duration: '12 months',
      description: 'Advanced research program focusing on cutting-edge AI topics with publication and conference opportunities.',
      skills: ['Research Methodologies', 'Advanced ML Techniques', 'Academic Writing', 'Innovation Projects'],
      icon: GraduationCap,
      gradient: 'from-accent-brand to-accent-light',
    },
  ];

  const benefits = [
    {
      icon: Trophy,
      title: 'Industry Certification',
      description: 'Receive globally recognized certificates in AI and robotics technologies upon program completion.',
    },
    {
      icon: Users,
      title: 'Expert Mentorship',
      description: 'Work directly with AICRA.ai engineers and researchers on real client projects and innovations.',
    },
    {
      icon: Star,
      title: 'Career Placement',
      description: '95% placement rate with leading tech companies and continued opportunities within AICRA.ai.',
    },
  ];

  const testimonials = [
    {
      name: 'Amira Al-Kindi',
      program: 'AI Development Track',
      company: 'Now at Google AI',
      quote: 'AICRA.ai gave me the practical skills and real-world experience that launched my career in AI. The mentorship was exceptional.',
      image: '/api/placeholder/60/60',
    },
    {
      name: 'Omar Al-Rashid',
      program: 'Robotics Engineering Track',
      company: 'Now at Tesla Robotics',
      quote: 'Working on actual robotics projects while learning gave me confidence and skills that set me apart in the industry.',
      image: '/api/placeholder/60/60',
    },
    {
      name: 'Layla Al-Zahra',
      program: 'AI Research Track',
      company: 'PhD at MIT',
      quote: 'The research experience and academic support helped me publish papers and get accepted to top graduate programs.',
      image: '/api/placeholder/60/60',
    },
  ];

  const stats = [
    { number: '100+', label: 'Graduates Placed' },
    { number: '95%', label: 'Job Placement Rate' },
    { number: '15+', label: 'Partner Companies' },
    { number: '4.9/5', label: 'Program Rating' },
  ];

  const requirements = [
    'Bachelor\'s degree in Engineering, Computer Science, or related field',
    'Strong foundation in mathematics and programming',
    'Demonstrated interest in AI or robotics through projects or coursework',
    'Excellent English communication skills',
    'Commitment to full-time program participation',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary via-primary-light to-secondary-brand text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold font-display mb-6">
              Gold-Standard AI &
              <span className="block text-secondary-brand">Robotics Internships</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
              Launch your career in artificial intelligence and robotics with Oman's most 
              comprehensive internship program, designed for the next generation of tech leaders.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                Apply Now
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 rounded-xl transition-all duration-300">
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 text-gradient">
              Internship Tracks
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose your path in AI and robotics with specialized programs designed 
              to match your interests and career goals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <div key={index} className="card-elegant group hover:scale-105">
                  <div className={`w-16 h-16 bg-gradient-to-r ${program.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:animate-glow`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <h3 className="text-2xl font-bold mr-4">{program.title}</h3>
                    <span className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      <Clock className="w-4 h-4 mr-1" />
                      {program.duration}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {program.description}
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Key Skills:</h4>
                    {program.skills.map((skill, idx) => (
                      <div key={idx} className="flex items-center text-muted-foreground">
                        <ArrowRight className="w-4 h-4 mr-2 text-primary" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
              Program Benefits
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive internship program provides everything you need to launch 
              a successful career in AI and robotics technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="card-elegant text-center group hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary-brand rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:animate-glow">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
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
              Success Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hear from our graduates who are now leading AI and robotics innovation 
              at top companies worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card-elegant group hover:scale-105">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary-brand rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.program}</div>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                
                <div className="pt-4 border-t border-border">
                  <div className="text-sm font-medium text-primary">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
                Application Requirements
              </h2>
              <p className="text-xl text-muted-foreground">
                We seek passionate, dedicated individuals ready to dive deep into AI and robotics innovation.
              </p>
            </div>

            <div className="card-elegant">
              <h3 className="text-2xl font-semibold mb-6">Eligibility Criteria</h3>
              <div className="space-y-4">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{requirement}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-gradient-subtle rounded-xl">
                <div className="flex items-center mb-4">
                  <MapPin className="w-5 h-5 text-primary mr-2" />
                  <span className="font-semibold">Location & Format</span>
                </div>
                <p className="text-muted-foreground">
                  Programs are conducted at our state-of-the-art facility in Muscat, Oman, 
                  with hybrid learning options and international collaboration opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary via-primary-light to-secondary-brand text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            Start Your AI Career Journey
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join Oman's premier AI and robotics internship program. Applications for 
            the next cohort are now open with limited seats available.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
              Apply Today
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Link to="/contact">
              <Button className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 rounded-xl transition-all duration-300">
                Schedule Info Session
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Internships;