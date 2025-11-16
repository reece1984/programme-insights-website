import React from 'react';
import { motion } from 'framer-motion';
import { Building2, TrendingUp, Award } from 'lucide-react';
import { Container } from '../ui/Container';

export const Credibility: React.FC = () => {
  const credentials = [
    {
      icon: Building2,
      title: 'Sector Experience',
      items: [
        'Nuclear New Build & Decommissioning',
        'Rail Infrastructure & Rolling Stock',
        'Civil Engineering & Infrastructure',
        'Defence & Security Programmes',
      ],
    },
    {
      icon: TrendingUp,
      title: 'Programme Scale',
      items: [
        '£1Bn+ Nuclear Programme Delivery',
        'Multi-Site Framework Management',
        'Complex Stakeholder Environments',
        'Government & Private Sector',
      ],
    },
    {
      icon: Award,
      title: 'Professional Standards',
      items: [
        'Government PMO Leadership',
        'NISTA & PAR Review Experience',
        'HMT Green Book Expertise',
        'NAO & IPA Engagement',
      ],
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-100px' },
    transition: { duration: 0.5 },
  };

  return (
    <section className="section-padding bg-white">
      <Container>
        <motion.div {...fadeInUp} className="text-center mb-16">
          <p className="section-label mb-3">
            PROVEN EXPERTISE
          </p>
          <h2 className="heading-lg text-navy-primary">
            Built by Programme Directors, for Programme Directors
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {credentials.map((credential, index) => {
            const Icon = credential.icon;
            return (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ ...fadeInUp.transition, delay: index * 0.1 }}
                className="bg-light-grey p-8"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-theme-accent rounded-lg mb-6">
                  <Icon size={28} className="text-white" />
                </div>
                <h3 className="heading-sm text-navy-primary mb-6">{credential.title}</h3>
                <ul className="space-y-3">
                  {credential.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <span className="inline-block w-1.5 h-1.5 bg-theme-accent rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
