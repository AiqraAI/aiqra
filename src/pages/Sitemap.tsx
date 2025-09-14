import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Sitemap = () => {
  const sitemapLinks = [
    {
      category: 'Main Pages',
      links: [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Solutions', href: '/solutions' },
        { name: 'Human-Centred AI', href: '/solutions/human-centred-ai' },
        { name: 'Contact', href: '/contact' },
        { name: 'Careers', href: '/careers' },
      ]
    },
    {
      category: 'Industry Solutions',
      links: [
        { name: 'Telecommunications', href: '/telecommunications' },
        { name: 'Education', href: '/education' },
        { name: 'AI Sales Lead Generator', href: '/ai-sales-lead-generator' },
        { name: 'Enterprise', href: '/enterprise' },
      ]
    },
    {
      category: 'Legal',
      links: [
        { name: 'Terms of Use', href: '/terms' },
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Sitemap', href: '/sitemap' },
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary via-primary-light to-secondary-brand text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold font-display mb-6">
              Site
              <span className="block text-secondary-brand">Map</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Navigate through all pages and sections of AIQRA
            </p>
          </div>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold font-display mb-12 text-gradient text-center">
              All Pages & Sections
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sitemapLinks.map((section, index) => (
                <div key={index} className="card-elegant">
                  <h3 className="text-2xl font-bold font-display mb-6 text-gradient">
                    {section.category}
                  </h3>
                  
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link 
                          to={link.href}
                          className="flex items-center text-muted-foreground hover:text-primary transition-colors duration-200 group"
                        >
                          <ArrowRight className="w-4 h-4 mr-3 text-primary group-hover:translate-x-1 transition-transform" />
                          <span className="group-hover:font-medium">{link.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <div className="card-elegant">
                <h3 className="text-2xl font-bold font-display mb-4 text-gradient">
                  Need Help Finding Something?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Can't find what you're looking for? Our team is here to help you navigate our solutions.
                </p>
                <Link to="/contact">
                  <button className="btn-hero">
                    Contact Us
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sitemap;