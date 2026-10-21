import { Eyebrow } from '@/components/eyebrow';

// design.md §7.1 compound + §7.10: Eyebrow → H2 → optional lead, shared by the landing sections.
export function SectionHeader({
  id,
  eyebrow,
  title,
  lead,
}: {
  id: string;
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2
        id={id}
        className="mt-5 max-w-[24ch] text-[1.75rem] leading-[1.12] font-bold tracking-[-0.015em] md:text-[2.75rem]"
      >
        {title}
      </h2>
      {lead ? (
        <p className="text-muted-foreground mt-6 max-w-[60ch] text-[1.0625rem] leading-[1.7] md:text-lg">
          {lead}
        </p>
      ) : null}
    </>
  );
}
