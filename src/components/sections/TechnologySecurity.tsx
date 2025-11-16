import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Cloud, FileCheck, Lock, Code, Database, Activity, Link2 } from 'lucide-react';
import { Container } from '../ui/Container';

export const TechnologySecurity: React.FC = () => {
  const securityItems = [
    { icon: Cloud, title: 'UK Data Residency', description: 'All data stored in UK South Azure region' },
    { icon: Shield, title: 'Azure OpenAI UK South', description: 'Enterprise-grade AI processing' },
    { icon: FileCheck, title: 'ISO 27001 Compliant', description: 'Information security management' },
    { icon: Lock, title: 'Cyber Essentials Plus', description: 'Government-backed certification' },
  ];

  const technologyItems = [
    { icon: Code, title: 'Same Technology as IPA Scout', description: 'Proven at national scale' },
    { icon: Database, title: 'Enterprise Architecture', description: 'Scalable, secure infrastructure' },
    { icon: Activity, title: 'Complete Audit Trail', description: 'Full visibility and compliance' },
    { icon: Link2, title: 'API Integration Ready', description: 'Connect to your existing systems' },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-100px' },
    transition: { duration: 0.5 },
  };

  return (
    <section id="security" className="section-padding bg-navy-primary text-white">
      <Container>
        <motion.div {...fadeInUp} className="text-center mb-16">
          <p className="section-label mb-3">
            TECHNOLOGY & SECURITY
          </p>
          <h2 className="heading-lg">
            Enterprise-Grade Security You Can Trust
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Security & Compliance */}
          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.1 }}
          >
            <h3 className="heading-sm mb-8 border-b border-gray-700 pb-4">
              Security & Compliance
            </h3>
            <div className="space-y-6">
              {securityItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-theme-accent/10 rounded-lg flex items-center justify-center">
                        <Icon size={24} className="text-theme-accent" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Technology */}
          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
          >
            <h3 className="heading-sm mb-8 border-b border-gray-700 pb-4">
              Technology Platform
            </h3>
            <div className="space-y-6">
              {technologyItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-theme-accent/10 rounded-lg flex items-center justify-center">
                        <Icon size={24} className="text-theme-accent" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
