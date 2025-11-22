import React from 'react';
import { useLocation } from 'react-router-dom';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const isGatewayPage = location.pathname === '/gatewaysuccess';

  const footerLinks = {
    company: {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#' },
        { name: 'Contact', href: '#' },
        { name: 'Careers', href: '#' },
      ],
    },
    platform: {
      title: 'Platform',
      links: [
        { name: 'Gateway Success', href: '/gatewaysuccess' },
        { name: 'Baseline Success', href: '/#modules' },
        { name: 'Tender Success', href: '/#modules' },
        { name: 'Risk Success', href: '/#modules' },
        { name: 'Business Case Success', href: '/#modules' },
      ],
    },
    resources: {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '#' },
        { name: 'FAQ', href: '/faq' },
        { name: 'Support', href: '#' },
      ],
    },
    legal: {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
        { name: 'Security', href: '/#security' },
      ],
    },
  };

  return (
    <footer className="bg-navy-primary text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key}>
              <h3 className="font-bold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center">
              <span className="text-xl font-bold font-serif">Programme Insights</span>
            </div>
            <div className="text-gray-400 text-sm text-center md:text-right">
              {isGatewayPage && (
                <p className="mb-2">
                  <a
                    href="https://app.gatewaysuccess.co.uk/signin"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Sign In to Gateway Success
                  </a>
                </p>
              )}
              <p>&copy; {currentYear} Programme Insights. All rights reserved.</p>
              <p className="mt-1">Enterprise Assurance for Major UK Infrastructure Programmes</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
