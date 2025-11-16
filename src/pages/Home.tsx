import React from 'react';
import { Hero } from '../components/sections/Hero';
import { ProblemStatement } from '../components/sections/ProblemStatement';
import { PlatformOverview } from '../components/sections/PlatformOverview';
import { Modules } from '../components/sections/Modules';
import { TechnologySecurity } from '../components/sections/TechnologySecurity';
import { Credibility } from '../components/sections/Credibility';
import { SocialProof } from '../components/sections/SocialProof';
import { Resources } from '../components/sections/Resources';
import { FinalCTA } from '../components/sections/FinalCTA';

export const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <ProblemStatement />
      <PlatformOverview />
      <Modules />
      <TechnologySecurity />
      <Credibility />
      <SocialProof />
      <Resources />
      <FinalCTA />
    </main>
  );
};
