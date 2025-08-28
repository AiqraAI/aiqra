import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Clock, Send, Building, Users, MessageSquare } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    inquiry_type: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'contact@aicra.ai',
      description: 'Get in touch for partnerships, inquiries, and collaboration opportunities.',
      action: 'Send Email',
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+968 1234 5678',
      description: 'Speak directly with our AI and robotics experts for immediate assistance.',
      action: 'Call Now',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'Muscat, Oman',
      description: 'Tour our state-of-the-art AI and robotics development facility.',
      action: 'Get Directions',
    },
  ];

  const inquiryTypes = [
    { value: 'partnership', label: 'Partnership Opportunities' },
    { value: 'solutions', label: 'AI & Robotics Solutions' },
    { value: 'internships', label: 'Internship Programs' },
    { value: 'media', label: 'Media & Press Inquiries' },
    { value: 'careers', label: 'Career Opportunities' },
    { value: 'support', label: 'Technical Support' },
    { value: 'other', label: 'Other' },
  ];

  const offices = [
    {
      title: 'Headquarters',
      location: 'Muscat, Oman',
      address: 'Al Khuwair, Muscat Governorate, Sultanate of Oman',
      hours: 'Sunday - Thursday: 8:00 AM - 6:00 PM',
      type: 'primary',
    },
    {
      title: 'Regional Office',
      location: 'Dubai, UAE',
      address: 'Dubai Internet City, Dubai, United Arab Emirates',
      hours: 'Sunday - Thursday: 9:00 AM - 5:00 PM',
      type: 'regional',
    },
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for contacting AICRA.ai. We'll respond within 24 hours.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        inquiry_type: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary via-primary-light to-secondary-brand text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold font-display mb-6">
              Get In
              <span className="block text-secondary-brand">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Ready to transform your business with AI and robotics? Let's discuss how 
              AICRA.ai can help you achieve your innovation goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div key={index} className="card-elegant text-center group hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary-brand rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:animate-glow">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{info.title}</h3>
                  <div className="text-2xl font-bold text-gradient mb-4">{info.details}</div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {info.description}
                  </p>
                  <Button className="btn-secondary">
                    {info.action}
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-4xl font-bold font-display mb-6 text-gradient">
                Send Us a Message
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Your full name"
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address *</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="your.email@company.com"
                      required
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Company/Organization</label>
                    <Input
                      type="text"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      placeholder="Your company name"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Inquiry Type *</label>
                    <Select value={formData.inquiry_type} onValueChange={(value) => handleInputChange('inquiry_type', value)}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        {inquiryTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message *</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Tell us about your project, requirements, or how we can help you..."
                    required
                    rows={6}
                    className="w-full"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="btn-hero w-full group" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>

            {/* Office Information */}
            <div>
              <h2 className="text-4xl font-bold font-display mb-6">
                Our Offices
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Visit us at our state-of-the-art facilities or connect with our regional teams.
              </p>

              <div className="space-y-8">
                {offices.map((office, index) => (
                  <div key={index} className="card-elegant">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                        office.type === 'primary' 
                          ? 'bg-gradient-to-r from-primary to-secondary-brand' 
                          : 'bg-gradient-to-r from-secondary-brand to-accent-brand'
                      }`}>
                        <Building className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">{office.title}</h3>
                        <div className="text-lg font-medium text-primary mb-2">{office.location}</div>
                        <div className="flex items-start mb-3">
                          <MapPin className="w-4 h-4 text-muted-foreground mr-2 mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground">{office.address}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 text-muted-foreground mr-2" />
                          <span className="text-muted-foreground">{office.hours}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="mt-12">
                <h3 className="text-2xl font-semibold mb-6">Quick Actions</h3>
                <div className="space-y-4">
                  <Button className="btn-secondary w-full justify-between group">
                    <span className="flex items-center">
                      <Users className="w-5 h-5 mr-3" />
                      Schedule a Consultation
                    </span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  
                  <Button className="btn-ghost w-full justify-between group">
                    <span className="flex items-center">
                      <MessageSquare className="w-5 h-5 mr-3" />
                      Join Our Newsletter
                    </span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 text-gradient">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Common questions about our AI and robotics solutions, partnerships, and services.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              {[
                {
                  question: "How long does it take to implement AI solutions?",
                  answer: "Implementation timelines vary by project complexity, typically ranging from 3-6 months for standard solutions to 12+ months for custom enterprise systems."
                },
                {
                  question: "Do you provide training and support?",
                  answer: "Yes, we offer comprehensive training programs, ongoing technical support, and maintenance services for all our AI and robotics solutions."
                },
                {
                  question: "Can you work with existing systems?",
                  answer: "Absolutely. Our solutions are designed to integrate seamlessly with existing infrastructure and can be customized to work with your current systems."
                },
                {
                  question: "What industries do you serve?",
                  answer: "We serve telecommunications, education, real estate, healthcare, manufacturing, and various enterprise sectors across the Middle East and beyond."
                }
              ].map((faq, index) => (
                <div key={index} className="card-elegant">
                  <h4 className="font-semibold text-lg mb-3">{faq.question}</h4>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Placeholder */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container-custom">
          <div className="card-elegant">
            <h3 className="text-2xl font-semibold mb-6 text-center">Find Us</h3>
            <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary-brand/10 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                <p className="text-muted-foreground">Interactive map coming soon</p>
                <p className="text-sm text-muted-foreground">Al Khuwair, Muscat, Oman</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;