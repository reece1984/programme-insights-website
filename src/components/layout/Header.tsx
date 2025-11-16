import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Check if we're on a page that should have a solid header (like FAQ)
  const isSolidHeaderPage = location.pathname === '/faq';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Platform', href: '/#platform' },
    { name: 'Modules', href: '/#modules' },
    { name: 'Security', href: '/#security' },
    { name: 'FAQ', href: '/faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isSolidHeaderPage ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className={`text-2xl font-bold font-serif transition-colors ${
              isScrolled || isSolidHeaderPage ? 'text-theme-primary' : 'text-white'
            }`}>
              Programme Insights
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors hover:text-theme-accent ${
                  isScrolled || isSolidHeaderPage ? 'text-gray-700' : 'text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://app.programmeinsights.co.uk/login"
              className={`font-medium transition-colors hover:text-theme-accent ${
                isScrolled || isSolidHeaderPage ? 'text-gray-700' : 'text-white'
              }`}
            >
              Login
            </a>
            <a href="https://app.programmeinsights.co.uk/signup">
              <Button variant="primary" size="sm">
                Get Started
              </Button>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 ${isScrolled || isSolidHeaderPage ? 'text-theme-primary' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 font-medium hover:text-theme-accent transition-colors px-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://app.programmeinsights.co.uk/login"
                className="text-gray-700 font-medium hover:text-theme-accent transition-colors px-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Login
              </a>
              <div className="px-4 pt-2">
                <a href="https://app.programmeinsights.co.uk/signup">
                  <Button variant="primary" size="sm" className="w-full">
                    Get Started
                  </Button>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
