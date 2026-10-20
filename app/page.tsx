import { CtaBand } from '@/components/cta-band';
import { WhyStarkcore } from '@/components/why-starkcore';

export default function Home() {
  return (
    <main className="flex-1">
      <WhyStarkcore />
      <CtaBand />
    </main>
  );
}
