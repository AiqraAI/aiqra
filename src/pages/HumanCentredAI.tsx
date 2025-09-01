import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Shield, Leaf, Users, Smartphone, GraduationCap, Building, Banknote, Hospital, FileText, Phone } from 'lucide-react';

const HumanCentredAI = () => {
  // SEO Meta Tags
  useEffect(() => {
    document.title = 'Holistic Human-Centred AI Solutions | AIQRA.ai';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover AIQRA.ai\'s holistic, human-centred AI solutions — ethical, transparent, and designed to empower people across telecom, Finance, Insurance, Education, Real estate, Healthcare, and Government.');
    }
    
    // Update OG tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Holistic Human-Centred AI Solutions | AIQRA.ai');
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Discover AIQRA.ai\'s holistic, human-centred AI solutions — ethical, transparent, and designed to empower people across multiple industries.');
    }
    
    // Cleanup function to restore original meta tags when component unmounts
    return () => {
      document.title = 'AIQRA.ai - Women-Led AI & Robotics Powerhouse | Gulf Innovation';
      if (metaDescription) {
        metaDescription.setAttribute('content', 'AIQRA.ai is a women-led, Gulf-born AI and robotics powerhouse creating agentic intelligence that acts with purpose. Leading sovereign technology development across the Gulf region.');
      }
    };
  }, []);
  const pillars = [
    {
      icon: Heart,
      title: 'Empathy by Design',
      description: 'Every solution begins with real human needs, not just technical specs.',
    },
    {
      icon: Shield,
      title: 'Transparency & Trust',
      description: 'We design AI that explains itself clearly, helping users and companies trust outcomes.',
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'Our robotics and AI agents are optimized for energy efficiency and long-term social benefit.',
    },
    {
      icon: Users,
      title: 'Inclusion & Accessibility',
      description: 'Built to work across languages, cultures, and abilities.',
    },
  ];

  const applications = [
    {
      sector: 'Telecoms',
      icon: Smartphone,
      description: 'AI customer service agents already integrated into infrastructure, reducing call-center load by 40% while maintaining human escalation for complex cases. Demand is high for multi-lingual voice bots, automated billing support, and churn-prediction analytics.',
      metrics: ['↓ Call-load 40%', 'Arabic/Eng/...', 'Billing/Churn'],
      topic: 'telecoms'
    },
    {
      sector: 'Education',
      icon: GraduationCap,
      description: 'Adaptive AI tutors and learning dashboards that free teachers from administrative tasks. Current demand focuses on AI exam prep assistants, student performance analytics, and bilingual (Arabic–English) learning agents, aligned with National digital strategies.',
      metrics: ['AI Tutors', 'Analytics', 'Bilingual'],
      topic: 'education'
    },
    {
      sector: 'Real Estate',
      icon: Building,
      description: 'AI-driven lead qualification that filters thousands of inbound inquiries into high-intent buyers within minutes. Agents demand SEO-integrated lead pipelines, WhatsApp response bots, and AI valuation engines that link directly to CRM systems.',
      metrics: ['Lead Filter', 'WhatsApp Bot', 'AI Valuation'],
      topic: 'real-estate'
    },
    {
      sector: 'Banking & Finance',
      icon: Banknote,
      description: 'Institutions are rapidly adopting fraud-detection AI, automated KYC/AML compliance checks, and robotic process automation (RPA) for onboarding. Demand is surging in the GCC due to new regulatory compliance requirements.',
      metrics: ['Fraud Detection', 'KYC/AML', 'RPA'],
      topic: 'banking'
    },
    {
      sector: 'Healthcare',
      icon: Hospital,
      description: 'Hospitals and insurers want AI triage assistants, robotic surgery support, and predictive analytics for patient outcomes. Current pain point: integrating disparate datasets while ensuring HIPAA/GDPR compliance.',
      metrics: ['AI Triage', 'Surgery Support', 'HIPAA/GDPR'],
      topic: 'healthcare'
    },
    {
      sector: 'Government & Smart Cities',
      icon: FileText,
      description: 'Entities are investing heavily in AI document analyzers, e-government chatbots, and robotic systems for utilities and logistics. The demand is for scalable, Arabic-first solutions that reduce manual processing costs by 50% or more.',
      metrics: ['Doc Analyzers', 'Arabic-first', '-50% Cost'],
      topic: 'government'
    },
  ];

  const faqs = [
    {
      question: 'How do you measure ROI for human-centred AI solutions?',
      answer: 'We use comprehensive metrics including efficiency gains, user satisfaction scores, ethical compliance ratings, and long-term sustainability indicators. Our approach balances quantitative ROI with qualitative human impact assessments.'
    },
    {
      question: 'How do you ensure data privacy with Arabic LLMs?',
      answer: 'We implement end-to-end encryption, local data processing where required, and comply with GCC data protection regulations. Our Arabic language models are trained with privacy-by-design principles and cultural sensitivity protocols.'
    },
    {
      question: 'What is your typical integration timeline?',
      answer: 'Integration timelines vary from 6-18 weeks depending on complexity. We use agile methodologies with regular checkpoints, ensuring minimal disruption to existing workflows while maximizing human-AI collaboration effectiveness.'
    },
    {
      question: 'How do you handle AI ethics and governance?',
      answer: 'We follow UAE AI Seal programme guidelines and GCC AI Governance frameworks. Every solution undergoes ethical review, bias testing, and includes explainable AI features to ensure transparency and accountability.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* SEO Meta - handled by document head */}
      
      {/* Breadcrumb */}
      <nav className="py-4 bg-muted/30">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link to="/solutions" className="hover:text-primary transition-colors">Solutions</Link>
            <span>/</span>
            <span className="text-foreground">Human-Centred AI</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero-human-ai" className="section-padding bg-gradient-to-br from-primary via-primary-light to-secondary-brand text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6 leading-tight">
              AI that puts people first.
            </h1>
            <h2 className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8 max-w-3xl mx-auto">
              At AIQRA.ai, we believe technology should serve humanity, not replace it. Our human-centred approach ensures AI solutions are designed with empathy, ethics, and measurable impact in line with GCC AI Governance.
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Link to="/solutions">
                <Button className="btn-primary group">
                  Explore Our Solutions
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  Partner With Us
                </Button>
              </Link>
            </div>

            {/* Trust Strip */}
            <div className="flex justify-center items-center space-x-8 opacity-70">
              <div className="text-sm font-medium">Trusted by leading organizations across the Gulf</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Human-Centered AI */}
      <section id="why-human-ai" className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold font-heading mb-8 text-gradient-primary">
                Why Human-Centered AI?
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Traditional AI often focuses purely on efficiency and automation. At AIQRA.ai, we go beyond the algorithm — embedding human values, cultural sensitivity, and accessibility into every product.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                    <p className="text-foreground">AI that empowers decision-making rather than replacing it.</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                    <p className="text-foreground">AI that is transparent, explainable, and ethical.</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                    <p className="text-foreground">AI that respects diversity and adapts to real-world human contexts.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-md">
                <div className="card-elegant text-center p-8">
                  <div className="text-6xl mb-4">🤝</div>
                  <h3 className="text-xl font-semibold mb-2">People ↔ AI ↔ Outcomes</h3>
                  <p className="text-muted-foreground">Collaborative intelligence that amplifies human potential</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Pillars */}
      <section id="pillars" className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-gradient-primary">
              Our Human-Centered Framework
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <Card key={index} className="card-feature group hover-scale cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary-brand rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:animate-glow">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 font-heading">{pillar.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Human-Centered AI in Action */}
      <section id="applications" className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-gradient-primary">
              Human-Centered AI in Action
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Our approach is grounded in solving high-demand, real-world challenges with measurable results. Across industries, clients want AI solutions with direct performance, compliance, and ROI impact.
            </p>
          </div>

          <Accordion type="single" collapsible defaultValue="telecoms" className="max-w-4xl mx-auto">
            {applications.map((app, index) => {
              const Icon = app.icon;
              return (
                <AccordionItem key={index} value={app.topic} className="border border-border rounded-lg mb-4">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary-brand rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-left">{app.sector}</h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <p className="text-muted-foreground mb-4 leading-relaxed">{app.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {app.metrics.map((metric, idx) => (
                        <span key={idx} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                          {metric}
                        </span>
                      ))}
                    </div>
                    <Link to={`/contact?topic=${app.topic}`} className="text-primary hover:text-primary-light transition-colors font-medium">
                      Talk to us about this →
                    </Link>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>

          <div className="text-center mt-12 p-8 bg-gradient-to-r from-primary/5 to-secondary-brand/5 rounded-2xl">
            <p className="text-lg font-medium text-foreground">
              <strong>Summary:</strong> Wherever AI and robotics are deployed, the demand is the same: automation with accountability, measurable ROI, and seamless integration into existing human workflows. This is where AIQRA.ai leads.
            </p>
          </div>
        </div>
      </section>

      {/* Partner CTA */}
      <section id="cta-partner" className="section-padding bg-gradient-to-r from-primary via-primary-light to-secondary-brand text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            Partner with Us for Human-Centred AI
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's build AI that transforms industries while staying true to human values.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact">
              <Button className="bg-white text-primary hover:bg-white/90 font-bold px-8 py-4">
                Contact Us Today
              </Button>
            </Link>
            <Link to="/solutions" className="text-white hover:text-white/80 transition-colors font-medium text-lg">
              Browse All Solutions →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-gradient-primary">
              Frequently Asked Questions
            </h2>
          </div>
          
          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`} className="border border-border rounded-lg mb-4">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  <h3 className="font-semibold">{faq.question}</h3>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Persistent Contact Strip */}
      <section id="contact-inline" className="py-8 bg-accent-brand/10 border-t border-b border-accent-brand/20">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 text-center">
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-accent-brand" />
              <span className="text-foreground">Prefer a quick consult? Book a 15-min discovery.</span>
            </div>
            <Link to="/contact#book">
              <Button variant="outline" className="border-accent-brand text-accent-brand hover:bg-accent-brand hover:text-white">
                Book Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HumanCentredAI;