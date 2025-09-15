import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigation = [{
    name: 'Home',
    href: '/'
  }, {
    name: 'About Us',
    href: '/about'
  }, {
    name: 'Solutions',
    href: '/solutions'
  }, {
    name: 'Human-Centered AI',
    href: '/human-centred-ai'
  }, {
    name: 'Careers',
    href: '/careers'
  }, {
    name: 'Contact',
    href: '/contact'
  }];
  const isActive = (path: string) => location.pathname === path;
  return <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-border">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-display font-bold text-[hsl(var(--primary))]">AIQRA</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map(item => <Link key={item.name} to={item.href} className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${isActive(item.href) ? 'text-primary bg-secondary' : 'text-foreground hover:text-primary hover:bg-secondary'}`}>
                {item.name}
              </Link>)}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/contact">
              <Button className="btn-hero">
                Partner with Us
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col space-y-2">
              {navigation.map(item => <Link key={item.name} to={item.href} className={`px-4 py-3 rounded-lg font-medium transition-all duration-200 ${isActive(item.href) ? 'text-primary bg-secondary' : 'text-foreground hover:text-primary hover:bg-secondary'}`} onClick={() => setIsMenuOpen(false)}>
                  {item.name}
                </Link>)}
              <div className="pt-4 px-4">
                <Link to="/contact">
                  <Button className="btn-hero w-full">
                    Partner with Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>}
      </nav>
    </header>;
};
export default Header;