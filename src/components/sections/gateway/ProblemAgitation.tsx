import React from 'react';
import { Container } from '../../ui/Container';

export const ProblemAgitation: React.FC = () => {
  const problems = [
    {
      number: '1',
      title: 'The Blind Panic',
      description: 'Three months from your review with no idea what rating you\'ll receive. Your team works weekends, yet you\'re still guessing.'
    },
    {
      number: '2',
      title: 'The Reputational Damage',
      description: 'A RED rating creates years of political fallout. You\'ll explain to Ministers why the programme failed while stakeholder confidence takes years to rebuild.'
    },
    {
      number: '3',
      title: 'The Waste',
      description: '£150K+ on consultants who deliver templates, not confidence. 500+ hours of senior time. All for a review that still surprises you.'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <Container>
        <h2 className="heading-lg text-center text-theme-primary mb-16">
          The 3AM Gateway Review Nightmare
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {problems.map((problem) => (
            <div key={problem.number} className="relative">
              <div className="mb-4">
                <span className="text-5xl font-bold font-serif text-theme-accent">
                  {problem.number}
                </span>
              </div>
              <h3 className="heading-sm text-theme-primary mb-4">
                {problem.title}
              </h3>
              <p className="body-base text-gray-700">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center body-lg font-medium text-theme-primary">
          It doesn't have to be this way.
        </p>
      </Container>
    </section>
  );
};
