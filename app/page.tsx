import { CasesSection } from '@/components/cases-section';
import { CtaBand } from '@/components/cta-band';
import { Hero } from '@/components/hero';
import { ProblemsSection } from '@/components/problems-section';
import { ProcessSection } from '@/components/process-section';
import { SolutionsSection } from '@/components/solutions-section';
import { WhyStarkcore } from '@/components/why-starkcore';

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <ProblemsSection />
      <SolutionsSection />
      <CasesSection />
      <ProcessSection />
      <WhyStarkcore />
      <CtaBand />
    </main>
  );
}
