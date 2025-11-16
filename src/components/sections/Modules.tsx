import React from 'react';
import { Container } from '../ui/Container';
import { ModuleCard } from './ModuleCard';

export const Modules: React.FC = () => {
  const modules = [
    {
      badge: 'available' as const,
      badgeText: 'Available Now',
      title: 'Gateway Success',
      subtitle: 'NISTA & PAR Readiness Assessment',
      description:
        'Comprehensive readiness checks against 50+ NISTA and PAR criteria. Upload your programme documentation and receive immediate gap analysis with prioritized action plans.',
      features: [
        'Automated compliance checking against NISTA/PAR frameworks',
        'AI-powered gap analysis with evidence mapping',
        'Prioritized action plans with delivery timelines',
        'Real-time readiness scoring and trend analysis',
      ],
      imagePosition: 'right' as const,
    },
    {
      badge: 'coming-soon' as const,
      badgeText: 'Q2 2025',
      title: 'Baseline Success',
      subtitle: 'Project Baseline Health Checks',
      description:
        'Continuous monitoring of your project baseline integrity. Track schedule, cost, and scope health with early warning indicators for baseline drift.',
      features: [
        'Automated baseline variance detection',
        'Schedule and cost performance trending',
        'Scope change impact assessment',
        'Integrated Earned Value Management (EVM)',
      ],
      imagePosition: 'left' as const,
    },
    {
      badge: 'coming-soon' as const,
      badgeText: 'Q2 2025',
      title: 'Tender Success',
      subtitle: 'Tender Evaluation Support',
      description:
        'Streamline tender evaluation with AI-assisted compliance verification and comparative analysis across multiple bidders.',
      features: [
        'Automated compliance matrix generation',
        'Multi-bidder comparative analysis',
        'Risk-weighted scoring frameworks',
        'Audit trail for evaluation decisions',
      ],
      imagePosition: 'right' as const,
    },
    {
      badge: 'coming-soon' as const,
      badgeText: 'Q3 2025',
      title: 'Risk Success',
      subtitle: 'AI-Assisted Risk Management',
      description:
        'Proactive risk identification and monitoring aligned to ISO 31000. Continuous scanning of programme documentation for emerging risks.',
      features: [
        'Automated risk identification from documents',
        'ISO 31000 aligned risk framework',
        'Predictive risk scoring and trending',
        'Integration with enterprise risk registers',
      ],
      imagePosition: 'left' as const,
    },
    {
      badge: 'coming-soon' as const,
      badgeText: 'Q3 2025',
      title: 'Business Case Success',
      subtitle: 'HMT Green Book Five Case Model',
      description:
        'Comprehensive business case development and monitoring against HMT Green Book standards. Track benefits realization throughout delivery.',
      features: [
        'Five Case Model compliance checking',
        'Benefits realization tracking',
        'Investment decision support analytics',
        'Economic case sensitivity analysis',
      ],
      imagePosition: 'right' as const,
    },
  ];

  return (
    <section id="modules" className="section-padding bg-white">
      <Container>
        <div className="text-center mb-16">
          <p className="section-label mb-3">
            INTELLIGENT MODULES
          </p>
          <h2 className="heading-lg text-navy-primary">
            Purpose-Built for Major Programme Directors
          </h2>
        </div>

        <div className="space-y-24">
          {modules.map((module, index) => (
            <ModuleCard key={index} {...module} />
          ))}
        </div>
      </Container>
    </section>
  );
};
