import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
const Footer = () => {
  const footerLinks = {
    company: [{
      name: 'About Us',
      href: '/about'
    }, {
      name: 'Solutions',
      href: '/solutions'
    }, {
      name: 'Case Studies',
      href: '/case-studies'
    }, {
      name: 'Media & Insights',
      href: '/media'
    }],
    opportunities: [{
      name: 'Internships',
      href: '/internships'
    }, {
      name: 'Careers',
      href: '/careers'
    }, {
      name: 'Partnerships',
      href: '/contact'
    }, {
      name: 'Training Programs',
      href: '/training'
    }],
    legal: [{
      name: 'Terms of Use',
      href: '/terms'
    }, {
      name: 'Privacy Policy',
      href: '/privacy'
    }, {
      name: 'Sitemap',
      href: '/sitemap'
    }]
  };
  const socialLinks = [{
    name: 'LinkedIn',
    icon: Linkedin,
    href: '#'
  }, {
    name: 'Twitter',
    icon: Twitter,
    href: '#'
  }, {
    name: 'Instagram',
    icon: Instagram,
    href: '#'
  }];
  return <footer className="bg-gradient-to-r from-foreground to-primary text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-secondary-brand to-accent-brand rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="text-2xl font-display font-bold">AIQRA</span>
            </Link>
            <p className="text-white/80 mb-6 leading-relaxed">
              Leading the future of AI and robotics innovation. Transforming industries through 
              cutting-edge artificial intelligence and autonomous systems.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-secondary-brand" />
                <span className="text-white/80">contact@aiqra.ai</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-secondary-brand" />
                <span className="text-white/80">+968 1234 5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-secondary-brand" />
                <span className="text-white/80">Muscat, Oman</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map(link => <li key={link.name}>
                  <Link to={link.href} className="text-white/80 hover:text-secondary-brand transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Opportunities */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Opportunities</h3>
            <ul className="space-y-3">
              {footerLinks.opportunities.map(link => <li key={link.name}>
                  <Link to={link.href} className="text-white/80 hover:text-secondary-brand transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Legal</h3>
            <ul className="space-y-3 mb-8">
              {footerLinks.legal.map(link => <li key={link.name}>
                  <Link to={link.href} className="text-white/80 hover:text-secondary-brand transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>)}
            </ul>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map(social => {
                const Icon = social.icon;
                return <a key={social.name} href={social.href} className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-secondary-brand transition-all duration-200 group" target="_blank" rel="noopener noreferrer">
                      <Icon className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                    </a>;
              })}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-8 mt-12 text-center">
          <p className="text-white/60">
            © {new Date().getFullYear()} AIQRA. All rights reserved. Innovating the future of AI and robotics.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;