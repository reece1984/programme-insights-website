import React from 'react';
import { Shield, Award, Users } from 'lucide-react';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';

export const Hero: React.FC = () => {
  const trustBadges = [
    { icon: Shield, text: 'UK Data Residency' },
    { icon: Award, text: 'Same Technology as IPA Scout' },
    { icon: Users, text: '20+ Years PMO Expertise' },
  ];

  return (
    <section className="relative min-h-screen flex items-center hero-bg">
      <Container className="py-32 md:py-40">
        <div className="max-w-4xl mx-auto text-center hero-text">
          <h1 className="heading-xl mb-6">
            Enterprise Assurance for Major UK Infrastructure Programmes
          </h1>
          <p className="body-lg text-gray-200 mb-12 max-w-3xl mx-auto">
            Integrated programme management intelligence for directors managing £100M+ infrastructure delivery.
            Built by PMO professionals with 20+ years delivering the UK's most complex programmes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button variant="primary" size="lg">
              Schedule Consultation
            </Button>
            <Button variant="secondary" size="lg">
              Explore Platform
            </Button>
          </div>

          {/* Trust Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-gray-700">
            {trustBadges.map((badge, index) => {
              const Icon = badge.icon;
              return (
                <div key={index} className="flex items-center justify-center gap-3">
                  <Icon size={24} className="text-theme-accent" />
                  <span className="text-sm font-medium">{badge.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};
