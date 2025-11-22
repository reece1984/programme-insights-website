import React from 'react';
import { Container } from '../../ui/Container';

export const SolutionOverview: React.FC = () => {
  const pillars = [
    {
      title: 'PREDICT',
      subtitle: 'Your AI-Powered Crystal Ball',
      timeframe: '(Week 1)',
      description: 'Know your likely rating 90+ days before reviewers arrive. Upload evidence, receive your predicted rating within 24 hours. Updated daily.'
    },
    {
      title: 'PREPARE',
      subtitle: 'Evidence That Actually Matters',
      timeframe: '(Ongoing)',
      description: 'Stop guessing what reviewers want. See gaps and staleness mapped to IPA criteria. Follow your roadmap, watch your score climb daily.'
    },
    {
      title: 'PERFORM',
      subtitle: 'Practice Makes Perfect',
      timeframe: '(90 Days)',
      description: 'Face AI reviewers modeled on real panels. Practice your defense, refine answers. GREEN is inevitable.'
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <Container>
        <h2 className="heading-lg text-center text-theme-primary mb-6">
          Continuous Readiness, Not Panicked Preparation
        </h2>
        <p className="body-lg text-center text-gray-700 mb-16 max-w-3xl mx-auto">
          Transform reviews from Russian roulette into predictable processes
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {pillars.map((pillar, index) => (
            <div key={index}>
              <div className="mb-4">
                <h3 className="section-label mb-2">{pillar.title}</h3>
                <h4 className="heading-sm text-theme-primary mb-2">
                  {pillar.subtitle}
                </h4>
                <p className="text-gray-600 mb-4">{pillar.timeframe}</p>
              </div>
              <p className="body-base text-gray-700">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
