import React from 'react';
import { GatewayHero } from '../components/sections/gateway/GatewayHero';
import { ProblemAgitation } from '../components/sections/gateway/ProblemAgitation';
import { SolutionOverview } from '../components/sections/gateway/SolutionOverview';
import { HowItWorks } from '../components/sections/gateway/HowItWorks';
import { Features } from '../components/sections/gateway/Features';
import { ROICalculator } from '../components/sections/gateway/ROICalculator';
import { GatewayCredibility } from '../components/sections/gateway/GatewayCredibility';
import { Pricing } from '../components/sections/gateway/Pricing';
import { Comparison } from '../components/sections/gateway/Comparison';
import { Guarantee } from '../components/sections/gateway/Guarantee';
import { GatewayFinalCTA } from '../components/sections/gateway/GatewayFinalCTA';

export const GatewaySuccess: React.FC = () => {
  return (
    <main>
      <GatewayHero />
      <ProblemAgitation />
      <SolutionOverview />
      <HowItWorks />
      <Features />
      <ROICalculator />
      <GatewayCredibility />
      <Pricing />
      <Comparison />
      <Guarantee />
      <GatewayFinalCTA />
    </main>
  );
};
