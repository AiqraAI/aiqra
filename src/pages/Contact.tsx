import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Send } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

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
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const inquiryTypes = [
    { value: 'partnership', label: 'Partnership Opportunities' },
    { value: 'solutions', label: 'AI & Robotics Solutions' },
    { value: 'internships', label: 'Internship Programs' },
    { value: 'media', label: 'Media & Press Inquiries' },
    { value: 'careers', label: 'Career Opportunities' },
    { value: 'support', label: 'Technical Support' },
    { value: 'other', label: 'Other' },
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required';
    }
    
    if (!formData.inquiry_type) {
      newErrors.inquiry_type = 'Please select an inquiry type';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Form Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for contacting AIQRA. We'll respond within 24 hours.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        inquiry_type: '',
        message: ''
      });
      setErrors({});
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
              AIQRA can help you achieve your innovation goals.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-4xl font-bold font-display mb-6 text-gradient text-center">
                Send Us a Message
              </h2>
              <p className="text-xl text-muted-foreground mb-8 text-center">
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
                    <label className="block text-sm font-medium mb-2">Company/Organization *</label>
                    <Input
                      type="text"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      placeholder="Your company name"
                      required
                      className={`w-full ${errors.company ? 'border-red-500' : ''}`}
                    />
                    {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Inquiry Type *</label>
                    <Select value={formData.inquiry_type} onValueChange={(value) => handleInputChange('inquiry_type', value)}>
                      <SelectTrigger className={`w-full ${errors.inquiry_type ? 'border-red-500' : ''}`}>
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
                    {errors.inquiry_type && <p className="text-red-500 text-sm mt-1">{errors.inquiry_type}</p>}
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
          </div>
        </div>
      </section>

      {/* FAQ Section - Accordion */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 text-gradient">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Common questions about our AI and robotics solutions, partnerships, and services.
            </p>

            <Accordion type="single" collapsible className="text-left">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-semibold">
                  How long does it take to implement AI solutions?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Implementation timelines vary by project complexity, typically ranging from 3-6 months for standard solutions to 12+ months for custom enterprise systems.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-semibold">
                  Do you provide training and support?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Yes, we offer comprehensive training programs, ongoing technical support, and maintenance services for all our AI and robotics solutions.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-semibold">
                  Can you work with existing systems?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Absolutely. Our solutions are designed to integrate seamlessly with existing infrastructure and can be customized to work with your current systems.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg font-semibold">
                  What industries do you serve?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  We serve telecommunications, education, real estate, healthcare, manufacturing, and various enterprise sectors across the Middle East and beyond.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Remove map section */}
    </div>
  );
};

export default Contact;