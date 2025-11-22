import React from 'react';
import { Container } from '../../ui/Container';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '1',
      title: 'Baseline Assessment',
      timeframe: 'Week 1',
      description: 'Upload your current evidence or connect your systems. Within 24 hours, receive your predicted rating and gap analysis.'
    },
    {
      number: '2',
      title: 'Continuous Improvement',
      timeframe: 'Ongoing',
      description: 'Follow your personalised roadmap. Watch your readiness score climb daily. Get alerts when evidence needs refreshing.'
    },
    {
      number: '3',
      title: 'Review Ready',
      timeframe: '90 Days',
      description: 'Enter your review with complete confidence. You\'ve practiced the questions. You\'ve filled the gaps. GREEN is inevitable.'
    }
  ];

  return (
    <section id="how-it-works" className="section-padding bg-white">
      <Container>
        <h2 className="heading-lg text-center text-theme-primary mb-16">
          From RED Risk to GREEN Confidence in 3 Steps
        </h2>

        <div className="space-y-12 max-w-4xl mx-auto">
          {steps.map((step) => (
            <div key={step.number} className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-theme-accent flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">
                    {step.number}
                  </span>
                </div>
              </div>
              <div className="flex-grow pt-2">
                <div className="mb-2">
                  <h3 className="heading-sm text-theme-primary inline">
                    {step.title}
                  </h3>
                  <span className="text-gray-600 ml-3">
                    ({step.timeframe})
                  </span>
                </div>
                <p className="body-base text-gray-700">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
