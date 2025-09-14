import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, Brain, Target, GraduationCap, Laptop } from 'lucide-react';

const Education = () => {
  const solutions = [
    {
      icon: Brain,
      title: 'Personalized Learning',
      description: 'AI-powered adaptive learning systems that customize education pathways for individual students.',
    },
    {
      icon: Users,
      title: 'Student Analytics',
      description: 'Advanced analytics to track student progress, predict outcomes, and improve educational strategies.',
    },
    {
      icon: Target,
      title: 'Assessment Automation',
      description: 'Intelligent grading and assessment tools that provide instant feedback and detailed analytics.',
    },
    {
      icon: Laptop,
      title: 'Virtual Classrooms',
      description: 'AI-enhanced virtual learning environments that adapt to different learning styles and preferences.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary via-primary-light to-secondary-brand text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <BookOpen className="w-20 h-20 mx-auto mb-6 text-secondary-brand" />
            <h1 className="text-5xl md:text-6xl font-bold font-display mb-6">
              Education
              <span className="block text-secondary-brand">AI Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
              Revolutionize education with intelligent AI solutions. 
              Enhance learning outcomes, personalize education, and empower educators with cutting-edge technology.
            </p>
            
            <Link to="/contact">
              <Button className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                Transform Education
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
              Our Education Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive AI solutions designed to transform educational institutions 
              and enhance learning experiences for students and educators alike.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <div key={index} className="card-elegant group hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-r from-secondary-brand to-secondary-light rounded-2xl flex items-center justify-center mb-6 group-hover:animate-glow">
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

      {/* Impact Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-12 text-gradient">
              Educational Impact
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-light rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">85% Better Outcomes</h3>
                <p className="text-muted-foreground">Students show significant improvement in learning outcomes</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-accent-brand to-accent-light rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">50% Time Savings</h3>
                <p className="text-muted-foreground">Educators save time on administrative tasks and grading</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-secondary-brand to-secondary-light rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Personalized Learning</h3>
                <p className="text-muted-foreground">Adaptive learning paths tailored to individual student needs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary via-primary-light to-secondary-brand text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            Ready to Transform Education?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join leading educational institutions who trust AIQRA to revolutionize their learning environments.
          </p>
          
          <Link to="/contact">
            <Button className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
              Start Your Journey
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Education;