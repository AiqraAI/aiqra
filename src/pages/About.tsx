import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Brain, Zap, Mail, Users, Cpu, Building2, GraduationCap, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary via-primary-light to-secondary-brand text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold font-display mb-8 leading-tight">
              Gulf-Born. Woman-Led. Globally Wired.
            </h1>
            <div className="w-24 h-1 bg-white/60 mx-auto mb-8"></div>
            <p className="text-2xl md:text-3xl text-white/95 leading-relaxed font-light">
              At AIQRA, we don't just build AI — we build the future.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Cards Section */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Origin Story Card */}
            <Card className="card-elegant group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary-brand rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-primary">Our Origins</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Born in the Gulf, led by brilliant women, and backed by world-class talent across AI, robotics, and automation, AIQRA is where cutting-edge technology meets bold ambition.
                </p>
              </CardContent>
            </Card>

            {/* Platform Capabilities Card */}
            <Card className="card-elegant group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-secondary-brand to-accent-brand rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-secondary-brand">AI Platform</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our platform empowers companies to deploy intelligent AI agents at scale — fast, secure, and tailored to their exact needs.
                </p>
              </CardContent>
            </Card>

            {/* Mission Card */}
            <Card className="card-elegant group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 md:col-span-2 lg:col-span-1">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-accent-brand to-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-accent-brand">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We're redefining what's possible with orchestrated agents that think, learn, and act like you and your very best employee.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
              Our <span className="text-gradient-primary">AI Solutions</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Intelligent agents designed to transform how businesses operate
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Velocity Card */}
            <Card className="card-feature group">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-primary to-primary-light rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-primary">Velocity</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Never type another reply. Your AI inbox assistant writes human-level emails in English & Arabic — instantly.
                </p>
              </CardContent>
            </Card>

            {/* PrimeLead Card */}
            <Card className="card-feature group">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-secondary-brand to-secondary-light rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-secondary-brand">PrimeLead</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Close deals faster. AI that finds, scores, and sends the hottest leads straight to your CRM.
                </p>
              </CardContent>
            </Card>

            {/* Project Pulse Card */}
            <Card className="card-feature group">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-accent-brand to-accent-light rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Cpu className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-accent-brand">Project Pulse</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Give robots a sense of touch. The first open-source tactile AI library powering smarter machines today.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
              <span className="text-gradient-accent">Industries</span> We Serve
            </h2>
            <div className="w-24 h-1 bg-accent-brand mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Agentic tech built to scale, designed to comply, and ready to impress across the GCC and beyond
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Building2, title: "Telcos", desc: "Next-gen communication solutions" },
              { icon: Building2, title: "Enterprises", desc: "Scalable business automation" },
              { icon: GraduationCap, title: "Educators", desc: "AI-powered learning platforms" },
              { icon: Zap, title: "Pioneers", desc: "Innovation across all sectors" }
            ].map((industry, index) => (
              <Card key={index} className="card-elegant group text-center hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent-brand rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <industry.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">{industry.title}</h4>
                  <p className="text-muted-foreground text-sm">{industry.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Movement Section */}
      <section className="section-padding">
        <div className="container-custom">
          <Card className="card-elegant bg-gradient-to-r from-primary/5 via-secondary-brand/5 to-accent-brand/5 border-0">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                More Than a Company — It's a <span className="text-gradient-primary">Movement</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                Backed by visionary founders, GCC partnerships, and a fierce belief in local talent, 
                AIQRA is driving the future of AI innovation across the region and beyond.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary via-primary-light to-secondary-brand text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-6xl font-bold font-display mb-8 leading-tight">
            Join us. Build with us.<br />
            <span className="text-white/90">The future is AIQRA.</span>
          </h2>
          <div className="w-24 h-1 bg-white/60 mx-auto mb-8"></div>
          <p className="text-xl mb-12 text-white/90 max-w-2xl mx-auto leading-relaxed">
            Partner with AIQRA and deploy AI agents that transform your business today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/solutions">
              <Button className="bg-white text-primary hover:bg-white/90 font-semibold px-10 py-5 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 text-lg">
                Explore Solutions
              </Button>
            </Link>
            <Link to="/contact">
              <Button className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-10 py-5 rounded-xl transition-all duration-300 hover:scale-105 text-lg">
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